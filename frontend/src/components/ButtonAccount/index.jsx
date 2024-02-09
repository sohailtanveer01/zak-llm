import { useState, useEffect } from "react";
import { supabase } from "@/utils/supabaseClient";

const ButtonAccount = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [user, setUser] = useState(null);
    const [isOpen, setIsOpen] = useState(false); // State to manage dropdown visibility

    useEffect(() => {
        const getUser = async () => {
            const { data } = await supabase.auth.getUser();
            setUser(data.user);
        };

        getUser();
    }, [supabase]);

    const handleSignOut = async () => {
        await supabase.auth.signOut();
        window.location.href = "/landing";
    };

    const toggleDropdown = () => setIsOpen(!isOpen); // Function to toggle dropdown

    return (
        <div className="relative z-10">
            <button
                className="btn"
                onClick={toggleDropdown}
            >
                <div className="flex flex-row gap-4">
                    
                    <div>
                        {user?.user_metadata?.avatar_url ? (
                            <img
                                src={user?.user_metadata?.avatar_url}
                                alt="Profile picture"
                                className="w-6 h-6 rounded-full shrink-0"
                                referrerPolicy="no-referrer"
                                width={24}
                                height={24}
                            />
                        ) : (
                            <span className="w-8 h-8 bg-base-100 flex justify-center items-center rounded-full shrink-0 capitalize">
                                {user?.email?.charAt(0)}
                            </span>
                        )}
                    </div>
                    <div className="flex flex-row gap-4">
                            <div>
                        {user?.user_metadata?.name || user?.email?.split("@")[0] || "Account"}
                       </div>
                       <div>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                className={`w-5 h-5 duration-200 ml-2 ${isOpen ? "transform rotate-180" : ""}`}
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            </div>
                    </div>
                </div>
            </button>
            {isOpen && (
                <div className="absolute left-0 mt-3 w-48 bg-white shadow-lg rounded-lg ring-1 ring-black ring-opacity-5 p-1">
                    <button
                        className="flex items-center gap-2 hover:bg-gray-100 p-2 w-full rounded-lg text-left"
                        onClick={handleSignOut}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="w-5 h-5"
                        >
                            <path
                                fillRule="evenodd"
                                d="M3 4.25A2.25 2.25 0 015.25 2h5.5A2.25 2.25 0 0113 4.25v2a.75.75 0 01-1.5 0v-2a.75.75 0 00-.75-.75h-5.5a.75.75 0 00-.75.75v11.5c0 .414.336.75.75.75h5.5a.75.75 0 00.75-.75v-2a.75.75 0 011.5 0v2A2.25 2.25 0 0110.75 18h-5.5A2.25 2.25 0 013 15.75V4.25z"
                                clipRule="evenodd"
                            />
                            <path
                                fillRule="evenodd"
                                d="M6 10a.75.75 0 01.75-.75h9.546l-1.048-.943a.75.75 0 111.004-1.114l2.5 2.25a.75.75 0 010 1.114l-2.5 2.25a.75.75 0 11-1.004-1.114l1.048-.943H6.75A.75.75 0 016 10z"
                                clipRule="evenodd"
                            />
                        </svg>
                        Logout
                    </button>
                </div>
            )}
        </div>
    );
};

export default ButtonAccount;
