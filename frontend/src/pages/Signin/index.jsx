import SigninWG from '@/components/SigninWG';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { supabase } from '../../utils/supabaseClient';
import showToast from '@/utils/toast';
import { useNavigate } from "react-router-dom";

const SignInComponent = () => {
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

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const handleResetPassword = async () => {
    const { data, error } = await supabase.auth.api.resetPasswordForEmail(email);

    if (error) {
      console.error('Error sending password reset email:', error);
    } else {
      alert('Please check your email for the password reset link.');
    }
  };


  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent the form from submitting the traditional way


    try {
      const { error, user } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) throw error;
      // alert('Login successful! Welcome back.'); // Show success alert
      window.location.href = "/dashboard";
    } catch (error) {
      showToast(`Login failed: ${error.error_description || error.message}`); // Show error alert
    }
  };
  return (
    <div class="absolute h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]">

        <section class="min-h-screen flex items-center justify-center">
          <div class="bg-gray-50 flex rounded-2xl shadow-lg max-w-3xl p-5 items-center">
            <div class="md:w-1/2 px-8 md:px-16">
              <h2 class="font-bold text-2xl text-[#002D74]">ask AGI</h2>
              <p class="text-xs mt-4 text-[#002D74]">Enter your credentials to log in</p>

              <form onSubmit={handleSubmit} class="flex flex-col gap-4">
                <input class="p-2 mt-8 rounded-xl border" type="email" name="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} required />
                <div class="relative">
                  <input class="p-2 rounded-xl border w-full" type={isPasswordVisible ? 'text' : 'password'} name="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required />
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
                <button type='submit' class="bg-[#002D74] rounded-xl text-white py-2 hover:scale-105 duration-300">Login</button>
              </form>

              <div class="mt-6 grid grid-cols-3 items-center text-gray-400">
                <hr class="border-gray-400" />
                <p class="text-center text-sm">OR</p>
                <hr class="border-gray-400" />
              </div>


              <SigninWG />

              <div class="mt-5 text-xs border-b border-[#002D74] py-4 text-[#002D74]">
                <a href="/forgot">Forgot your password?</a>
              </div>

              <div class="mt-3 text-xs flex justify-between items-center text-[#002D74]">
                <p>Don't have an account?</p>
                <Link to="/register" class="py-2 px-5 bg-white border rounded-xl hover:scale-110 duration-300">Register</Link>
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

export default SignInComponent;


