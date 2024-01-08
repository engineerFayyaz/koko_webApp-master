import React from "react";
import Header from "components/Header";
import { Button, Img, Text } from "components";

const ProfilePage = () => {
  return (
    <>
      <div className="bg-gray-900 flex flex-col font-opensans items-center justify-start mx-auto p-1.5 shadow-bs w-full">
        <div className="flex flex-col items-center justify-start max-w-[1384px] mb-[326px] mx-auto md:px-5 w-full">
        <Header className="flex md:flex-col flex-row md:gap-5 items-center justify-center w-full" />
        
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
