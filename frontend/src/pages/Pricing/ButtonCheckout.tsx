"use client";

import { useState } from "react";
// import apiClient from "../../libs/api";
import config from "./config";
import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { supabase } from "../../utils/supabaseClient";

// This component is used to create Stripe Checkout Sessions
// It calls the /api/stripe/create-checkout route with the priceId, successUrl and cancelUrl
// Users must be authenticated. It will prefill the Checkout data with their email and/or credit card (if any)
// You can also change the mode to "subscription" if you want to create a subscription instead of a one-time payment
const ButtonCheckout = ({
  priceId,
  user,
  mode = "payment",
}: {
  priceId: string;
  user: any; 
  mode?: "payment" | "subscription";
}) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [fuser, setUser] = useState(null);
  useEffect(() => {
      const getUser = async () => {
          const { data } = await supabase.auth.getUser();
          if(data){
              setUser(data.user);
          }
      }
      getUser();
  }, [supabase]);

  const handlePayment = async () => {
    setIsLoading(true);
    if(fuser == null){
      alert("You must be signed in to make a purchase");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:3001/api/stripe/create-checkout",
        {
          priceId,
          successUrl: window.location.href,
          cancelUrl: window.location.href,
          mode,
          user,
        }
      );

      const { url } = response.data;
        console.log(url);
       window.location.href = url;
    } catch (e) {
      console.error(e);
    }

    setIsLoading(false);
  };

  return (
    <button
      className="btn btn-primary btn-block group rounded-lg w-full text-md h-full flex justify-center items-center transition duration-200 transform hover:scale-105"
      style={{ color: "#FFFFFF", background: "#1e293b"}}
      onClick={() => handlePayment()}
      // style={{ background: "#000000"}}
    >
  
      select plan
    </button>
  );
};

export default ButtonCheckout;
