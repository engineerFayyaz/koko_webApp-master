// Banner.jsx

import React from 'react';
import { Button, Img, List, PagerIndicator, RatingBar, Text } from "components";

const Banner = () => {
  return (
    <div className="h-[650px] md:h-[529px]  md:px-5 sm:px-0 relative w-full">
    <Img
      className="h-[100%] m-auto object-fill  w-full sm:rounded-[50px]"
      src="images/6.png"
      alt="lucifersOne"
    />
    <div className="absolute bottom-[12%] flex flex-col md:gap-10  justify-start left-[2%] w-[70%] sm:w-[90%]">
      <div className="flex flex-col  justify-start w-full">
        <div className="flex flex-col  justify-start w-full">
          <Text
            className="text-base text-gray-100 "
            size="txtOpenSansRomanBold16Gray100"
          >
            Magic
          </Text>
          <Text
            className="mr-[18px] mt-1 sm:mt-0 sm:text-[27px] md:text-[46px] text-[50px]  text-gray-100"
            size="txtOpenSansRomanExtraBold50"
          >
            Anikulapo
          </Text>
          <div className="flex flex-row gap-[53px] sm:gap-[30px] sm:mt-[0em] items-start  w-[50%] md:w-full">
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
          <div className="flex flex-row font-poppins gap-5 items-center sm:gap-2  mt-[17px] sm:mt-[0px] w-[35%] md:w-full">
            <div className="flex flex-row items-center justify-evenly sm:justify-between w-[60%] sm:w-[auto]">
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
            className="mt-0 text-gray-100 text-lg w-[80%] text-justify sm:w-full sm:text-[14px] sm:leading-4"
            size="txtOpenSansRomanRegular20 "
          >
           It tells the story of Saro, a man seeking for greener pasture, but unfolding
           events and his affair with the king's wife, he encounters his untimely death
           and with Akala, a mystical bird belived to give and take life. 
           One of kind mystical folkklore drama revolving around the life of Saro, 
           a young zealous man seeking for a greener pesture in the great Oyo Kingdom.
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
