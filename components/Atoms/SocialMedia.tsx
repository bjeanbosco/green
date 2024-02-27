import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import Link from "next/link";

const SocialMedia = () => {
  return (
    <div className="flex w-full justify-center">
      <div className="flex h-full w-1/5 gap-4 justify-evenly mb-4 items-center sm:w-full">
        <div className="p-2 flex items-center justify-center bg-primary rounded-full">
          <Link href={"https://www.facebook.com/GHArwanda/"} target="_blank">
            <FaFacebook className="md:w-5 md:h-5 sm:w-3 sm:h-3 text-white hover:text-[yellow]" />
          </Link>
        </div>
        <div className="p-2 flex items-center justify-center bg-primary rounded-full">
          <Link href={"https://twitter.com/GHA_rwanda"} target="_blank">
            <FaTwitter className="md:w-5 md:h-5 sm:w-3 sm:h-3 text-white hover:text-[yellow]" />
          </Link>
        </div>
        <div className="p-2 flex items-center justify-center bg-primary rounded-full">
          <Link href={"https://www.instagram.com/gha_rwanda/"} target="_blank">
            <FaInstagram className="md:w-5 md:h-5 sm:w-3 sm:h-3 text-white hover:text-[yellow]" />
          </Link>
        </div>
        <div className="p-2 flex items-center justify-center bg-primary rounded-full">
          <Link
            href={"https://www.youtube.com/channel/UCCv3PCH54mRGx8yAZ66_-gg"}
            target="_blank"
          >
            <FaYoutube className="md:w-5 md:h-5 sm:w-3 sm:h-3 text-white hover:text-[yellow]" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SocialMedia;
