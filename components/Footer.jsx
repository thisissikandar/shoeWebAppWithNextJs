import React from "react";
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";
import Wrapper from "./Wrapper";

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-14 pb-3 ">
      <Wrapper className="flex justify-between flex-col md:flex-row gap-[50px] md:gap-0">
        {/* left start */}
        <div className="flex gap-[50px] md:gap-[75px] lg:gap-[100px] flex-col md:flex-row">
          {/* menu start */}
          <div className="flex flex-col gap-3 shrink-0">
            <div className="font-oswald font-medium uppercase text-sm cursor-pointer">
              Find a store
            </div>
            <div className="font-oswald font-medium uppercase text-sm cursor-pointer">
              Become a partner
            </div>
            <div className="font-oswald font-medium uppercase text-sm cursor-pointer">
              Sign up for email
            </div>
            <div className="font-oswald font-medium uppercase text-sm cursor-pointer">
              send feeddback
            </div>
            <div className="font-oswald font-medium uppercase text-sm cursor-pointer">
              student discount
            </div>
          </div>
          {/* end menu */}

          {/* Normal Menu Start */}
          <div className="flex gap-[50px] md:gap-[75px] lg:gap-[100px] shrink-0">
            {/* Menu Start */}
            <div className="flex flex-col gap-3">
              <div className="font-oswald font-medium uppercase text-sm ">
                get help
              </div>
              <div className="text-sm text-white/[0.5] hover:text-white cursor-pointer ">
                Order status
              </div>
              <div className="text-sm text-white/[0.5] hover:text-white cursor-pointer ">
                Delivery
              </div>
              <div className="text-sm text-white/[0.5] hover:text-white cursor-pointer">
                Returns
              </div>
              <div className="ftext-sm text-white/[0.5] hover:text-white cursor-pointer">
                Payment Option
              </div>
              <div className="text-sm text-white/[0.5] hover:text-white cursor-pointer ">
                Contact Us
              </div>
            </div>
            {/* menu End  */}

            {/* Menu Start */}
            <div className="flex flex-col gap-3">
              <div className="font-oswald font-medium uppercase text-sm">
                About nike
              </div>
              <div className="text-sm text-white/[0.5] hover:text-white cursor-pointer">
                News
              </div>
              <div className="text-sm text-white/[0.5] hover:text-white cursor-pointer">
                Careers
              </div>
              <div className="text-sm text-white/[0.5] hover:text-white cursor-pointer">
                Investors
              </div>
              <div className="text-sm text-white/[0.5] hover:text-white cursor-pointer">
                Sustainability
              </div>
            </div>
            {/* End Menu */}
          </div>
          {/* Normal Menu end  */}
        </div>
        {/* end left Menu */}

        {/* right menu staart */}
        <div className="flex gap-4 justify-center md:justify-start">
          <div className="w-10 h-10 rounded-full bg-white/[0.25] flex items-center justify-center text-black hover:bg-white/[0.25] cursor-pointer">
            <FaFacebookF size={20} />
          </div>
          <div className="w-10 h-10 rounded-full bg-white/[0.25] flex items-center justify-center text-black hover:bg-white/[0.25] cursor-pointer">
            <FaTwitter size={20} />
          </div>
          <div
            onClick={() => window.open("https://www.instagram.com/", "_blank")}
            className="w-10 h-10 rounded-full bg-white/[0.25] flex items-center justify-center text-black hover:bg-white/[0.25] cursor-pointer"
          >
            <FaInstagram size={20} />
          </div>
          <div className="w-10 h-10 rounded-full bg-white/[0.25] flex items-center justify-center text-black hover:bg-white/[0.25] cursor-pointer">
            <FaYoutube size={20} />
          </div>
        </div>
        {/* RIGHT MENU End */}
      </Wrapper>

      <Wrapper className="flex justify-between mt-10 flex-col md:flex-row gap-[10px] md:gap-0">
        {/* left Start */}
        <div className="text-[12px] text-white/[0.5] hover:text-white cursor-pointer text-center md:text-left">
          © 2023 Nike, Inc. All Rights Reserved
        </div>
        {/* left end */}

           {/* RIGHT START */}
           <div className="flex gap-2 md:gap-5 text-center md:text-left flex-wrap justify-center">
                    <div className="text-[12px] text-white/[0.5] hover:text-white cursor-pointer">
                        Guides
                    </div>
                    <div className="text-[12px] text-white/[0.5] hover:text-white cursor-pointer">
                        Terms of Sale
                    </div>
                    <div className="text-[12px] text-white/[0.5] hover:text-white cursor-pointer">
                        Terms of Use
                    </div>
                    <div className="text-[12px] text-white/[0.5] hover:text-white cursor-pointer">
                        Privacy Policy
                    </div>
                </div>
                {/* RIGHT END */}
      </Wrapper>
    </footer>
  );
};

export default Footer;
