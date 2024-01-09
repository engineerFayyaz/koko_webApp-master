// Banner.jsx

import React from 'react';
import { Button, Img, List, PagerIndicator, RatingBar, Text } from "components";

const Banner = () => {
  return (
    <div className="h-[650px] md:h-[529px]  md:px-5 relative w-full">
    <Img
      className="h-[100%] m-auto object-fill  w-full"
      src="images/6.png"
      alt="lucifersOne"
    />
    <div className="absolute bottom-[10%] flex flex-col md:gap-10  justify-start left-[2%] w-[70%]">
      <div className="flex flex-col  justify-start w-full">
        <div className="flex flex-col  justify-start w-full">
          <Text
            className="text-base text-gray-100 "
            size="txtOpenSansRomanBold16Gray100"
          >
            Marvel’s
          </Text>
          <Text
            className="mr-[18px] mt-2 sm:text-[40px] md:text-[46px] text-[40px] text-gray-100"
            size="txtOpenSansRomanExtraBold50"
          >
            Venom 2: Let There be Carnage
          </Text>
          <div className="flex flex-row gap-[53px] items-start  w-[50%] md:w-full">
            <Text
              className="text-base text-gray-100 text-right"
              size="txtOpenSansRomanBold16Gray100"
            >
              Resolution:4k
            </Text>
            <Text
              className="text-base text-gray-100 text-right"
              size="txtOpenSansRomanBold16Gray100"
            >
              Runtime: 1 hr, 37 min
            </Text>
          </div>
          <div className="flex flex-row font-poppins gap-5 items-center  mt-[17px] w-[35%] md:w-full">
            <div className="flex flex-row items-center justify-evenly w-[60%]">
              <RatingBar
                className="flex justify-between w-[190px]"
                value={5}
                starCount={5}
                activeColor="#f1c644"
                size={30}
              ></RatingBar>
            </div>
            <Text
              className="text-white-A700 text-xl"
              size="txtPoppinsRegular20"
            >
              5/5
            </Text>
          </div>
          <Text
            className="mt-2.5 text-gray-100 text-lg w-[80%] text-justify sm:w-full"
            size="txtOpenSansRomanRegular20"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing
            elit.Lorem ipsum dolor sit amet, consectetur adipiscing
            elit.Lorem ipsum dolor sit amet, consectetur adipiscing
            elit.Lorem ipsum dolor sit amet, consectetur adipiscing
            elit.Lorem ipsum dolor sit amet, consectetur adipiscing
            elit.Lorem ipsum dolor sit amet, consectetur adipiscing
            elit.
          </Text>
        </div>
      </div>
      {/* <PagerIndicator
        className="flex h-6 ml-8 md:ml-[0] w-[full] justify-end "
        count={6}
        activeCss="inline-block cursor-pointer rounded-[50%] h-6 border-gray-100 border-2 border-solid bg-gray-100 w-6"
        activeIndex={1}
        inactiveCss="inline-block cursor-pointer rounded-[50%] h-6 border-gray-100 border-2 border-solid w-6"
        selectedWrapperCss="inline-block md:ml-[0] mx-[5.00px] sm:ml-[0]"
        unselectedWrapperCss="inline-block md:ml-[0] mx-[5.00px] sm:ml-[0]"
      /> */}
    </div>
  </div>

  );
};

export default Banner;
