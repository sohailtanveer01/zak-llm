import paths from "@/utils/paths";
import LGroupImg from "./l_group.png";
import RGroupImg from "./r_group.png";
import AnythingLLMLogo from "@/media/logo/anything-llm.png";
import { useNavigate } from "react-router-dom";
import ButtonAccount from "@/components/ButtonAccount";

export default function OnboardingHome() {
  const navigate = useNavigate();
  return (
    <>

      <div className="relative w-screen h-screen flex overflow-hidden bg-[#2C2F35] md:bg-main-gradient">

        <div
          className="hidden md:block fixed bottom-10 left-10 w-[320px] h-[320px] bg-no-repeat bg-contain"
          style={{ backgroundImage: `url(${LGroupImg})` }}
        ></div>


        <div
          className="hidden md:block fixed top-10 right-10 w-[320px] h-[320px] bg-no-repeat bg-contain"
          style={{ backgroundImage: `url(${RGroupImg})` }}
        ></div>


        <div className="relative flex justify-center items-center m-auto h-full">

          <div className="flex flex-col h-full">
            <div className="flex justify-center items-center bg-white p-4 m-6 w-fit rounded-xl ">

              <ButtonAccount />
            </div>
            <div className="flex flex-col  h-full justify-center items-center">
            <p className="text-zinc-300 font-thin text-[24px]">Welcome to</p>
            <img
              src={AnythingLLMLogo}
              alt="AnythingLLM"
              className="md:h-[50px] flex-shrink-0 max-w-[300px]"
            />
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
    </>
  );
}
