"use client";


import React from "react";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturesSection from "@/components/Features";
import MoreFeatures from "@/components/MoreFeatures";
import FAQ from "@/components/Faq";
import Footer from "@/components/Footer";
import SignInComponent from "../Signin";


export default function Landing() {
  
  return (
    <>
    {/* <main className="p-8 md:p-24" style={{ background: "linear-gradient(-225deg, #69EACB 0%, #EACCF8 48%, #6654F1 100%)" }}>
     <Navbar />
      <Hero/>
    </main>
    <FeaturesSection />
    <MoreFeatures />
    <FAQ />
    <Footer /> */}
    <SignInComponent />
    </>
  );
}
// background-image: linear-gradient(to right, #e4afcb 0%, #b8cbb8 0%, #b8cbb8 0%, #e2c58b 30%, #c2ce9c 64%, #7edbdc 100%);
// background-image: linear-gradient(to top, #4fb576 0%, #44c489 30%, #28a9ae 46%, #28a2b7 59%, #4c7788 71%, #6c4f63 86%, #432c39 100%);
// background-image: linear-gradient(-225deg, #69EACB 0%, #EACCF8 48%, #6654F1 100%);