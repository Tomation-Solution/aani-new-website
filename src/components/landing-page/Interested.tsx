import React from "react";
import PLink from "../PLink";
import Playstore from '../../../public/aani/playstore.png'

const Interested = () => {
  return (
    <div className="bg-[#6C8AC0] text-white max-w-[600px] w-fit p-8">
      <h2 className="font-bold text-[36px]">
        {/* Join Now <br /> Membership App Now ? */}
        Download and activate
      </h2>
      <p className="my-4 font-normal text-[17px]">
        Download and activate our app to enjoy more collaborative benefits as a member
      </p>
      {/* <PLink
        text="Join Now"
        href="become-a-member"
        styles=""
      /> */}
      <a href="https://aani.rel8membership.com/"
    className={` bg-primary rounded-full p-4 p-2 font-poppins transition ease-in-out   hover:scale-105  duration-300   hover:opacity-80   outline-none  whitespace-nowrap rounded-md`}
      >
        Sign in
      </a>

<br /><br /><br />
    <a href="https://play.google.com/store/apps/details?id=com.tomation.BPMI" 
    target="_blank"
    rel="noreferrer" 
    >
      <img src={Playstore.src} alt="" />
    </a>
    </div>
  );
};

export const Interestedfn = () => {
  return (
    <div
      className={`bg-[url(/reel.jpg)] bg-no-repeat bg-cover flex justify-center items-center p-4 md:p-10`}
    >
      <div className="text-center text-white  w-fit ">
        <h2 className="font-bold text-[36px] mb-5 md:mb-12">
          Want to become a member via examination route?{" "}
        </h2>

        <PLink
          text="BECOME A MEMBER"
          href="become-a-member"
          styles="bg-primary rounded-full p-4"
        />
      </div>
    </div>
  );
};
export default Interested;
