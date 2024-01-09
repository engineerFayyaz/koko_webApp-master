import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, CheckBox, Img, Input, Line, Text } from "components";
import Header from "components/Header";

const LoginPage = () => {
  const navigate = useNavigate();
  

  return (
    <>
      <div className="bg-gray-900 flex flex-col font-opensans items-center justify-start mx-auto p-1.5 shadow-bs w-full">
        <div className="flex flex-col gap-[54px] justify-start max-w-[1376px] mb-[46px] mx-auto md:px-5 w-full">
          <Header className="flex md:flex-col flex-row md:gap-5 items-center justify-center w-full" />
          <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start md:ml-[0] ml-[45px] w-[87%] md:w-full">
            <Img
              className="h-[217px] sm:h-auto md:mt-0 mt-[290px] object-cover w-[38%] md:w-full"
              src="images/img_kokotv2.png"
              alt="kokotvOne"
            />
            <Line className="bg-white-A700_75 md:h-0.5 h-[885px] md:ml-[0] ml-[101px] w-0.5 md:w-full" />
            <div className="flex flex-col md:gap-10 gap-[131px] justify-start md:ml-[0] ml-[211px] md:mt-0 mt-[29px] w-[36%] md:w-full">
              <div className="flex flex-col gap-[15px] items-start justify-start md:ml-[0] ml-[18px] w-[88%] md:w-full">
                <div className="flex flex-row items-center justify-between w-full">
                  <Text
                    className="md:text-3xl sm:text-[28px] text-[32px] text-purple-A100"
                    size="txtOpenSansRomanBold32"
                  >
                    Login
                  </Text>
                  <Text
                    className="common-pointer md:text-3xl sm:text-[28px] text-[32px] text-white-A700"
                    size="txtOpenSansRomanBold32WhiteA700"
                    onClick={() => navigate("/signup")}
                  >
                    Sign Up
                  </Text>
                </div>
                <Line className="bg-purple-A100 h-px w-[6%]" />
              </div>
              <div className="flex flex-col items-start justify-start w-full">
                <div
                  className="common-pointer border border-solid border-white-A700 flex flex-row font-nunitosans gap-[13px] items-center justify-center p-2.5 rounded-sm w-[420px] sm:w-full"
               //Google Login Function Call Here
                >
                  <Img
                    className="h-[25px] md:h-auto object-cover rounded-[10px] w-[25px]"
                    src="images/img_image2.png"
                    alt="imageTwo"
                  />
                  <Text
                    className="text-sm text-white-A700 w-auto"
                    size="txtNunitoSansBold14"
                  >
                    Continue with Google
                  </Text>
                </div>
                <Text
                  className="md:ml-[0] ml-[83px] mt-9 text-white-A700 text-xs"
                  size="txtCatamaranRomanSemiBold12"
                >
                  ------------- or Sign in with Email -------------{" "}
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
                      name="email_One"
                      placeholder="mail@abc.com"
                      className="font-nunitosans leading-[normal] p-0 placeholder:text-white-A700 text-left text-sm w-full"
                      wrapClassName="w-full"
                      type="email"
                    ></Input>
                  </div>
                  <div className="flex flex-col gap-2 items-start justify-start w-auto sm:w-full">
                    <div className="flex flex-col gap-1 items-start justify-start w-auto w-[99%] sm:w-full">
                      <Text
                        className="text-sm text-white-A700 w-auto"
                        size="txtOpenSansRomanSemiBold14"
                      >
                        Password
                      </Text>
                      <Input
                        name="password_One"
                        placeholder="*****************"
                        className="font-nunitosans leading-[normal] p-0 placeholder:text-white-A700 text-[10px] text-left w-full"
                        wrapClassName="w-full"
                        size="md"
                      ></Input>
                    </div>
                    <div className="flex flex-row gap-[222px] items-start justify-between w-auto sm:w-full">
                      <CheckBox
                        className="font-nunitosans leading-[normal] text-left w-full text-white-A700 text-xs"
                        inputClassName="border-2 border-purple-A100 border-solid h-3 mr-[5px] w-3"
                        name="rememberme"
                        id="rememberme"
                        label="Remember Me"
                      ></CheckBox>
                      <a
                        href="javascript:"
                        className="text-purple-A100 text-xs w-full"
                      >
                        <Text size="txtOpenSansRomanSemiBold12">
                          Forgot Password?
                        </Text>
                      </a>
                    </div>
                  </div>
                </div>
                <Button
                  className="common-pointer cursor-pointer font-extrabold font-nunitosans leading-[normal] mt-[29px] rounded-md text-center text-lg w-[420px]"
                  onClick={() => navigate("/home1")}
                  color="purple_A100"
                  size="sm"
                  variant="fill"
                >
                  Login
                </Button>
                <div className="flex flex-row gap-2.5 items-center justify-center md:ml-[0] ml-[52px] mt-[50px] w-auto">
                  <Text
                    className="text-lg text-white-A700 w-auto"
                    size="txtNunitoSansRegular18"
                  >
                    Not Registered Yet?
                  </Text>
                  <a className="text-lg text-purple-A100 w-auto">
                    <Text
                      className="common-pointer"
                      size="txtOpenSansRomanSemiBold18"
                      onClick={() => navigate("/signup")}
                    >
                      Create an account
                    </Text>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
