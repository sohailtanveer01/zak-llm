"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import toast from "react-hot-toast";
import React from "react";
import { redirect } from "next/dist/server/api-utils";
import { supabase } from "../../utils/supabaseClient"
import ButtonAccount from "../ButtonAccount";



// This a login/singup page for Supabase Auth.
// Successfull login redirects to /api/auth/callback where the Code Exchange is processed (see app/api/auth/callback/route.js).
export default function SigninWG() {

    const [isLoading, setIsLoading] = useState<boolean>(false);

    const [user, setUser] = useState(null);
    useEffect(() => {
        const getUser = async () => {
            const { data } = await supabase.auth.getUser();
            if (data) {
                setUser(data.user);
            }
        }
        getUser();
    }, [supabase]);


    const handleSignup = async (e) => {
        e.preventDefault();

        setIsLoading(true);



        await supabase.auth.signInWithOAuth({
            provider: 'google',
            options: {
                redirectTo: `${window.location.origin}/dashboard`,
            }

        })
    };

    // In your button onClick, you can now just pass the event
    <button
        className="btn btn-block flex items-center justify-center"
        onClick={handleSignup}
        disabled={isLoading}
    >
        {/* ... */}
    </button>


    return (
            <>

            {user ? (<>
                <div className="space-y-8 max-w-xl mx-auto">
                    <div className="btn btn-block flex items-center space-x-2 justify-center">
                        {/* <ButtonAccount /> */}
                        <Link href="/">
                            <span className="text-lg cursor-pointer">Dashboard</span>
                        </Link>
                    </div>
                </div>
            </>) : (<>

                    <button
                        className="bg-white border py-2 w-full rounded-xl mt-5 flex justify-center items-center text-sm hover:scale-105 duration-300 text-[#002D74]"
                        onClick={handleSignup}
                        disabled={isLoading}
                    >
                        <div className="text-lg rounded-box mr-2">Sign-in with</div>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-6 h-6"
                            viewBox="0 0 48 48"
                        >
                            <path
                                fill="#FFC107"
                                d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"
                            />
                            <path
                                fill="#FF3D00"
                                d="m6.306 14.691 6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 16.318 4 9.656 8.337 6.306 14.691z"
                            />
                            <path
                                fill="#4CAF50"
                                d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.91 11.91 0 0 1 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z"
                            />
                            <path
                                fill="#1976D2"
                                d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 0 1-4.087 5.571l.003-.002 6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z"
                            />
                        </svg>

                    </button>

            </>)}

            </>

    );
}
