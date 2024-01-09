import React from "react";

import { Button, Img, Input, Line, Text, TextArea } from "components";
import Header from "components/Header";

const ContactPage = () => {
  return (
    <>
      <div className="bg-gray-900 flex flex-col font-opensans items-center justify-start mx-auto p-1.5 shadow-bs w-full">
        <div className="flex flex-col gap-[54px] justify-start max-w-[1376px] mb-[46px] mx-auto md:px-5 w-full">
          <Header className="flex md:flex-col flex-row md:gap-5 items-center justify-center w-full" />
          <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start md:ml-[0] w-[100%] md:w-full">
            <div className="image w-[50%] h-[460px] flex items-center justify-center">
            <Img
              className="h-[250px] sm:h-auto md:mt-0  object-cover  md:w-full"
              src="images/img_kokotv2.png"
              alt="kokotvOne"
            />
            </div>
           
            <Line className="bg-white-A700_75 md:h-0.5 h-[485px] md:ml-[0]  w-0.5 md:w-full" />
            <div className="flex flex-col md:gap-10 gap-[17px] justify-center items-center md:ml-[0]   md:mt-0  w-[50%] md:w-full">
              <Text
                className="md:ml-[0]  md:text-3xl sm:text-[28px] text-[32px] text-white-A700"
                size="txtOpenSansRomanBold32WhiteA700"
              >
                Contact Us
              </Text>
              <form action="">
              <div className="flex flex-col gap-6  items-start justify-start mt-[0px] w-auto sm:w-full">
                  <div className="flex flex-col gap-1 items-start justify-start w-auto w-[99%] sm:w-full">
                  <Text
                    className="text-sm text-white-A700 w-auto"
                    size="txtOpenSansRomanSemiBold14"
                  >
                    Email *
                  </Text>
                  <Input
                    name="mail"
                    title = "Please enter your email address"
                    placeholder="mail@abc.com"
                    className="font-nunitosans leading-[normal] p-0 placeholder:text-white-A700 text-left text-sm w-full"
                    wrapClassName="w-full"
                    type="email"
                    required
                  ></Input>
                </div>
                <div className="flex flex-col gap-1 items-start justify-start w-[99%]  w-auto sm:w-full">
                  <Text
                    className="text-sm text-white-A700 w-auto"
                    size="txtOpenSansRomanSemiBold14"
                  >
                    Subject *
                  </Text>
                  <Input
                    name="xyz"
                    title = "Please enter a subject..."
                    placeholder="XYZ"
                    className="font-nunitosans leading-[normal] p-0 placeholder:text-white-A700 text-sm text-left w-full"
                    wrapClassName="w-full"
                    size="md"
                    required
                  ></Input>
                </div>
                <div className="flex flex-col items-start justify-start w-auto sm:w-full">
                  <div className="flex flex-col gap-1 items-start justify-start w-auto sm:w-full">
                    <Text
                      className="text-sm text-white-A700 w-auto"
                      size="txtOpenSansRomanSemiBold14"
                    >
                      Details *
                    </Text>
                    <TextArea
                     rows = "4"
                    title = "Please enter a detail message here"
                      className="bg-transparent border border-solid border-white-A700 font-nunitosans gap-[13px]  leading-[normal] pb-[13px] pt-[18px] px-2.5 rounded-[5px] text-sm text-left placeholder:text-white-A700 text-white-A700 w-[420px]"
                      name="frameFour"
                      placeholder="e something..."
                    ></TextArea>
                  </div>
                </div>
                <Button
                  className="cursor-pointer font-extrabold leading-[normal]  rounded-md text-center text-lg w-[420px]"
                  color="purple_A100"
                  size="sm"
                  variant="fill"
                  type="submit"
                >
                  Send
                </Button>
              </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
