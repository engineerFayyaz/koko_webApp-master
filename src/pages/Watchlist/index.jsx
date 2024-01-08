import React from "react";

import { Button, Img, List, RatingBar, Text } from "components";

const WatchlistPage = () => {
  return (
    <>
      <div className="bg-gray-900 flex flex-col font-opensans items-center justify-start mx-auto p-1.5 shadow-bs w-full">
        <div className="flex flex-col items-center justify-start max-w-[1384px] mb-[102px] mx-auto md:px-5 w-full">
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
          <div className="flex flex-col items-center justify-start mt-[57px]">
            <Text
              className="text-gray-100 text-xl"
              size="txtOpenSansRomanBold20"
            >
              My Wishlist
            </Text>
          </div>
          <List
            className="flex flex-col gap-[30px] items-center mt-[50px] w-[97%]"
            orientation="vertical"
          >
            <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-full">
              <Img
                className="md:flex-1 h-[300px] sm:h-auto object-cover w-[16%] md:w-full"
                src="images/30.png"
                alt="faj2uifuuaul6u"
              />
              <div className="flex md:flex-1 flex-col items-start justify-start md:ml-[0] ml-[120px] w-[41%] md:w-full">
                <Text
                  className="md:ml-[0] ml-[3px] text-gray-100 text-right text-xl"
                  size="txtOpenSansRomanBold20"
                >
                  Netflix’s Original
                </Text>
                <div className="flex flex-col mt-[5px] relative w-full">
                  <Text
                    className="mx-auto sm:text-[40px] md:text-[46px] text-[50px] text-gray-100 text-right"
                    size="txtOpenSansRomanExtraBold50"
                  >
                    Squid Game Season 1
                  </Text>
                  <div className="flex flex-row font-poppins gap-[38px] items-center justify-between ml-[5px] mt-[-0.57px] w-[49%] z-[1]">
                    <Text
                      className="text-gray-100 text-right text-xl"
                      size="txtPoppinsBold20"
                    >
                      <span className="text-gray-100 font-opensans font-normal">
                        Resolution:
                      </span>
                      <span className="text-gray-100 font-opensans font-bold">
                        4k
                      </span>
                    </Text>
                    <Text
                      className="text-gray-100 text-right text-xl"
                      size="txtPoppinsRegular20Gray100"
                    >
                      <span className="text-gray-100 font-opensans font-normal">
                        Seasons:{" "}
                      </span>
                      <span className="text-gray-100 font-opensans font-bold">
                        1
                      </span>
                    </Text>
                  </div>
                </div>
                <div className="flex flex-row font-poppins gap-5 items-center justify-start mt-2.5 w-[46%] md:w-full">
                  <div className="flex flex-row items-center justify-evenly w-[78%]">
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
              </div>
              <Img
                className="h-10 md:ml-[0] ml-[440px]"
                src="images/img_bookmark_gray_100.svg"
                alt="bookmark"
              />
            </div>
            <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-full">
              <Img
                className="md:flex-1 h-[300px] sm:h-auto object-cover w-[16%] md:w-full"
                src="images/31.png"
                alt="mv5bntfinzblyme"
              />
              <div className="flex md:flex-1 flex-col gap-2 items-start justify-start md:ml-[0] ml-[120px] w-3/5 md:w-full">
                <Text
                  className="md:ml-[0] ml-[5px] text-gray-100 text-right text-xl"
                  size="txtOpenSansRomanBold20"
                >
                  Marvel’s
                </Text>
                <div className="flex flex-col relative w-full">
                  <Text
                    className="mx-auto sm:text-[40px] md:text-[46px] text-[50px] text-gray-100 text-right"
                    size="txtOpenSansRomanExtraBold50"
                  >
                    Venom 2: Let There be Carnage
                  </Text>
                  <div className="flex flex-row font-poppins gap-[19px] items-center justify-start ml-[5px] mt-[-0.97px] w-[44%] z-[1]">
                    <Text
                      className="text-gray-100 text-right text-xl"
                      size="txtPoppinsBold20"
                    >
                      <span className="text-gray-100 font-opensans font-normal">
                        Resolution:
                      </span>
                      <span className="text-gray-100 font-opensans font-bold">
                        4k
                      </span>
                    </Text>
                    <Text
                      className="text-gray-100 text-right text-xl"
                      size="txtPoppinsRegular20Gray100"
                    >
                      <span className="text-gray-100 font-opensans font-normal">
                        Runtime:{" "}
                      </span>
                      <span className="text-gray-100 font-opensans font-bold">
                        1 hr, 37 min
                      </span>
                    </Text>
                  </div>
                </div>
                <div className="flex flex-row font-poppins gap-5 items-center justify-start w-[31%] md:w-full">
                  <div className="flex flex-row items-center justify-evenly w-[78%]">
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
              </div>
              <Img
                className="h-10 md:ml-[0] ml-[185px]"
                src="images/img_bookmark_gray_100.svg"
                alt="bookmark"
              />
            </div>
            <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-full">
              <Img
                className="md:flex-1 h-[300px] sm:h-auto object-cover w-[16%] md:w-full"
                src="images/32.png"
                alt="yae6uvqijdn411"
              />
              <div className="flex md:flex-1 flex-col items-start justify-start md:ml-[0] ml-[120px] w-[32%] md:w-full">
                <Text
                  className="md:ml-[0] ml-[3px] text-gray-100 text-right text-xl"
                  size="txtOpenSansRomanBold20"
                >
                  Netflix’s Original
                </Text>
                <Text
                  className="sm:text-[40px] md:text-[46px] text-[50px] text-gray-100"
                  size="txtOpenSansRomanExtraBold50"
                >
                  Lucifer Season 1
                </Text>
                <div className="flex flex-row font-poppins gap-[38px] items-center justify-start ml-1.5 md:ml-[0] mt-[5px] w-[64%] md:w-full">
                  <Text
                    className="text-gray-100 text-right text-xl"
                    size="txtPoppinsBold20"
                  >
                    <span className="text-gray-100 font-opensans font-normal">
                      Resolution:
                    </span>
                    <span className="text-gray-100 font-opensans font-bold">
                      4k
                    </span>
                  </Text>
                  <Text
                    className="text-gray-100 text-right text-xl"
                    size="txtPoppinsBold20"
                  >
                    <span className="text-gray-100 font-opensans font-normal">
                      Seasons:{" "}
                    </span>
                    <span className="text-gray-100 font-opensans font-bold">
                      6
                    </span>
                  </Text>
                </div>
                <div className="flex flex-row font-poppins gap-5 items-center justify-start mt-2.5 w-3/5 md:w-full">
                  <div className="flex flex-row items-center justify-evenly w-[78%]">
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
              </div>
              <Img
                className="h-10 md:ml-[0] ml-[568px]"
                src="images/img_bookmark_gray_100.svg"
                alt="bookmark"
              />
            </div>
            <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-full">
              <Img
                className="md:flex-1 h-[300px] sm:h-auto object-cover w-[16%] md:w-full"
                src="images/33.png"
                alt="faj2uifuuaul6u"
              />
              <div className="flex md:flex-1 flex-col items-start justify-start md:ml-[0] ml-[120px] w-[41%] md:w-full">
                <Text
                  className="md:ml-[0] ml-[3px] text-gray-100 text-right text-xl"
                  size="txtOpenSansRomanBold20"
                >
                  Netflix’s Original
                </Text>
                <div className="flex flex-col mt-[5px] relative w-full">
                  <Text
                    className="mx-auto sm:text-[40px] md:text-[46px] text-[50px] text-gray-100 text-right"
                    size="txtOpenSansRomanExtraBold50"
                  >
                    Squid Game Season 1
                  </Text>
                  <div className="flex flex-row font-poppins gap-[38px] items-center justify-between ml-[5px] mt-[-0.57px] w-[49%] z-[1]">
                    <Text
                      className="text-gray-100 text-right text-xl"
                      size="txtPoppinsBold20"
                    >
                      <span className="text-gray-100 font-opensans font-normal">
                        Resolution:
                      </span>
                      <span className="text-gray-100 font-opensans font-bold">
                        4k
                      </span>
                    </Text>
                    <Text
                      className="text-gray-100 text-right text-xl"
                      size="txtPoppinsRegular20Gray100"
                    >
                      <span className="text-gray-100 font-opensans font-normal">
                        Seasons:{" "}
                      </span>
                      <span className="text-gray-100 font-opensans font-bold">
                        1
                      </span>
                    </Text>
                  </div>
                </div>
                <div className="flex flex-row font-poppins gap-5 items-center justify-start mt-2.5 w-[46%] md:w-full">
                  <div className="flex flex-row items-center justify-evenly w-[78%]">
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
              </div>
              <Img
                className="h-10 md:ml-[0] ml-[440px]"
                src="images/img_bookmark_gray_100.svg"
                alt="bookmark"
              />
            </div>
            <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-full">
              <Img
                className="md:flex-1 h-[300px] sm:h-auto object-cover w-[16%] md:w-full"
                src="images/34.png"
                alt="mv5bntfinzblyme"
              />
              <div className="flex md:flex-1 flex-col gap-2 items-start justify-start md:ml-[0] ml-[120px] w-3/5 md:w-full">
                <Text
                  className="md:ml-[0] ml-[5px] text-gray-100 text-right text-xl"
                  size="txtOpenSansRomanBold20"
                >
                  Marvel’s
                </Text>
                <div className="flex flex-col relative w-full">
                  <Text
                    className="mx-auto sm:text-[40px] md:text-[46px] text-[50px] text-gray-100 text-right"
                    size="txtOpenSansRomanExtraBold50"
                  >
                    Venom 2: Let There be Carnage
                  </Text>
                  <div className="flex flex-row font-poppins gap-[19px] items-center justify-start ml-[5px] mt-[-0.97px] w-[44%] z-[1]">
                    <Text
                      className="text-gray-100 text-right text-xl"
                      size="txtPoppinsBold20"
                    >
                      <span className="text-gray-100 font-opensans font-normal">
                        Resolution:
                      </span>
                      <span className="text-gray-100 font-opensans font-bold">
                        4k
                      </span>
                    </Text>
                    <Text
                      className="text-gray-100 text-right text-xl"
                      size="txtPoppinsRegular20Gray100"
                    >
                      <span className="text-gray-100 font-opensans font-normal">
                        Runtime:{" "}
                      </span>
                      <span className="text-gray-100 font-opensans font-bold">
                        1 hr, 37 min
                      </span>
                    </Text>
                  </div>
                </div>
                <div className="flex flex-row font-poppins gap-5 items-center justify-start w-[31%] md:w-full">
                  <div className="flex flex-row items-center justify-evenly w-[78%]">
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
              </div>
              <Img
                className="h-10 md:ml-[0] ml-[185px]"
                src="images/img_bookmark_gray_100.svg"
                alt="bookmark"
              />
            </div>
          </List>
        </div>
      </div>
    </>
  );
};

export default WatchlistPage;
