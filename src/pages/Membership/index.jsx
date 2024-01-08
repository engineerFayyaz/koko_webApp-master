import React from "react";

import { Button, Img, Line, List, Text } from "components";
import Header from "components/Header";

const MembershipPage = () => {
  return (
    <>
      <div className="bg-gray-900 flex flex-col font-opensans items-center justify-start mx-auto p-1.5 shadow-bs w-full">
        <Header className="flex md:flex-col flex-row md:gap-5 items-center justify-center md:px-5 w-full" />
        <Text
          className="mt-[83px] md:text-3xl sm:text-[28px] text-[32px] text-white-A700"
          size="txtOpenSansRomanBold32WhiteA700"
        >
          Choose your Membership
        </Text>
        <List
          className="sm:flex-col flex-row font-inter gap-8 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center max-w-[1316px] mb-[249px] mt-9 mx-auto md:px-5 w-full"
          orientation="horizontal"
        >
          <div className="bg-white-A700 flex flex-1 flex-col items-center justify-start pl-3 py-3 rounded-[20px] w-full">
            <div className="flex flex-col justify-start my-3 w-full">
              <div className="flex flex-row gap-2 items-center justify-start ml-1 md:ml-[0] w-3/4 md:w-full">
                <Img
                  className="h-10 w-10"
                  src="images/img_lightbulb.svg"
                  alt="lightbulb"
                />
                <Text
                  className="md:text-3xl sm:text-[28px] text-[32px] text-gray-900_01"
                  size="txtInterBold32"
                >
                  Free for All
                </Text>
              </div>
              <div className="flex flex-col gap-6 items-start justify-start ml-3 md:ml-[0] mt-8 w-auto">
                <Text
                  className="text-[22px] text-gray-500 sm:text-lg md:text-xl w-full"
                  size="txtInterRegular22"
                >
                  What You’ll Get
                </Text>
                <div className="flex flex-row gap-2 items-start justify-start w-[281px]">
                  <Img
                    className="h-6 w-6"
                    src="images/img_bxscheckcircle.svg"
                    alt="bxscheckcircle"
                  />
                  <Text
                    className="text-gray-900_01 text-lg w-auto"
                    size="txtInterRegular18"
                  >
                    Lorem ipsum dolor sit amet
                  </Text>
                </div>
                <div className="flex flex-row gap-2 items-start justify-start w-[281px]">
                  <Img
                    className="h-6 w-6"
                    src="images/img_bxscheckcircle.svg"
                    alt="bxscheckcircle_One"
                  />
                  <Text
                    className="text-gray-900_01 text-lg w-auto"
                    size="txtInterRegular18"
                  >
                    Lorem ipsum dolor sit amet
                  </Text>
                </div>
                <div className="flex flex-row gap-2 items-start justify-start w-[281px]">
                  <Img
                    className="h-6 w-6"
                    src="images/img_bxscheckcircle.svg"
                    alt="bxscheckcircle_Two"
                  />
                  <Text
                    className="text-gray-900_01 text-lg w-auto"
                    size="txtInterRegular18"
                  >
                    Lorem ipsum dolor sit amet
                  </Text>
                </div>
                <div className="flex flex-row gap-2 items-start justify-start w-[281px]">
                  <Img
                    className="h-6 w-6"
                    src="images/img_bxscheckcircle.svg"
                    alt="bxscheckcircle_Three"
                  />
                  <Text
                    className="text-gray-900_01 text-lg w-auto"
                    size="txtInterRegular18"
                  >
                    Lorem ipsum dolor sit amet
                  </Text>
                </div>
              </div>
              <Line className="bg-gray-500 h-px mr-3 mt-9 w-[96%]" />
              <Text
                className="ml-3 md:ml-[0] mt-[63px] md:text-3xl sm:text-[28px] text-[32px] text-gray-900_01"
                size="txtInterBold32"
              >
                FREE
              </Text>
              <Button
                className="cursor-pointer font-semibold min-w-[257px] ml-3 md:ml-[0] mr-6 mt-6 shadow-bs1 text-[22px] text-center sm:text-lg md:text-xl"
                shape="round"
                color="purple_A100"
                size="md"
                variant="fill"
              >
                Choose
              </Button>
            </div>
          </div>
          <div className="bg-white-A700 flex flex-1 flex-col items-center justify-start pl-3 py-3 rounded-[20px] w-full">
            <div className="flex flex-col justify-start my-3 w-full">
              <div className="flex flex-row gap-2 items-center justify-start ml-1 md:ml-[0] w-[65%] md:w-full">
                <Img
                  className="h-10 w-10"
                  src="images/img_lightbulb.svg"
                  alt="lightbulb"
                />
                <Text
                  className="md:text-3xl sm:text-[28px] text-[32px] text-gray-900_01"
                  size="txtInterBold32"
                >
                  Premium
                </Text>
              </div>
              <div className="flex flex-col gap-6 items-start justify-start ml-3 md:ml-[0] mt-8 w-auto">
                <Text
                  className="text-[22px] text-gray-500 sm:text-lg md:text-xl w-full"
                  size="txtInterRegular22"
                >
                  What You’ll Get
                </Text>
                <div className="flex flex-row gap-2 items-start justify-start w-[281px]">
                  <Img
                    className="h-6 w-6"
                    src="images/img_bxscheckcircle.svg"
                    alt="bxscheckcircle"
                  />
                  <Text
                    className="text-gray-900_01 text-lg w-auto"
                    size="txtInterRegular18"
                  >
                    Lorem ipsum dolor sit amet
                  </Text>
                </div>
                <div className="flex flex-row gap-2 items-start justify-start w-[281px]">
                  <Img
                    className="h-6 w-6"
                    src="images/img_bxscheckcircle.svg"
                    alt="bxscheckcircle_One"
                  />
                  <Text
                    className="text-gray-900_01 text-lg w-auto"
                    size="txtInterRegular18"
                  >
                    Lorem ipsum dolor sit amet
                  </Text>
                </div>
                <div className="flex flex-row gap-2 items-start justify-start w-[281px]">
                  <Img
                    className="h-6 w-6"
                    src="images/img_bxscheckcircle.svg"
                    alt="bxscheckcircle_Two"
                  />
                  <Text
                    className="text-gray-900_01 text-lg w-auto"
                    size="txtInterRegular18"
                  >
                    Lorem ipsum dolor sit amet
                  </Text>
                </div>
                <div className="flex flex-row gap-2 items-start justify-start w-[281px]">
                  <Img
                    className="h-6 w-6"
                    src="images/img_bxscheckcircle.svg"
                    alt="bxscheckcircle_Three"
                  />
                  <Text
                    className="text-gray-900_01 text-lg w-auto"
                    size="txtInterRegular18"
                  >
                    Lorem ipsum dolor sit amet
                  </Text>
                </div>
              </div>
              <Line className="bg-gray-500 h-px mr-3 mt-9 w-[96%]" />
              <Text
                className="ml-3 md:ml-[0] mt-[63px] md:text-3xl sm:text-[28px] text-[32px] text-gray-900_01"
                size="txtInterBold32"
              >
                <span className="text-gray-900_01 font-inter text-left font-bold">
                  $
                </span>
                <span className="text-gray-900_01 font-inter text-left font-bold">
                  480
                </span>
                <span className="text-gray-900_01 font-inter text-left text-lg font-normal">
                  /month
                </span>
              </Text>
              <Button
                className="cursor-pointer font-semibold min-w-[257px] ml-3 md:ml-[0] mr-6 mt-6 shadow-bs1 text-[22px] text-center sm:text-lg md:text-xl"
                shape="round"
                color="purple_A100"
                size="md"
                variant="fill"
              >
                Choose
              </Button>
            </div>
          </div>
          <div className="bg-white-A700 flex flex-1 flex-col items-center justify-start pl-3 py-3 rounded-[20px] w-full">
            <div className="flex flex-col justify-start my-3 w-full">
              <div className="flex flex-row gap-2 items-center justify-start ml-1 md:ml-[0] w-[69%] md:w-full">
                <Img
                  className="h-10 w-10"
                  src="images/img_lightbulb.svg"
                  alt="lightbulb"
                />
                <Text
                  className="md:text-3xl sm:text-[28px] text-[32px] text-gray-900_01"
                  size="txtInterBold32"
                >
                  Individual
                </Text>
              </div>
              <div className="flex flex-col gap-6 items-start justify-start ml-3 md:ml-[0] mt-8 w-auto">
                <Text
                  className="text-[22px] text-gray-500 sm:text-lg md:text-xl w-full"
                  size="txtInterRegular22"
                >
                  What You’ll Get
                </Text>
                <div className="flex flex-row gap-2 items-start justify-start w-[281px]">
                  <Img
                    className="h-6 w-6"
                    src="images/img_bxscheckcircle.svg"
                    alt="bxscheckcircle"
                  />
                  <Text
                    className="text-gray-900_01 text-lg w-auto"
                    size="txtInterRegular18"
                  >
                    Lorem ipsum dolor sit amet
                  </Text>
                </div>
                <div className="flex flex-row gap-2 items-start justify-start w-[281px]">
                  <Img
                    className="h-6 w-6"
                    src="images/img_bxscheckcircle.svg"
                    alt="bxscheckcircle_One"
                  />
                  <Text
                    className="text-gray-900_01 text-lg w-auto"
                    size="txtInterRegular18"
                  >
                    Lorem ipsum dolor sit amet
                  </Text>
                </div>
                <div className="flex flex-row gap-2 items-start justify-start w-[281px]">
                  <Img
                    className="h-6 w-6"
                    src="images/img_bxscheckcircle.svg"
                    alt="bxscheckcircle_Two"
                  />
                  <Text
                    className="text-gray-900_01 text-lg w-auto"
                    size="txtInterRegular18"
                  >
                    Lorem ipsum dolor sit amet
                  </Text>
                </div>
                <div className="flex flex-row gap-2 items-start justify-start w-[281px]">
                  <Img
                    className="h-6 w-6"
                    src="images/img_bxscheckcircle.svg"
                    alt="bxscheckcircle_Three"
                  />
                  <Text
                    className="text-gray-900_01 text-lg w-auto"
                    size="txtInterRegular18"
                  >
                    Lorem ipsum dolor sit amet
                  </Text>
                </div>
              </div>
              <Line className="bg-gray-500 h-px mr-3 mt-9 w-[96%]" />
              <Text
                className="ml-3 md:ml-[0] mt-[63px] md:text-3xl sm:text-[28px] text-[32px] text-gray-900_01"
                size="txtInterBold32"
              >
                <span className="text-gray-900_01 font-inter text-left font-bold">
                  $
                </span>
                <span className="text-gray-900_01 font-inter text-left font-bold">
                  480
                </span>
                <span className="text-gray-900_01 font-inter text-left text-lg font-normal">
                  /month
                </span>
              </Text>
              <Button
                className="cursor-pointer font-semibold min-w-[257px] ml-3 md:ml-[0] mr-6 mt-6 shadow-bs1 text-[22px] text-center sm:text-lg md:text-xl"
                shape="round"
                color="purple_A100"
                size="md"
                variant="fill"
              >
                Choose
              </Button>
            </div>
          </div>
          <div className="bg-white-A700 flex flex-1 flex-col items-center justify-start pl-3 py-3 rounded-[20px] w-full">
            <div className="flex flex-col justify-start my-3 w-full">
              <div className="flex flex-row gap-2 items-center justify-start ml-1 md:ml-[0] w-[46%] md:w-full">
                <Img
                  className="h-10 w-10"
                  src="images/img_lightbulb.svg"
                  alt="lightbulb"
                />
                <Text
                  className="md:text-3xl sm:text-[28px] text-[32px] text-gray-900_01"
                  size="txtInterBold32"
                >
                  Team
                </Text>
              </div>
              <div className="flex flex-col gap-6 items-start justify-start ml-3 md:ml-[0] mt-[31px] w-auto">
                <Text
                  className="text-[22px] text-gray-500 sm:text-lg md:text-xl w-full"
                  size="txtInterRegular22"
                >
                  What You’ll Get
                </Text>
                <div className="flex flex-row gap-2 items-start justify-start w-[281px]">
                  <Img
                    className="h-6 w-6"
                    src="images/img_bxscheckcircle.svg"
                    alt="bxscheckcircle"
                  />
                  <Text
                    className="text-gray-900_01 text-lg w-auto"
                    size="txtInterRegular18"
                  >
                    Lorem ipsum dolor sit amet
                  </Text>
                </div>
                <div className="flex flex-row gap-2 items-start justify-start w-[281px]">
                  <Img
                    className="h-6 w-6"
                    src="images/img_bxscheckcircle.svg"
                    alt="bxscheckcircle_One"
                  />
                  <Text
                    className="text-gray-900_01 text-lg w-auto"
                    size="txtInterRegular18"
                  >
                    Lorem ipsum dolor sit amet
                  </Text>
                </div>
                <div className="flex flex-row gap-2 items-start justify-start w-[281px]">
                  <Img
                    className="h-6 w-6"
                    src="images/img_bxscheckcircle.svg"
                    alt="bxscheckcircle_Two"
                  />
                  <Text
                    className="text-gray-900_01 text-lg w-auto"
                    size="txtInterRegular18"
                  >
                    Lorem ipsum dolor sit amet
                  </Text>
                </div>
                <div className="flex flex-row gap-2 items-start justify-start w-[281px]">
                  <Img
                    className="h-6 w-6"
                    src="images/img_bxscheckcircle.svg"
                    alt="bxscheckcircle_Three"
                  />
                  <Text
                    className="text-gray-900_01 text-lg w-auto"
                    size="txtInterRegular18"
                  >
                    Lorem ipsum dolor sit amet
                  </Text>
                </div>
              </div>
              <Line className="bg-gray-500 h-px mr-3 mt-9 w-[96%]" />
              <Text
                className="ml-3 md:ml-[0] mt-[63px] md:text-3xl sm:text-[28px] text-[32px] text-gray-900_01"
                size="txtInterBold32"
              >
                <span className="text-gray-900_01 font-inter text-left font-bold">
                  $
                </span>
                <span className="text-gray-900_01 font-inter text-left font-bold">
                  480
                </span>
                <span className="text-gray-900_01 font-inter text-left text-lg font-normal">
                  /month
                </span>
              </Text>
              <Button
                className="cursor-pointer font-semibold min-w-[257px] ml-3 md:ml-[0] mr-6 mt-6 shadow-bs1 text-[22px] text-center sm:text-lg md:text-xl"
                shape="round"
                color="purple_A100"
                size="md"
                variant="fill"
              >
                Choose
              </Button>
            </div>
          </div>
        </List>
      </div>
    </>
  );
};

export default MembershipPage;
