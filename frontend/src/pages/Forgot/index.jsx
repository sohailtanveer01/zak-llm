import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { supabase } from '../../utils/supabaseClient';
import showToast from '@/utils/toast';
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
    const history = useNavigate();

    useEffect(() => {
        const getUser = async () => {
            const { data } = await supabase.auth.getUser();

            if (data.user != null) {
                history("/dashboard")
                return;
            }
        }
        getUser();
    }, [supabase]);



    // State to manage if the password is visible or not

    // Function to toggle the password visibility


    // Function to toggle the confirm password visibility


    const [email, setEmail] = useState('');







    const handleSubmit = async (event) => {
        event.preventDefault(); // Prevent the form from submitting the traditional way


        try {
            const { error, user } = await supabase.auth.resetPasswordForEmail(email, 
                {redirectTo: 'http://app.askagi.com/reset',}
                );

            if (error) throw error;
            // alert('Login successful! Welcome back.'); // Show success alert
            showToast('Please check your email for the password reset link.');
        } catch (error) {
            showToast(`Request failed: ${error.error_description || error.message}`); // Show error alert
        }
    };
    return (

        <div class="absolute  h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]">

        <section class="bg-gray-50 min-h-screen flex items-center justify-center">
            <div class="bg-gray-100 flex rounded-2xl shadow-lg max-w-3xl p-5 items-center">
                <div class="md:w-1/2 px-8 md:px-16">
                    <h2 class="font-bold text-2xl text-[#002D74]">ask AGI</h2>

                    <p class="text-[#002D74] mt-4">Enter your email address to reset your password.</p>

                    {/* <h3 class="font-bold  text-[#002D74] mt-4">Official Email</h3> */}

                    <form onSubmit={handleSubmit} class="flex flex-col gap-4">

                        <input className="p-2 mt-4 rounded-xl border" type="email" name="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} required />

                        <button type='submit' class="bg-[#002D74] rounded-xl text-white py-2 hover:scale-105 duration-300">Reset Password</button>
                    </form>

                    <div class="mt-5 text-xs  py-4 text-[#002D74]">
            <a href="/">Login?</a>
          </div>

                </div>

                <div class="md:block hidden w-1/2">
                    <img class="rounded-2xl" src="/askagi.jpeg" />
                </div>
            </div>
        </section>
    </div>
    );
};

export default ForgotPassword;


