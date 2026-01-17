import {
  Logo01,
  Logo02,
  Logo03,
  Logo04,
  Logo05,
  Logo06,
  Logo07,
  Logo08,
  Logo09,
  Logo10
} from "@/components/logos";
import { Marquee } from "@/components/ui/marquee";

const LogoCloud = () => {
  return (
    <div className="flex justify-center items-center px-4 pt-20 sm:pt-25">
      <div className="flex flex-col gap-10 sm:gap-14 lg:gap-19">

        
        <div className=" flex flex-wrap justify-center gap-6 md:gap-10 lg:gap-14 xl:gap-50
        ">
          <Logo01 />
          <Logo02 />
          <Logo03 />
          <Logo04 />
          <Logo05 />
        </div>

        {/* Row 2 */}
        <div className="  flex flex-wrap  justify-center  gap-6  md:gap-10  lg:gap-14  xl:gap-50
        ">
          <Logo06 />
          <Logo07 />
          <Logo08 />
          <Logo09 />
          <Logo10 />
        </div>

      </div>
    </div>
  );
};

export default LogoCloud;

