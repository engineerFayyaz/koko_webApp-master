import React from "react";

import { Button, Img, Text } from "components";

const ProfilePage = () => {
  return (
    <>
      <div className="bg-gray-900 flex flex-col font-opensans items-center justify-start mx-auto p-1.5 shadow-bs w-full">
        <div className="flex flex-col items-center justify-start max-w-[1384px] mb-[326px] mx-auto md:px-5 w-full">
          <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-full">
            <Img
              className="md:flex-1 h-[79px] sm:h-auto object-cover w-[12%] md:w-full"
              src="images/img_kokotv2.png"
              alt="kokotvTwo"
            />
            <div className="flex md:flex-1 sm:flex-col flex-row sm:gap-5 items-start justify-center md:ml-[0] ml-[290px] w-[34%] md:w-full">
              <div className="flex flex-row gap-2 items-center justify-center w-auto">
                <Img
                  className="h-[22px] w-[22px]"
                  src="images/img_frame_purple_a100.svg"
                  alt="frame"
                />
                <Text
                  className="text-base text-purple-A100 w-auto"
                  size="txtOpenSansRomanBold16"
                >
                  Home
                </Text>
              </div>
              <div className="flex flex-row gap-2 items-center justify-center ml-8 sm:ml-[0] w-auto">
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
              <div className="flex flex-row gap-2 items-center justify-center ml-9 sm:ml-[0] w-auto">
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
              <div className="flex flex-row gap-2 items-center justify-center ml-9 sm:ml-[0] w-auto">
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
            <Img
              className="h-[18px] md:ml-[0] ml-[238px] w-[18px]"
              src="images/img_search_white_a700.svg"
              alt="search_One"
            />
            <Img
              className="h-6 ml-8 md:ml-[0] w-6"
              src="images/img_ionnotifications.svg"
              alt="ionnotification"
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
          <div className="flex flex-col items-center justify-start mt-[55px]">
            <Text
              className="md:text-3xl sm:text-[28px] text-[32px] text-gray-100"
              size="txtOpenSansRomanBold32Gray100"
            >
              Profile
            </Text>
          </div>
          <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start mt-[126px] w-[88%] md:w-full">
            <Img
              className="h-[361px] md:h-auto md:mt-0 mt-5 rounded-[50%] w-[361px]"
              src="images/img_photo153207420.png"
              alt="photo153207420"
            />
            <div className="flex flex-col items-start justify-start md:ml-[0] ml-[156px]">
              <Text
                className="sm:text-[40px] md:text-[46px] text-[50px] text-gray-100"
                size="txtOpenSansRomanExtraBold50"
              >
                Iris Walton
              </Text>
              <Text
                className="mt-[27px] text-gray-100 text-xl"
                size="txtPoppinsRegular20Gray100"
              >
                <span className="text-gray-100 font-opensans text-left font-normal">
                  Email:{" "}
                </span>
                <span className="text-gray-100 font-opensans text-left font-bold">
                  xyz@gmail.com
                </span>
              </Text>
              <Text
                className="mt-5 text-gray-100 text-xl"
                size="txtPoppinsRegular20Gray100"
              >
                <span className="text-gray-100 font-opensans text-left font-normal">
                  Age:{" "}
                </span>
                <span className="text-gray-100 font-opensans text-left font-bold">
                  23
                </span>
              </Text>
              <Text
                className="mt-[17px] text-gray-100 text-xl"
                size="txtPoppinsRegular20Gray100"
              >
                <span className="text-gray-100 font-opensans text-left font-normal">
                  Address:{" "}
                </span>
                <span className="text-gray-100 font-opensans text-left font-bold">
                  NIL
                </span>
              </Text>
              <Text
                className="mt-5 text-gray-100 text-xl"
                size="txtPoppinsRegular20Gray100"
              >
                <span className="text-gray-100 font-opensans text-left font-normal">
                  Phone Number:{" "}
                </span>
                <span className="text-gray-100 font-opensans text-left font-bold">
                  +1 123 123 123
                </span>
              </Text>
            </div>
            <Img
              className="h-10 md:ml-[0] ml-[356px] w-[39px]"
              src="images/img_checkmark.svg"
              alt="checkmark"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfilePage;
