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

            if (data) {
                setUser(data.user);
                console.log(data);
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
            console.log("data", profilesData);
            const hasAccess = profilesData[0]?.has_access;
            if (hasAccess == True) {
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
        <section className="bg-base-200 overflow-hidden " id="pricing" style={{ background: "linear-gradient(-225deg, #69EACB 0%, #EACCF8 48%, #6654F1 100%)" }}>
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

                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 md:gap-4 justify-center">
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
                                        <div class="mb-4 rounded-[4px] border-4 px-4 py-1.5">
                                            <p class="text-sm font-bold  text-center sm:text-sm">{plan.name}</p>
                                        </div>
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
                                    {plan.showContactForm ? (
                                        <div className="space-y-2">
                                            {/* Here you can add more details about contacting for this plan */}
                                            <a href="mailto:subscriptions@example.com?subject=Enterprise Plan Inquiry" className="btn btn-primary">
                                                Contact Us
                                            </a>
                                        </div>
                                    ) : (
                                        <>
                                            <p className={`text-5xl tracking-tight font-extrabold`}>
                                                ${plan.price}
                                            </p>
                                            <div className="flex flex-col justify-end mb-[4px]">
                                                <p className="text-xs text-base-content/60 uppercase font-semibold">
                                                    USD
                                                    <span class="text-sm font-light sm:text-sm lowercase">/mo</span>
                                                </p>
                                            </div>
                                        </>
                                    )}
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

                                    <ButtonCheckout priceId={plan.priceId} user={user} />

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
