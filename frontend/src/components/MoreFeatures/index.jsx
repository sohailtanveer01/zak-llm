import React from 'react';

const FeatureBlock = ({ title, description, children }) => {
    return (
        <div className="p-10 max-w-sm rounded-lg border border-gray-200 shadow-md" style={{ backgroundColor: '#f7f7f7' }}>
            <h3 className="mb-2 text-xl font-bold tracking-tight text-gray-900">{title}</h3>
            <p className="mb-3 font-normal" style={{ color: '#707066' }}>{description}</p>
            {children}
        </div>
    );
};

const MoreFeatures = () => {
    return (
        <div className="bg-gray-50 p-10 h-auto mt-10">
            <h1 className="text-5xl font-extrabold text-center mb-12">This is the last chatbot you will need.</h1>
            <div className='flex flex-col justify-center items-center gap-8'>
                <div className="flex flex-row justify-center  md:grid-cols-2 gap-8">

                        <FeatureBlock 
                            title="Privacy"
                            description="Your data is important, and we don’t need it. AskAGI allows you to run everything privately – ensuring no data leaves your instance."
                        >
                        <img src="/privacy.png" alt="Shoes" />
                        </FeatureBlock>

                    <FeatureBlock
                        title="Full third-party control"
                        description="You have the freedom to choose your providers! Pick any vector database you’d like to use. 
                    AskAGI also supports all open-source and enterprise hosted models for LLMs"
                    >
                        {/* Icons or any other content can go here */}
                        <img src="/third-party.png" alt="Screenshot" className="rounded-lg shadow-md" />
                    </FeatureBlock>

                </div>
                <div className="flex flex-row justify-center  md:grid-cols-2 gap-8">

                    <FeatureBlock
                        title="Import Data"
                        description="Expand your chatbot's knowledge by uploading PDFs, word documents, text files and more. Manage access with only a few clicks"
                    >
                        {/* Icons or any other content can go here */}
                        <img src="/import-data.png" alt="Screenshot" className="rounded-lg shadow-md" />

                    </FeatureBlock>


                    <FeatureBlock
                        title="Open Source"
                        description="Open source software provides transparency, customization and community-driven development."
                    >
                        {/* Icons or any other content can go here */}
                        <img src="/open-source.png" alt="Screenshot" className="rounded-lg shadow-md" />

                    </FeatureBlock>

                </div>
            </div>
        </div>
       
    );
};

export default MoreFeatures;
