import paths from "@/utils/paths";

import { useNavigate } from "react-router-dom";
import ButtonAccount from "@/components/ButtonAccount";

export default function OnboardingHome() {
  const navigate = useNavigate();
  return (
    <>

    
      <div class="relative h-full w-full bg-slate-950">
        <div class="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]">
          <div className="relative w-screen h-screen flex overflow-hidden">

         


            <div className="relative flex justify-center items-center m-auto h-full">

              <div className="flex flex-col h-full">
                <div className="flex justify-center items-center bg-white p-4 m-6 w-fit rounded-xl ">

                  <ButtonAccount />
                </div>
                <div className="flex flex-col  h-full justify-center items-center">
                  <p className="text-black font-thin text-[24px]">Welcome to</p>
                  {/* <img
      src={AnythingLLMLogo}
      alt="AnythingLLM"
      className="md:h-[50px] flex-shrink-0 max-w-[300px]"
    /> */}
                  <h1 className="text-white text-4xl font-bold">
                    AskAGI</h1>
                  <button
                    onClick={() => navigate(paths.onboarding.llmPreference())}
                    className="animate-pulse w-full md:max-w-[350px] md:min-w-[300px] text-center py-3 bg-white text-black font-semibold text-sm my-10 rounded-md hover:bg-gray-200"
                  >
                    Get started
                  </button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>


    </>
  );
}
