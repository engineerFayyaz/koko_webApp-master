import React from "react";

import { Button, Img, Input, Line, Text, TextArea } from "components";
import Header from "components/Header";

const ContactPage = () => {
  return (
    <>
      <div className="bg-gray-900 flex flex-col font-opensans items-center justify-start mx-auto p-1.5 shadow-bs w-full">
        <div className="flex flex-col gap-[54px] justify-start max-w-[1376px] mb-[46px] mx-auto md:px-5 w-full">
          <Header className="flex md:flex-col flex-row md:gap-5 items-center justify-center w-full" />
          <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start md:ml-[0] ml-[45px] w-[86%] md:w-full">
            <Img
              className="h-[217px] sm:h-auto md:mt-0 mt-[290px] object-cover w-[38%] md:w-full"
              src="images/img_kokotv2.png"
              alt="kokotvOne"
            />
            <Line className="bg-white-A700_75 md:h-0.5 h-[785px] md:ml-[0] ml-[101px] w-0.5 md:w-full" />
            <div className="flex flex-col md:gap-10 gap-[17px] justify-start md:ml-[0] ml-[211px] md:mt-0 mt-[26px] w-[36%] md:w-full">
              <Text
                className="md:ml-[0] ml-[137px] md:text-3xl sm:text-[28px] text-[32px] text-white-A700"
                size="txtOpenSansRomanBold32WhiteA700"
              >
                Contact Us
              </Text>
              <div className="flex flex-col gap-6 items-start justify-start mt-[31px] w-auto sm:w-full">
                  <div className="flex flex-col gap-1 items-start justify-start w-auto w-[99%] sm:w-full">
                  <Text
                    className="text-sm text-white-A700 w-auto"
                    size="txtOpenSansRomanSemiBold14"
                  >
                    Email
                  </Text>
                  <Input
                    name="mail"
                    placeholder="mail@abc.com"
                    className="font-nunitosans leading-[normal] p-0 placeholder:text-white-A700 text-left text-sm w-full"
                    wrapClassName="w-full"
                    type="email"
                  ></Input>
                </div>
                <div className="flex flex-col gap-1 items-start justify-start w-[99%] mt-6 w-auto sm:w-full">
                  <Text
                    className="text-sm text-white-A700 w-auto"
                    size="txtOpenSansRomanSemiBold14"
                  >
                    Subject
                  </Text>
                  <Input
                    name="xyz"
                    placeholder="XYZ"
                    className="font-nunitosans leading-[normal] p-0 placeholder:text-white-A700 text-[10px] text-left w-full"
                    wrapClassName="w-full"
                    size="md"
                  ></Input>
                </div>
                <div className="flex flex-col items-start justify-start mt-7 w-auto sm:w-full">
                  <div className="flex flex-col gap-1 items-start justify-start w-auto sm:w-full">
                    <Text
                      className="text-sm text-white-A700 w-auto"
                      size="txtOpenSansRomanSemiBold14"
                    >
                      Details
                    </Text>
                    <TextArea
                      className="bg-transparent border border-solid border-white-A700 font-nunitosans gap-[13px] h-[277px] leading-[normal] pb-[13px] pt-[18px] px-2.5 rounded-[5px] text-[10px] text-left placeholder:text-white-A700 text-white-A700 w-[420px]"
                      name="frameFour"
                      placeholder="e something..."
                      name="frameFour"
                      placeholder="e something..."
                    ></TextArea>
                  </div>
                </div>
                <Button
                  className="cursor-pointer font-extrabold leading-[normal] mt-[65px] rounded-md text-center text-lg w-[420px]"
                  color="purple_A100"
                  size="sm"
                  variant="fill"
                >
                  Send
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
