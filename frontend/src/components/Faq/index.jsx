
import { useRef, useState } from "react";

// <FAQ> component is a lsit of <Item> component
// Just import the FAQ & add your FAQ content to the const faqList arrayy below.



const faqList = [
    {
        question: "What comes with the subscription?",
        answer: (
            <div className="relative bg-white p-4 flex gap-2 items-center w-full py-5 text-left rounded-md  space-y-2 leading-relaxed">
                You will receive a website for your private AI chatbot. You will only need to provide an API key for your OpenAI or Azure OpenAI account to complete the setup.

                You optionally have the ability to use your own vector database API key as well!

                The Mintplex Labs team will continually maintain, update and improve the software, so be sure to provide feedback to ask for features!
            </div>
        ),
    },
    {
        question: "Is this hard to set up?",
        answer: (
            <div className="relative bg-white p-4 flex gap-2 items-center w-full py-5  text-left rounded-md  space-y-2 leading-relaxed">
                No! Setting up your own chatbot takes less than 5 minutes with no coding necessary.

                We have a simple guide and video tutorial to walk you through the process.

                For enterprise customers, we provide on-site installation in coordination with your IT team.
            </div>
        ),
    },
    {
        question: "Where are my documents saved?",
        answer: (
            <div className="relative bg-white p-4 flex gap-2 items-center w-full py-5 text-base rounded-md  space-y-2 leading-relaxed">
                When you upload a document, it gets saved to the vector database of your choice. We currently support Pinecone, Chroma, LanceDB and Weaviate.

                By default, you will be provided with a private database using LanceDB.

                Only YOU have access to those documents. We don’t have access to any of your data!
            </div>
        ),
    },
    {
        question: "Why use zak-llm?",
        answer: (
            <div className="relative bg-white p-4 flex gap-2 items-center w-full py-5  text-left rounded-md md:text-lg space-y-2 leading-relaxed">
                When using ChatGPT, your coversations and data are collected by OpenAI.

                However, when you build your own chatbot using an API key, no data is collected.

                And for document uploads via plug-ins, you have no visibility or control over where the documents get stored.

                But when you control your own database, no one else has access to that data, making AnythingLLM the secure option.
            </div>
        ),
    },
];

// const FaqItem = ({ item }) => {
//     const accordion = useRef(null);
//     const [isOpen, setIsOpen] = useState(false);

//     return (
//         <li className="mb-5"> {/* Add margin bottom to each list item except the last one */}
//             <button
//                 className="relative bg-white p-4 flex gap-2 items-center w-full py-5 text-base font-semibold text-left rounded-2xl md:text-lg" // Removed border color and added white background and rounded-full
//                 onClick={(e) => {
//                     e.preventDefault();
//                     setIsOpen(!isOpen);
//                     if (!isOpen) {
//                         // Only scroll to item if we're opening it, not closing
//                         accordion.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
//                     }
//                 }}
//                 aria-expanded={isOpen}
//             >
//                 <span
//                     className={`flex-1 text-gray-800 ${isOpen ? "text-primary" : ""}`} // Adjust text color
//                 >
//                     {item?.question}
//                 </span>

//                 {/* SVG for plus/minus icon */}
//                 <svg
//                     className={`w-6 h-6 transition-transform duration-200 ${isOpen ? "transform rotate-180" : ""}`}
//                     fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
//                 >
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 12h12m-6-6v12" />
//                 </svg>
//             </button>

//             <div
//                 ref={accordion}
//                 className={`transition-all duration-300 ease-in-out overflow-hidden`}
//                 style={{
//                     maxHeight: isOpen ? accordion.current.scrollHeight + "px" : "0",
//                     opacity: isOpen ? 1 : 0
//                 }}
//             >
//                 <div className="pb-5 leading-relaxed">{item?.answer}</div>
//             </div>
//         </li>
//     );
// };

const FAQ = () => {
    return (
        // <div className="w-full p-10">
        //     <section className="flex flex-col p-4 justify-center rounded-xl" id="faq" style={{ backgroundColor: '#f2f1ef' }}>
        //         <h1 className="text-center text-6xl p-4 text-base-content mb-10"> {/* Increased font size */}
        //             Want to Learn More?
        //         </h1>
        //         <div className="mx-auto flex flex-col gap-12 w-1/2 ">
        //             <ul className="space-y-4"> {/* Adjusted space between list items */}
        //                 {faqList.map((item, i) => (
        //                     <FaqItem key={i} item={item} />
        //                 ))}
        //             </ul>
        //         </div>
        //         <h1 className="text-center text-6xl p-4 text-base-content m-10"> {/* Increased font size */}
        //             Stay in touch with us
        //         </h1>
        //         <form className="flex flex-col items-center">
        //             <input
        //                 className="p-4 mb-4 border-2 border-gray-600 w-1/4 rounded-xl text-lg"
        //                 type="email"
        //                 placeholder="name@email.com"
        //                 // value={email}
        //                 // onChange={(e) => setEmail(e.target.value)}
        //                 required
        //             />
        //             <button
        //                 className="bg-black text-white p-4 rounded text-lg font-semibold w-1/4 rounded-xl"
        //                 type="submit"
        //             >
        //                 Stay in touch with us
        //             </button>
        //         </form>
        //     </section>
        // </div>

        <>
            <div className="w-full p-8">
                <section className="flex flex-col p-4 gap-4 justify-center rounded-xl" id="faq" style={{ backgroundColor: '#f2f1ef' }}>
                    <h1 className="text-center text-6xl p-4 text-base-content mb-10"> {/* Increased font size */}
                        Want to Learn More?
                    </h1>
                    <div className="collapse collapse-arrow bg-white">
                        <input type="radio" name="my-accordion-2" checked="checked" />
                        <div className="collapse-title text-xl font-medium">
                            What comes with the subscription?                </div>
                        <div className="collapse-content flex">
                            <p className="relative bg-white p-4 items-center justify-center gap-2 items-center w-full py-5 text-base rounded-md  space-y-2 leading-relaxed">You will receive a website for your private AI chatbot. You will only need to provide an API key for your OpenAI or Azure OpenAI account to complete the setup.<br />

                                You optionally have the ability to use your own vector database API key as well!<br />

                                The Mintplex Labs team will continually maintain, update and improve the software, so be sure to provide feedback to ask for features!</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow bg-white">
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title text-xl font-medium">
                            Is this hard to set up?
                        </div>
                        <div className="collapse-content">
                            <p className="relative bg-white p-4 items-center justify-center gap-2 items-center w-full py-5 text-base rounded-md  space-y-2 leading-relaxed">
                                No! Setting up your own chatbot takes less than 5 minutes with no coding necessary.

                                We have a simple guide and video tutorial to walk you through the process.

                                For enterprise customers, we provide on-site installation in coordination with your IT team.
                            </p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow bg-white">
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title text-xl font-medium">
                            Where are my documents saved?                        </div>
                        <div className="collapse-content">
                            <p className="relative bg-white p-4 items-center justify-center gap-2 items-center w-full py-5 text-base rounded-md  space-y-2 leading-relaxed">
                                When you upload a document, it gets saved to the vector database of your choice. We currently support Pinecone, Chroma, LanceDB and Weaviate.

                                By default, you will be provided with a private database using LanceDB.

                                Only YOU have access to those documents. We don’t have access to any of your data!
                            </p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow bg-white">
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title text-xl font-medium">
                            Why use zak-llm?
                        </div>
                        <div className="collapse-content">
                            <p className="relative bg-white p-4 items-center justify-center gap-2 items-center w-full py-5 text-base rounded-md  space-y-2 leading-relaxed">
                                When using ChatGPT, your coversations and data are collected by OpenAI.

                                However, when you build your own chatbot using an API key, no data is collected.

                                And for document uploads via plug-ins, you have no visibility or control over where the documents get stored.

                                But when you control your own database, no one else has access to that data, making AnythingLLM the secure option.
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center m-4">
                        <h1 className="text-center text-6xl p-4 text-base-content m-10"> {/* Increased font size */}
                            Stay in touch with us</h1>
                        <div className="join">
                            <input className="input input-bordered join-item" placeholder="Email" />
                            <button className="btn join-item rounded-r-full">Subscribe</button>
                        </div>
                    </div>
                </section>

            </div>
        </>
    );
};

export default FAQ;
