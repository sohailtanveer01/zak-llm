import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <div className='h-auto w-full flex flex-col'>
            <section className="bg-base-200 overflow-hidden w-full h-full">
                <div className="py-24 px-8 max-w-5xl mx-auto w-full h-full">
                    <div className="flex flex-col text-center w-full mb-20 gap-4">
                        <h2 className="font-bold text-6xl tracking-tight mb-2">
                            Your personal,<br />private ChatGPT.
                        </h2>
                        <p className="font-medium text-gray-500 mt-4 text-lg">A ChatGPT built with your business in mind with full<br />
                            permission controls, customization and privacy.</p>
                        <div className="rounded-box m-4">
                            <Link to="/pricing" className="bg-white text-black py-4 px-4 rounded-xl mt-4 w-1/4">
                                Get Zakllm
                            </Link>
                            {/* <p className="font-medium mt-4 text-gray-600 text-sm">Pay once Access Forever</p> */}
                        </div>
                    </div>
                    <div className="iframe-container" style={{ position: 'relative', overflow: 'hidden', paddingTop: '56.25%', height: 0 }}>
                        <iframe
                            src="https://www.youtube.com/embed/gd4xkmzLWSQ?autoplay=1&mute=1"
                            allow="autoplay; encrypted-media"
                            title="Video Title"
                            style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                bottom: 0,
                                right: 0,
                                width: '100%',
                                height: '100%',
                                border: 'none',
                            }}
                        ></iframe>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Hero;
