import e from 'cors';
import React from 'react';

const FeaturesSection = () => {

  const sectionStyle = { marginBottom: '4rem' }; // This corresponds to 64px or 'mb-16' in Tailwind
  const sectionStyle2 = { marginRight: '8rem' }; // This corresponds to 32px or 'mb-8' in Tailwind
  const sectionStyle3 = { marginLeft: '8rem' }; // This corresponds to 128px or 'mb-32' in Tailwind
  return (
    <>

      <section className="bg-neutral text-neutral-content">
        <div className="max-w-7xl mx-auto px-8 py-16 md:py-32 text-center">

          <div className="bg-white rounded-lg shadow-xl flex flex-col ">
            {/* Heading */}
            <div className="text-center mb-12 py-10">
              <h1 className="text-6xl">
                Why ZakLLM?
              </h1>
            </div>

            <div className='flex flex-col space-y-16 w-full  justify-center items-center'>
              <div className='flex flex-col w-1/2 sm:w-1/2 md:flex-row md:w-full justify-center items-center space-y-8 md:space-y-0 md:space-x-8 '>

                {/* Image container */}
                <div className="w-full lg:w-1/4 xl:w-1/4">
                  <img src="/features-users.png" alt="Screenshot" className="rounded-lg shadow-md mx-auto" />
                </div>

                {/* Text container - Responsive adjustments applied */}
                <div className="w-full md:w-1/2 lg:w-2/3 xl:w-3/4 bg-base-100 shadow-xl p-4 sm:p-6">
                  <p className='text-sky-400 font-bold'>Flexible</p>
                  <h2 className="text-xl sm:text-2xl md:text-3xl mb-2">For businesses of all sizes</h2>
                  <p className="text-sm sm:text-base md:text-lg text-gray-700 mb-4">Fine-grained multi-user permissioning, access control to chats and more is just a click away.</p>
                  <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg">
                    Launch
                  </button>
                </div>

              </div>


              <div className='f2 w-full' style={sectionStyle}>
                {/* Image and text-container */}
                <div className='flex flex-row space-x-14  w-full justify-center items-center'>

                  {/* Text container */}
                  <div className="max-w-xs sm:max-w-sm md:w-96 bg-base-100 shadow-xl p-4 sm:p-6">
                    <p className='text-sky-400 font-bold'>Secure</p>
                    <h2 className="text-xl sm:text-2xl md:text-3xl mb-2">Compliance Ready.</h2>
                    <p className="text-sm sm:text-base text-gray-700 mb-4">Since AnythingLLM works with everything you can<br /> use what works with your business.</p>
                    <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg">
                      Launch
                    </button>
                  </div>

                  {/* Image container */}
                  <div className="card-compact w-96 bg-base-100 shadow-xl">

                    <figure>
                      <img src="/complience-ready.png" alt="Screenshot" className="rounded-lg shadow-md" />
                    </figure>
                  </div>
                </div>
              </div>


              <div className='f3 w-full' style={sectionStyle}>

                {/* Image and text-container */}

                <div className='flex flex-row space-x-14  w-full justify-center items-center'>

                  {/* Image container */}
                  <div className="card-compact w-96 bg-base-100 shadow-xl">

                    <figure>
                      <img src="/custom-models.png" alt="Screenshot" className="rounded-lg shadow-md" />
                    </figure>
                  </div>

                  {/* Text container */}
                  <div className="max-w-xs sm:max-w-sm md:w-96 bg-base-100 shadow-xl p-4 sm:p-6">
                    <p className='text-sky-400 font-bold'>Works with the state of the art</p>
                    <h2 className="text-xl sm:text-2xl md:text-3xl mb-2">Supports custom <br /> Models</h2>
                    <p className="text-sm sm:text-base text-gray-700 mb-4">We don't lock you into a single LLM provider. Use <br /> enterprise models like GPT-4, a custom model, or an<br />open-source model like Llama, Mistral, and more.</p>
                    <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg">
                      Launch
                    </button>
                  </div>

                </div>

              </div>

              <div className='f4 w-full' >

                {/* Image and text-container */}
                <div className='flex flex-row space-x-14  w-full justify-center items-center'>



                  {/* Text container */}
                  <div className="max-w-xs sm:max-w-sm md:w-96 bg-base-100 shadow-xl p-4 sm:p-6">
                    <p className='text-sky-400 font-bold'>Unlimited Documents</p>
                    <h2 className="text-xl sm:text-2xl md:text-3xl mb-2">More than PDFs</h2>
                    <p className="text-sm sm:text-base text-gray-700 mb-4">PDFs, word documents, and so much more make up your business - now you can use them all.</p>
                    <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg">
                      Launch
                    </button>
                  </div>


                  {/* Image container */}
                  <div className="card-compact w-96 bg-base-100 shadow-xl">
                    <figure>
                      <img src="/customization.png" alt="Screenshot" className="rounded-lg shadow-md" />

                    </figure>
                  </div>

                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
export default FeaturesSection;
