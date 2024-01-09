import React from "react";

import { useNavigate } from "react-router-dom";

import { useGoogleLogin } from "@react-oauth/google";

import { Button, CheckBox, Img, Input, Line, Text } from "components";
import Header from "components/Header";

const SignUpPage = () => {
  const navigate = useNavigate();
  const googleSignIn = useGoogleLogin({
    onSuccess: (res) => {
      console.log("res", res);
      alert("Login successfull. 😍");
    },
  });

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
            <Line className="bg-white-A700_75 md:h-0.5 h-[885px] md:ml-[0] ml-[101px] w-0.5 md:w-full" />
            <div className="flex flex-col justify-start md:ml-[0] ml-[211px] md:mt-0 mt-[29px] w-[36%] md:w-full">
              <div className="flex flex-row items-center justify-between md:ml-[0] ml-[18px] w-[89%] md:w-full">
                <Text
                  className="common-pointer md:text-3xl sm:text-[28px] text-[32px] text-white-A700"
                  size="txtOpenSansRomanBold32WhiteA700"
                  onClick={() => navigate("/")}
                >
                  Login
                </Text>
                <Text
                  className="md:text-3xl sm:text-[28px] text-[32px] text-purple-A100"
                  size="txtOpenSansRomanBold32"
                >
                  Sign Up
                </Text>
              </div>
              <Line className="bg-purple-A100 h-px md:ml-[0] ml-[355px] mr-[43px] mt-[15px] w-[5%]" />
              <div className="flex flex-col items-start justify-start mt-[58px] w-full">
                <div
                  className="common-pointer border border-solid border-white-A700 flex flex-row font-nunitosans gap-[13px] items-center justify-center p-2.5 rounded-sm w-[420px] sm:w-full"
                 
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
                  ------------- or Sign up with Email -------------{" "}
                </Text>
                <div className="flex flex-col gap-1 items-start justify-start mt-[31px] w-[99%] w-auto sm:w-full">
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
                <div className="flex flex-col gap-1 items-start justify-start mt-[19px] w-[99%] w-auto sm:w-full">
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
                <div className="flex flex-col font-nunitosans gap-2 items-start justify-start mt-[19px] w-auto sm:w-full">
                  <div className="flex flex-col gap-1 items-start justify-start w-auto w-[291%] sm:w-full">
                    <Text
                      className="text-sm text-white-A700 w-auto"
                      size="txtOpenSansRomanSemiBold14"
                    >
                      Password
                    </Text>
                    <Input
                      name="password_Three"
                      placeholder="*****************"
                      className="font-nunitosans leading-[normal] p-0 placeholder:text-white-A700 text-[10px] text-left w-full"
                      wrapClassName="w-full"
                      size="md"
                    ></Input>
                  </div>
                  <div className="flex flex-col items-start justify-start w-auto sm:w-full">
                    <CheckBox
                      className="leading-[normal] text-left text-xs text-white-A700 "
                      inputClassName="border-2 border-purple-A100 border-solid h-3 mr-[5px] w-3"
                      name="rememberme"
                      id="rememberme"
                      label="Remember Me"
                    ></CheckBox>
                  </div>
                </div>
                <div className="flex flex-col font-nunitosans gap-2 items-start justify-start mt-[19px] w-auto sm:w-full">
                  <div className="flex flex-col gap-1 items-start justify-start w-auto w-[130%] sm:w-full">
                    <Text
                      className="text-sm text-white-A700 w-auto"
                      size="txtOpenSansRomanSemiBold14"
                    >
                      Site Name
                    </Text>
                    <Input
                      name="frameFour"
                      placeholder="socitiv.com/"
                      className="font-bold font-nunitosans leading-[normal] p-0 placeholder:text-white-A700 text-[10px] text-left w-full"
                      wrapClassName="w-full"
                      size="md"
                    ></Input>
                  </div>
                  <div className="flex flex-col items-start justify-start w-auto sm:w-full">
                    <CheckBox
                      className="leading-[normal] text-left text-xs text-white-A700"
                      inputClassName="border-2 border-purple-A100 border-solid h-3 mr-[5px] w-3"
                      name="iagreetorecieve_One"
                      id="iagreetorecieve_One"
                      label="I agree to recieve marketing communications from Socitv"
                      size="xs"
                    ></CheckBox>
                  </div>
                </div>
                <Button
                  className="common-pointer cursor-pointer font-extrabold font-nunitosans leading-[normal] mt-[23px] rounded-md text-center text-lg w-[420px]"
                  onClick={() => navigate("/creatorstype")}
                  color="purple_A100"
                  size="sm"
                  variant="fill"
                >
                  Sign Up
                </Button>
                <div className="flex flex-row gap-2.5 items-center justify-center md:ml-[0] ml-[88px] mt-[50px] w-auto">
                  <Text
                    className="common-pointer text-lg text-white-A700 w-auto"
                    size="txtNunitoSansRegular18"
                    
                  >
                    Already Have Account?
                  </Text>
                  <a
                    href="javascript:"
                    className="text-lg text-purple-A100 w-auto"
                  >
                    <Text size="txtOpenSansRomanSemiBold18"
                     onClick={() => navigate("/")}
                    >Login</Text>
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

export default SignUpPage;
