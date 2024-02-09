import { useEffect, useState } from "react";
import config from "./config";
import ButtonCheckout from "./ButtonCheckout";
import { useNavigate } from "react-router-dom";

import { supabase } from "../../utils/supabaseClient"
import ButtonAccount from "@/components/ButtonAccount";

const Pricing = () => {
    const [user, setUser] = useState(null);
    const [paid, setPaid] = useState(null);
    useEffect(() => {
        const getUser = async () => {
            const { data } = await supabase.auth.getUser();

            if(data){
                setUser(data.user);
            }



            // Query profiles table to check if user has access
            const { data: profilesData, error } = await supabase
                .from("profiles")
                .select("has_access")
                .eq("id", data.user.id);

            if (error) {
                console.error("Error fetching profile data:", error);
                return;
            }

            const hasAccess = profilesData[0]?.has_access;
            if (hasAccess == true) {
                setPaid(true);
            }

            console.log("Has access:", hasAccess);
            // if(hasAccess==false){
            //     // Redirect to '/pricing' page
            // history("/pricing");
            // }

            // if(hasAccess==true && data){
            //     history("/onboarding");
            // };
        }
        getUser();
    }, [supabase]);




    return (
        <section className="bg-base-200 overflow-hidden" id="pricing" style={{ background: "linear-gradient(-225deg, #69EACB 0%, #EACCF8 48%, #6654F1 100%)" }}>
            <div className="flex justify-center bg-white p-2 m-2 w-fit rounded-xl">
                {(user) ? (
                    <ButtonAccount />
            ) : (<></>)}
            </div>
            <div className="py-24 px-8 max-w-5xl mx-auto">
                <div className="flex flex-col text-center w-full mb-20">
                    <p className="font-medium text-primary mb-8">Pricing</p>
                    <h2 className="font-bold text-5xl tracking-tight">
                        Start building your,<br />second brain today.
                    </h2>
                </div>

                <div className="relative flex justify-center flex-row items-center items-stretch gap-8">
                    {config.stripe.plans.map((plan) => (
                        <div key={plan.priceId} className="relative w-full max-w-lg">

                            {plan.isFeatured && (
                                <div
                                    className={`absolute -inset-[1px] rounded-[9px] bg-primary z-10`}
                                ></div>
                            )}

                            <div className="relative flex flex-col h-full gap-5 gap-8 z-10 bg-base-100 p-10 rounded-lg border-4" >
                                <div className="flex justify-between items-center gap-4">
                                    <div>
                                        <p className="text-lg text-xl font-bold">{plan.name}</p>
                                        {plan.description && (
                                            <p className="text-base-content/80 mt-2">
                                                {plan.description}
                                            </p>
                                        )}
                                    </div>
                                </div>
                                <div className="flex gap-2">
                                    {plan.priceAnchor && (
                                        <div className="flex flex-col justify-end mb-[4px] text-lg ">
                                            <p className="relative">
                                                <span className="absolute bg-base-content h-[1.5px] inset-x-0 top-[53%]"></span>
                                                <span className="text-base-content/80">
                                                    ${plan.priceAnchor}
                                                </span>
                                            </p>
                                        </div>
                                    )}
                                    <p className={`text-5xl tracking-tight font-extrabold`}>
                                        ${plan.price}
                                    </p>
                                    <div className="flex flex-col justify-end mb-[4px]">
                                        <p className="text-xs text-base-content/60 uppercase font-semibold">
                                            USD
                                        </p>
                                    </div>
                                </div>
                                {plan.features && (
                                    <ul className="space-y-2.5 leading-relaxed text-base flex-1">
                                        {plan.features.map((feature, i) => (
                                            <li key={i} className="flex items-center gap-2">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20" // Ensure this matches the icon's size
                                                    fill="currentColor"
                                                    className="w-4 h-4 opacity-80 shrink-0" // Using standard Tailwind size classes
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>


                                                <span>{feature.name} </span>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                                <div className="space-y-2">
                                    {/* {paid ? (<> <button
                                        className="btn btn-primary btn-block group rounded-lg w-full text-md h-full flex justify-center items-center"
                                        style={{ color: "#FFFFFF", background: "#1e293b" }}
                                    // style={{ background: "#000000"}}
                                    >
                                     
                                            <svg
                                                className="w-5 h-5 fill-primary-content group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-200"
                                                viewBox="0 0 375 509"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path d="M249.685 14.125C249.685 11.5046 248.913 8.94218 247.465 6.75675C246.017 4.57133 243.957 2.85951 241.542 1.83453C239.126 0.809546 236.463 0.516683 233.882 0.992419C231.301 1.46815 228.917 2.69147 227.028 4.50999L179.466 50.1812C108.664 118.158 48.8369 196.677 2.11373 282.944C0.964078 284.975 0.367442 287.272 0.38324 289.605C0.399039 291.938 1.02672 294.226 2.20377 296.241C3.38082 298.257 5.06616 299.929 7.09195 301.092C9.11775 302.255 11.4133 302.867 13.75 302.869H129.042V494.875C129.039 497.466 129.791 500.001 131.205 502.173C132.62 504.345 134.637 506.059 137.01 507.106C139.383 508.153 142.01 508.489 144.571 508.072C147.131 507.655 149.516 506.503 151.432 504.757L172.698 485.394C247.19 417.643 310.406 338.487 359.975 250.894L373.136 227.658C374.292 225.626 374.894 223.327 374.882 220.99C374.87 218.653 374.243 216.361 373.065 214.341C371.887 212.322 370.199 210.646 368.17 209.482C366.141 208.318 363.841 207.706 361.5 207.707H249.685V14.125Z" />
                                            </svg>
                                        
                                        Thanks for your support
                                    </button></>) : (<ButtonCheckout priceId={plan.priceId} user={user} />)} */}
                                    <ButtonCheckout priceId={plan.priceId} user={user} />

                                    <p className="flex items-center justify-center gap-2 text-sm text-center text-base-content/80 font-medium relative">
                                        Pay once. Access forever.
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Pricing;
