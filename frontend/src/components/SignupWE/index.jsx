import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '../../utils/supabaseClient';
import showToast from '@/utils/toast';
const SignupWE = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');


    // State to manage if the password is visible or not
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState(false);

    // Function to toggle the password visibility
    const togglePasswordVisibility = () => {
        setIsPasswordVisible(!isPasswordVisible);
    };

    // Function to toggle the confirm password visibility
    const toggleConfirmPasswordVisibility = () => {
        setIsConfirmPasswordVisible(!isConfirmPasswordVisible);
    };

    const handleRegister = async (e) => {
        e.preventDefault();

        const getUserByEmail = async (email) => {
            let { data: user, error } = await supabase
                .from('users') // or the name of your users table if different
                .select('*')
                .eq('email', email)
                .single(); // use this if you are sure there is only one user with this email

            if (error) {
                console.error('Error fetching user', error);
                return null;
            }

            return user;
        };

        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;


        } else {
            const user = await getUserByEmail(email);
            if (user) {
                // User exists, you can now compare the password (which should be done securely on the server side!)
                // If passwords match
                showToast('User with this email already exists! Please use a different email.');
            } else {

                try {

                    const { user, error } = await supabase.auth.signUp({

                        email: email,
                        password: password,
                    });

                    if (error) {
                        // If the error status is 400, it might indicate that the email is already in use.

                        showToast(error.error_description || error.message);
                        console.error(error);
                    } else {
                        showToast('Please check your email to verify your account.');
                        // Redirect user or perform additional actions
                    }
                } catch (error) {
                    showToast(error.error_description || error.message);
                }
            }
        }
    };

    return (
        <div class="absolute h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]">

        <section className="min-h-screen flex items-center justify-center">
            <div className="bg-gray-100 flex rounded-2xl shadow-lg max-w-3xl p-5 items-center">
                <div className="md:w-1/2 px-8 md:px-16">
                    <h2 className="font-bold text-2xl text-[#002D74]">ask AGI</h2>
                    <p className="text-xs mt-4 text-[#002D74]">Enter your credentials to log in</p>

                    <form onSubmit={handleRegister} className="flex flex-col gap-4">
                        <input className="p-2 mt-8 rounded-xl border" type="email" name="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} required />
                        <div className="relative">
                            <input className="p-2 rounded-xl border w-full" type={isPasswordVisible ? 'text' : 'password'} name="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required />
                            <svg onClick={togglePasswordVisibility} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="gray" className="bi bi-eye absolute top-1/2 right-3 -translate-y-1/2" viewBox="0 0 16 16">
                                {isPasswordVisible ? (<>

                                    <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                                    <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                                </>
                                ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" id="eye-closed"><rect width="256" height="256" fill="none"></rect><line x1="201.15" x2="223.96" y1="127.305" y2="166.813" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"></line><line x1="154.182" x2="161.296" y1="149.263" y2="189.607" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"></line><line x1="101.73" x2="94.615" y1="149.244" y2="189.594" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"></line><line x1="54.809" x2="31.889" y1="127.272" y2="166.971" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"></line><path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="8" d="M31.99943,104.87509C48.81193,125.68556,79.63353,152,128,152c48.36629,0,79.18784-26.31424,96.00039-47.12468"></path></svg>
                                )}
                            </svg>
                        </div>
                        <div className="relative">
                            <input className="p-2 rounded-xl border w-full" type={isConfirmPasswordVisible ? 'text' : 'password'} name="password" placeholder="Confirm Password" onChange={(e) => setConfirmPassword(e.target.value)} required />
                            <svg onClick={toggleConfirmPasswordVisibility} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="gray" className="bi bi-eye absolute top-1/2 right-3 -translate-y-1/2" viewBox="0 0 16 16">
                                {isConfirmPasswordVisible ? (<>

                                    <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                                    <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                                </>
                                ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" id="eye-closed"><rect width="256" height="256" fill="none"></rect><line x1="201.15" x2="223.96" y1="127.305" y2="166.813" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"></line><line x1="154.182" x2="161.296" y1="149.263" y2="189.607" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"></line><line x1="101.73" x2="94.615" y1="149.244" y2="189.594" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"></line><line x1="54.809" x2="31.889" y1="127.272" y2="166.971" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"></line><path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="8" d="M31.99943,104.87509C48.81193,125.68556,79.63353,152,128,152c48.36629,0,79.18784-26.31424,96.00039-47.12468"></path></svg>
                                )}
                            </svg>
                        </div>
                        <button type='submit' className="bg-[#002D74] rounded-xl text-white py-2 hover:scale-105 duration-300">Register</button>
                    </form>



                    <div className="mt-3 text-xs flex justify-between items-center text-[#002D74]">
                        <p>have an account already?</p>
                        <Link to="/" className="py-2 px-5 bg-white border rounded-xl hover:scale-110 duration-300">Login</Link>

                    </div>
                </div>

                <div className="md:block hidden w-1/2">
                    <img className="rounded-2xl" src="/askagi.jpeg" />
                </div>
            </div>
        </section>
    </div>
    );
};

export default SignupWE;


