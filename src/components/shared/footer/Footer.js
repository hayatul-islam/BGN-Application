import React from "react";
import logoBg from "../../../assets/img/logBg.png";
import logo from "../../../assets/img/logo.png";

function Footer() {
  return (
    <>
      <div className="pt-40">
        <div className="grid grid-cols-[30%_15%_15%_15%_15%] px-[70px] py-12 justify-between">
          <div>
            <div className="w-[70px] h-[70px] relative">
              <img src={logoBg} alt="" />
              <img
                className="w-[60px] h-[60px] absolute top-[50%] right-[50%] translate-x-[50%] translate-y-[-50%] "
                src={logo}
                alt=""
              />
            </div>
            <div>
              <h4 className="text-[22px] font-medium">Bryan George Music</h4>
              <p className="text-[14px] pt-1">
                With over 15 years of experience, Bryan George Music has rocked
                parties big and small, all around the Washington DC area with a
                dedication to awesome music based on your tastes.
              </p>
            </div>
          </div>
          <div className="space-y-4">
            <h4 className="text-[22px] font-bold">Contact</h4>
            <address className="text-[15px]">
              <span>info@bryangeorgemusic.com</span>
              <span className="block">(202) 345-6695</span>
              <span>10207 Brunswick Avenue Silver Spring, MD 20902</span>
            </address>
          </div>
          <div className="space-y-4">
            <h4 className="text-[22px] font-bold">Pages</h4>
            <ul className="text-[15px]">
              <li className="hover:underline decoration-[#ffb937]">Home</li>
              <li className="hover:underline decoration-[#ffb937]">Our DJS</li>
              <li className="hover:underline decoration-[#ffb937]">Contact</li>
              <li className="hover:underline decoration-[#ffb937]">Blog</li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="text-[22px] font-bold">Social</h4>
            <ul className="text-[15px]">
              <li className="hover:underline decoration-[#ffb937]">Facebook</li>
              <li className="hover:underline decoration-[#ffb937]">
                Instragram
              </li>
              <li className="hover:underline decoration-[#ffb937]">Youtube</li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="text-[22px] font-bold">Locations</h4>
            <ul className="text-[15px]">
              <li className="hover:underline decoration-[#ffb937]">
                Washington DC
              </li>
              <li className="hover:underline decoration-[#ffb937]">Leesburg</li>
              <li className="hover:underline decoration-[#ffb937]">
                Frederick
              </li>
              <li className="hover:underline decoration-[#ffb937]">
                Rockville
              </li>
              <li className="hover:underline decoration-[#ffb937]">
                Annapolis
              </li>
              <li className="hover:underline decoration-[#ffb937]">Bethesda</li>
              <li className="hover:underline decoration-[#ffb937]">
                Arlington
              </li>
              <li className="hover:underline decoration-[#ffb937]">
                Falls Church
              </li>
            </ul>
          </div>
        </div>
        <div className="py-4">
          <p className="text-center opacity-30">
            ©Copyright All Rights Reserved{" "}
          </p>
        </div>
      </div>
    </>
  );
}

export default Footer;
