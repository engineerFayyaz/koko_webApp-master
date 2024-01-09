import React from "react";

import { Img, Text } from "components";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <>
    {/* style={{background:"linear-gradient(90deg, rgba(175,0,255,1) 0%, rgba(122,41,193,1) 40%, rgba(21,22,28,1) 97%)"}} */}
      <footer className={` w-full pt-[3em] pb-[20px] bg-gray-900`} >
        {/* <div className="flex flex-col gap-4 items-center justify-center w-full">
          <Text
            className="md:ml-[0] ml-[42px] mr-[1110px] md:text-3xl sm:text-[28px] text-[32px] text-gray-100"
            size="txtOpenSansRomanBold32Gray100"
          >
            Related TV Shows
          </Text>
          <div className="flex flex-col items-center justify-start w-full">
            <div className="flex flex-col items-center justify-start w-full">
              <div className="flex md:flex-col flex-row gap-5 items-center justify-between w-full">
                <div className="md:flex-1 gap-5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 items-center justify-between w-[47%] md:w-full">
                  <Img
                    className="h-[300px] md:h-auto object-cover w-full"
                    src="images/img_faj2uifuuaul6u.png"
                    alt="faj2uifuuaul6u"
                  />
                  <Img
                    className="h-[300px] md:h-auto object-cover w-full"
                    src="images/img_mv5bntfinzblyme.png"
                    alt="mv5bntfinzblyme"
                  />
                  <Img
                    className="h-[300px] md:h-auto object-cover w-full"
                    src="images/img_yae6uvqijdn411.png"
                    alt="yae6uvqijdn411"
                  />
                </div>
                <div className="md:flex-1 gap-5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 items-center justify-center w-[47%] md:w-full">
                  <Img
                    className="h-[300px] md:h-auto object-cover w-full"
                    src="images/img_faj2uifuuaul6u.png"
                    alt="faj2uifuuaul6u_One"
                  />
                  <Img
                    className="h-[300px] md:h-auto object-cover w-full"
                    src="images/img_mv5bntfinzblyme.png"
                    alt="mv5bntfinzblyme_One"
                  />
                  <Img
                    className="h-[300px] md:h-auto object-cover w-full"
                    src="images/img_yae6uvqijdn411.png"
                    alt="yae6uvqijdn411_One"
                  />
                </div>
                <div className="flex md:flex-1 flex-col items-center justify-start w-[4%] md:w-full">
                  <Img
                    className="h-[300px] md:h-auto object-cover w-full"
                    src="images/img_faj2uifuuaul6u_300x52.png"
                    alt="faj2uifuuaul6u_Two"
                  />
                </div>
              </div>
            </div>
          </div>
        </div> */}
          <Text
            className=" md:text-3xl sm:text-[28px] text-center text-[32px] text-gray-100"
            size="txtOpenSansRomanBold32Gray100"
          >
            Contact Details
          </Text>
          <div className="flex md:flex-col flex-row md:gap-10 gap-[8em]  items-start justify-start w-full p-[4em] md:px-0 sm:px-0" >
            <div className="flex md:flex-1 flex-col  justify-start w-[45%] md:w-full">
              <div className="flex flex-col  justify-start w-full">
                <div className="flex flex-col gap-[11px]  justify-start w-full">
                  <Text
                    className="md:text-2xl sm:text-[18px] text-[30px] text-gray-100"
                    size="txtOpenSansRomanBold32Gray100"
                  >
                    KOKO TV
                  </Text>
                  <div className="flex flex-col gap-5">
                  <div>
                  <Text
                    className="text-base text-[14px] text-gray-100"
                    size="txtOpenSansRomanBold16Gray100"
                  >
                   Telephone: 
                  </Text>
                   <span className="text-gray-100 text-[13px] " size= "txtOpenSansRomanRegular8Gray100">845-207-8055</span>
                  </div>
                  <div>
                  <Text
                    className="text-base text-[14px] text-gray-100"
                    size="txtOpenSansRomanBold16Gray100"
                  >
                   Address:
                  </Text>
                   <span className="text-gray-100 text-[13px] " size= "txtOpenSansRomanRegular8Gray100">276 5th Avenue Suite 704-3216 NY, NY 10001</span>
                  </div>
                  <div>
                  <Text
                    className="text-base text-[14px] text-gray-100"
                    size="txtOpenSansRomanBold16Gray100"
                  >
                   Email: 
                  </Text>
                   <span className="text-gray-100 text-[13px] " size= "txtOpenSansRomanRegular8Gray100">info@kokotv.co</span>
                  </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex md:flex-1 flex-col  justify-start w-[30%] md:w-full">
              <div className="flex flex-col justify-start w-full">
                <div className="flex flex-col gap-[11px]  justify-start w-full">
                  <Text
                    className="md:text-2xl sm:text-[18px] text-[22px] text-gray-100"
                    size="txtOpenSansRomanBold32Gray100"
                  >
                    CRM INFO
                  </Text>
                  <div className="flex flex-col gap-0">
                  <div>
                  <Text
                    className="text-base text-[14px] text-gray-100"
                    size="txtOpenSansRomanBold16Gray100"
                  >
                   Klaviyo 
                  </Text>
                  
                  </div>
                  <div>
                  <Text
                    className="text-base text-[14px] text-gray-100"
                    size="txtOpenSansRomanBold16Gray100"
                  >
                   Email: 
                  </Text>
                   <span className="text-gray-100 text-[13px] " size= "txtOpenSansRomanRegular8Gray100">info@kokotv.co</span><br />
                   <span className="text-gray-100 text-[13px] " size= "txtOpenSansRomanRegular8Gray100">Password shared via WhatsApp</span>
                  </div>
                  </div>
                </div>
              </div>
            </div>
           
          </div>
          <div className="flex sm:flex-col flex-row font-opensans gap-8 items-start justify-start md:w-full md:mt-[2em] pl-[4em] md:p-0">
            <a className="text-base text-white-A700">
              <Text
                className="common-pointer"
                size="txtOpenSansRomanRegular16"
                onClick={() => navigate("/privacy")}
              >
                Privacy Policy
              </Text>
            </a>
            <Text
              className="common-pointer text-base text-white-A700"
              size="txtOpenSansRomanRegular16"
              onClick={() => navigate("/disclaimer")}
            >
              Disclaimer
            </Text>
            <a className="text-base text-white-A700">
              <Text
                className="common-pointer"
                size="txtOpenSansRomanRegular16"
                onClick={() => navigate("/termsconditions")}
              >
                Terms and Conditions
              </Text>
            </a>
            <Text
              className="text-base text-white-A700"
              size="txtOpenSansRomanRegular16"
            >
              Terms of Use
            </Text>
          </div>
      </footer>
    </>
  );
};



export default Footer;
