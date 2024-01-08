import React from "react";

import { Button, Img, Line, Text } from "components";

const PlayerPage = () => {
  return (
    <>
      <div className="bg-gray-900_01 flex flex-col font-opensans items-center justify-end mx-auto pt-1.5 w-full">
        <div className="flex flex-col gap-[15px] items-center justify-start w-full">
          <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start max-w-[1384px] mx-auto md:px-5 w-full">
            <div className="flex md:flex-1 md:flex-col flex-row md:gap-10 items-center justify-between w-[67%] md:w-full">
              <Img
                className="h-[79px] md:h-auto object-cover"
                src="images/img_kokotv2.png"
                alt="kokotvTwo"
              />
              <div className="flex flex-row items-start justify-between w-[51%] md:w-full">
                <div className="flex flex-row gap-2 items-center justify-center w-auto">
                  <Img
                    className="h-[22px] w-[22px]"
                    src="images/img_frame.svg"
                    alt="frame"
                  />
                  <Text
                    className="text-base text-white-A700 w-auto"
                    size="txtOpenSansRomanRegular16"
                  >
                    Home
                  </Text>
                </div>
                <div className="flex flex-row gap-2 items-center justify-center w-auto">
                  <Img
                    className="h-[22px] w-[22px]"
                    src="images/img_svgexport6.svg"
                    alt="svgexportSix"
                  />
                  <Text
                    className="text-base text-white-A700 w-auto"
                    size="txtOpenSansRomanRegular16"
                  >
                    Movies
                  </Text>
                </div>
                <div className="flex flex-row gap-2 items-center justify-center w-auto">
                  <Img
                    className="h-[22px] w-[22px]"
                    src="images/img_television.svg"
                    alt="television"
                  />
                  <Text
                    className="text-base text-white-A700 w-auto"
                    size="txtOpenSansRomanRegular16"
                  >
                    TV Shows
                  </Text>
                </div>
                <div className="flex flex-row gap-2 items-center justify-center w-auto">
                  <Img
                    className="h-6 w-6"
                    src="images/img_search.svg"
                    alt="search"
                  />
                  <Text
                    className="text-base text-white-A700 w-auto"
                    size="txtOpenSansRomanRegular16"
                  >
                    Creators
                  </Text>
                </div>
              </div>
            </div>
            <Img
              className="h-[21px] md:ml-[0] ml-[238px] md:mt-0 mt-[35px]"
              src="images/img_search_white_a700.svg"
              alt="search_One"
            />
            <Img
              className="h-[27px] ml-8 md:ml-[0] md:mt-0 mt-8"
              src="images/img_notification.svg"
              alt="notification"
            />
            <Button
              className="cursor-pointer flex items-center justify-center min-w-[125px] ml-8 md:ml-[0] md:mt-0 my-[18px]"
              leftIcon={
                <Img
                  className="h-[22px] mt-px mr-2.5"
                  src="images/img_bipersonfill.svg"
                  alt="bi:person-fill"
                />
              }
              shape="round"
              color="purple_A100"
              size="xs"
              variant="fill"
            >
              <div className="font-bold text-base text-center">Profile</div>
            </Button>
          </div>
          <div className="font-poppins h-[924px] md:px-5 relative w-full">
            <Img
              className="h-[924px] m-auto object-cover w-full"
              src="images/25.png"
              alt="lucifersOne"
            />
            <div className="absolute bg-black-900_a2 bottom-[0] flex md:flex-col flex-row md:gap-5 inset-x-[0] items-center justify-start mx-auto p-3 w-full">
              <Img
                className="h-10 md:ml-[0] ml-[300px] rounded-sm w-10"
                src="images/img_play_gray_100.svg"
                alt="play"
              />
              <Img
                className="h-10 md:ml-[0] ml-[50px]"
                src="images/img_volume.svg"
                alt="volume"
              />
              <Img
                className="h-10 md:ml-[0] ml-[889px] w-10"
                src="images/img_settings.svg"
                alt="settings"
              />
              <div className="h-[45px] md:ml-[0] ml-[47px] md:mt-0 mt-1 relative w-[4%] md:w-full">
                <Text
                  className="absolute h-full inset-[0] justify-center m-auto text-3xl sm:text-[26px] md:text-[28px] text-white-A700 w-max"
                  size="txtPoppinsBold30"
                >
                  CC
                </Text>
                <Line className="absolute bg-purple-A100 bottom-[0] h-0.5 inset-x-[0] mx-auto w-full" />
              </div>
              <Img
                className="h-10 md:ml-[0] ml-[47px] w-10"
                src="images/img_minimize.svg"
                alt="minimize"
              />
              <Img
                className="h-[34px] md:ml-[0] ml-[50px]"
                src="images/img_grid.svg"
                alt="grid"
              />
            </div>
            <div className="absolute bottom-[12%] flex flex-col font-opensans gap-[39px] inset-x-[0] items-center justify-start mx-auto w-[69%]">
              <Text
                className="text-base text-white-A700"
                size="txtOpenSansRomanRegular16"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in
                tempor tristique eget.
              </Text>
              <div className="flex sm:flex-col flex-row font-poppins sm:gap-10 items-start justify-between w-full">
                <Text
                  className="text-[10px] text-white-A700"
                  size="txtPoppinsRegular10"
                >
                  00:00
                </Text>
                <Img
                  className="h-4"
                  src="images/img_group388.svg"
                  alt="group388"
                />
                <Text
                  className="text-[10px] text-white-A700"
                  size="txtPoppinsRegular10"
                >
                  01:37:23
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PlayerPage;
