import React from "react";

import { Button, Img, Text } from "components";
import Header from "components/Header";

const BusinessplanPage = () => {
  return (
    <>
      <div className="bg-gray-900 flex flex-col font-opensans items-center justify-start mx-auto p-1.5 shadow-bs w-full">
        <div className="flex flex-col justify-start max-w-[1376px] mb-[20px] mx-auto md:px-5 w-full">
          <Header className="flex md:flex-col flex-row md:gap-5 items-center justify-center w-full" />
          <Text
            className="md:ml-[0] text-center mt-10  md:text-3xl sm:text-[28px] text-[32px] text-white-A700"
            size="txtOpenSansRomanBold32WhiteA700"
          >
            Choose your Membership
          </Text>
          <div className="flex flex-col gap-[23px] items-start justify-start md:ml-[0] ml-[630px] mt-[80px]  md:w-full">
            <Text
              className="capitalize md:text-3xl sm:text-[28px] text-[32px] text-white-A700 tracking-[1.00px]"
              size="txtOpenSansRomanBold32WhiteA700"
            >
              Business Plan
            </Text>
            <div className="flex flex-col  justify-start w-full">
              <Text
                className="md:text-3xl sm:text-[28px] text-[32px] text-white-A700"
                size="txtOpenSansRomanBold32WhiteA700"
              >
                Price: $480/month
              </Text>
            </div>
          </div>
          <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between md:ml-[0] ml-[45px] mt-[7px] w-[74%] md:w-full">
            <Img
              className="h-[217px] md:h-auto object-cover"
              src="images/img_kokotv2.png"
              alt="kokotvOne"
            />
            <div className="flex flex-col gap-5 items-center justify-start md:mt-0 mt-[59px]">
              <Button
                className="cursor-pointer flex items-center justify-center min-w-[353px] rounded-br-[3px] rounded-tr-[3px]"
                leftIcon={
                  <Img
                    className="mb-px mr-5"
                    src="images/img_fabrandsccamazonpay.svg"
                    alt="fa-brands:cc-amazon-pay"
                  />
                }
                color="purple_A100"
                size="md"
                variant="fill"
              >
                <div className="font-bold text-base text-center">
                  Pay with Amazon Pay
                </div>
              </Button>
              <Button
                className="cursor-pointer flex items-center justify-center min-w-[353px] rounded-br-[3px] rounded-tr-[3px]"
                leftIcon={
                  <Img
                    className="h-6 mb-px mr-5"
                    src="images/img_simpleiconspaytm.svg"
                    alt="simple-icons:paytm"
                  />
                }
                color="purple_A100"
                size="md"
                variant="fill"
              >
                <div className="font-bold text-base text-center">
                  Pay with Paytm
                </div>
              </Button>
              <Button
                className="cursor-pointer flex items-center justify-center min-w-[353px] rounded-br-[3px] rounded-tr-[3px]"
                leftIcon={
                  <Img
                    className="mb-px mr-5"
                    src="images/img_logosmastercard.svg"
                    alt="logos:mastercard"
                  />
                }
                color="purple_A100"
                size="md"
                variant="fill"
              >
                <div className="font-bold text-base text-center">
                  Pay with MasterCard
                </div>
              </Button>
              <Button
                className="cursor-pointer flex items-center justify-center min-w-[353px] rounded-br-[3px] rounded-tr-[3px]"
                leftIcon={
                  <div className="mb-px mr-5 bg-white-A700">
                    <Img
                      src="images/img_settings_white_a700.svg"
                      alt="settings"
                    />
                  </div>
                }
                color="purple_A100"
                size="md"
                variant="fill"
              >
                <div className="font-bold text-base text-center">
                  Pay with VISA
                </div>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BusinessplanPage;
