import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Line, RatingBar, Text } from "components";
import Footer from "components/Footer";

const DetailsTwoPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-gray-900_01 flex flex-col font-opensans items-center justify-start mx-auto py-1.5 w-full">
        <div className="flex flex-col gap-[18px] items-center justify-start mb-[158px] w-full">

        <div className="absolute flex md:flex-col flex-row md:gap-10 items-center justify-between left-[2%] top-[0] w-[64%]">
            <Img
              className="h-[79px] md:h-auto object-cover"
              src="images/img_kokotv2.png"
              alt="kokotvTwo_One"
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
              
                  size="txtOpenSansRomanBold16"
                  onClick={() => navigate("/home1")}
                >
                  Home
                </Text>
              </div>
              <div
                className="common-pointer flex flex-row gap-2 items-center justify-center w-auto"
                
              >
                <Img
                  className="h-[22px] w-[22px]"
                  src="images/img_svgexport6_purple_a100.svg"
                  alt="svgexportSix"
                />
                <Text
                   className="text-base text-purple-A100 w-auto"
                  size="txtOpenSansRomanRegular16"
                  onClick={() => navigate("/movies")}
                >
                  Movies
                </Text>
              </div>
              <div
                className="common-pointer flex flex-row gap-2 items-center justify-center w-auto"
                onClick={() => navigate("/tvshow")}
              >
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
              <div
                className="common-pointer flex flex-row gap-2 items-center justify-center w-auto"
                onClick={() => navigate("/creators")}
              >
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
          <div className="absolute flex flex-row gap-8 items-center justify-between right-[1%] top-[2%] w-[17%]">
            <Img
              className="h-[18px] w-[18px]"
              src="images/img_search_white_a700.svg"
              alt="search_One"
            />
            <Img
              className="common-pointer h-6 w-6"
              src="images/img_ionnotifications.svg"
              alt="ionnotification"
              onClick={() => navigate("/notification")}
            />
            <Button
              className="common-pointer cursor-pointer flex items-center justify-center min-w-[125px]"
              // onClick={() => navigate("/homemenu")}
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


          <div className="flex flex-col justify-start w-full">
             <div className="font-opensans h-[924px] max-w-[2021px] md:h-[529px] mt-[90px] mx-auto md:px-5 relative w-full">
              <Img
                className="h-[924px] m-auto  object-cover w-full"
                src="images/img_lucifers1_924x1421.png"
                alt="lucifersOne"
              />
              <div className="absolute bottom-[2%] flex flex-col gap-[18px] items-start justify-start left-[4%] w-[77%]">
                <Text
                  className="text-base text-gray-100 text-right"
                  size="txtOpenSansRomanBold16Gray100"
                >
                  Netflix’s Original
                </Text>
                <div className="md:h-[137px] h-[198px] relative w-full">
                  <Text
                    className="absolute inset-x-[0] mx-auto md:text-5xl text-[100px] text-gray-100 text-right top-[0] w-max"
                    size="txtOpenSansRomanExtraBold100"
                  >
                    Squid Game Season 1
                  </Text>
                  <Img
                    className="absolute bottom-[5%] h-10 left-[30%]"
                    src="images/img_bookmark.svg"
                    alt="bookmark"
                  />
                  <div className="absolute bottom-[0] flex flex-col font-poppins items-center justify-start left-[0] w-1/4">
                    <div className="flex flex-col justify-start w-full">
                      <div className="flex flex-row gap-[38px] items-center justify-between ml-1.5 md:ml-[0] w-[98%] md:w-full">
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
                      <div className="flex flex-row gap-5 items-center justify-start w-[92%] md:w-full">
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
                  </div>
                </div>
              </div>
            </div>
            <Text
              className="md:ml-[0] ml-[50px] mt-8 md:text-3xl sm:text-[28px] text-[32px] text-gray-100"
              size="txtOpenSansRomanBold32Gray100"
            >
              Desciption
            </Text>
            <Text
              className="md:ml-[0] ml-[50px] mt-5 text-gray-100 text-sm w-[93%] sm:w-full"
              size="txtNunitoSansRegular14Gray100"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem
              ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum
              dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit
              amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet,
              consectetur adipiscing elit.Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit.Lorem ipsum dolor sit amet,
              consectetur adipiscing elit.Lorem ipsum dolor sit amet,
              consectetur adipiscing elit.Lorem ipsum dolor sit amet,
              consectetur adipiscing elit.Lorem ipsum dolor sit amet,
              consectetur adipiscing elit.Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit.Lorem ipsum dolor sit amet,
              consectetur adipiscing elit.Lorem ipsum dolor sit amet,
              consectetur adipiscing elit.Lorem ipsum dolor sit amet,
              consectetur adipiscing elit.Lorem ipsum dolor sit amet,
              consectetur adipiscing elit.Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit.Lorem ipsum dolor sit amet,
              consectetur adipiscing elit.Lorem ipsum dolor sit amet,
              consectetur adipiscing elit.Lorem ipsum dolor sit amet,
              consectetur adipiscing elit.Lorem ipsum dolor sit amet,
              consectetur adipiscing elit.Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit.Lorem ipsum dolor sit amet,
              consectetur adipiscing elit.Lorem ipsum dolor sit amet,
              consectetur adipiscing elit.Lorem ipsum dolor sit amet,
              consectetur adipiscing elit.Lorem ipsum dolor sit amet,
              consectetur adipiscing elit.Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit.Lorem ipsum dolor sit amet,
              consectetur adipiscing elit.Lorem ipsum dolor sit amet,
              consectetur adipiscing elit.Lorem ipsum dolor sit amet,
              consectetur adipiscing elit.Lorem ipsum dolor sit amet,
              consectetur adipiscing elit.Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit.Lorem ipsum dolor sit amet,
              consectetur adipiscing elit.Lorem ipsum dolor sit amet,
              consectetur adipiscing elit.Lorem ipsum dolor sit amet,
              consectetur adipiscing elit.Lorem ipsum dolor sit amet,
              consectetur adipiscing elit.Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit.Lorem ipsum dolor sit amet,
              consectetur adipiscing elit.Lorem ipsum dolor sit amet,
              consectetur adipiscing elit.Lorem ipsum dolor sit amet,
              consectetur adipiscing elit.Lorem ipsum dolor sit amet,
              consectetur adipiscing elit.Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit.Lorem ipsum dolor sit amet,
              consectetur adipiscing elit.Lorem ipsum dolor sit amet,
              consectetur adipiscing elit.Lorem ipsum dolor sit amet,
              consectetur adipiscing elit.Lorem ipsum dolor sit amet,
              consectetur adipiscing elit.Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit.Lorem ipsum dolor sit amet,
              consectetur adipiscing elit.Lorem ipsum dolor sit amet,
              consectetur adipiscing elit.Lorem ipsum dolor sit amet,
              consectetur adipiscing elit.Lorem ipsum dolor sit amet,
              consectetur adipiscing elit.Lorem ipsum dolor sit amet,
              consectetur adipiscing elit.{" "}
            </Text>
            <div className="flex flex-col font-poppins gap-2.5 items-start justify-start md:ml-[0] ml-[50px] mt-[22px] md:px-5">
              <Text
                className="text-gray-100 text-xl"
                size="txtPoppinsRegular20Gray100"
              >
                <span className="text-gray-100 font-opensans text-left font-normal">
                  Seasons:{" "}
                </span>
                <span className="text-gray-100 font-opensans text-left font-bold">
                  1
                </span>
              </Text>
              <Text
                className="text-gray-100 text-xl"
                size="txtPoppinsRegular20Gray100"
              >
                <span className="text-gray-100 font-opensans text-left font-normal">
                  Genre:{" "}
                </span>
                <span className="text-gray-100 font-opensans text-left font-bold">
                  Action, Thriller, Survival, Drama
                </span>
              </Text>
              <Text
                className="text-gray-100 text-xl"
                size="txtPoppinsRegular20Gray100"
              >
                <span className="text-gray-100 font-opensans text-left font-normal">
                  Directed by:{" "}
                </span>
                <span className="text-gray-100 font-opensans text-left font-bold">
                  Hwang Dong-hyuk
                </span>
              </Text>
              <Text
                className="text-gray-100 text-xl"
                size="txtPoppinsRegular20Gray100"
              >
                <span className="text-gray-100 font-opensans text-left font-normal">
                  Written by:{" "}
                </span>
                <span className="text-gray-100 font-opensans text-left font-bold">
                  Hwang Dong-hyuk
                </span>
              </Text>
              <Text
                className="text-gray-100 text-xl"
                size="txtPoppinsRegular20Gray100"
              >
                <span className="text-gray-100 font-opensans text-left font-normal">
                  Starring:{" "}
                </span>
                <span className="text-gray-100 font-opensans text-left font-bold">
                  <>
                    Lee Jung-jae, Park Hae-soo, Wi Ha-joon, Jung Ho-yeon, O
                    Yeong-su, Heo Sung-tae,Anupam Tripathi, Kim Joo-ryoung
                  </>
                </span>
              </Text>
              <Text
                className="text-gray-100 text-xl"
                size="txtPoppinsRegular20Gray100"
              >
                <span className="text-gray-100 font-opensans text-left font-normal">
                  Production Companies:{" "}
                </span>
                <span className="text-gray-100 font-opensans text-left font-bold">
                  Netflix
                </span>
              </Text>
              <Text
                className="text-gray-100 text-xl"
                size="txtPoppinsRegular20Gray100"
              >
                <span className="text-gray-100 font-opensans text-left font-normal">
                  Original release:{" "}
                </span>
                <span className="text-gray-100 font-opensans text-left font-bold">
                  September 17, 2021
                </span>
              </Text>
            </div>
            <Text
              className="md:ml-[0] ml-[50px] mt-7 md:text-3xl sm:text-[28px] text-[32px] text-gray-100"
              size="txtOpenSansRomanBold32Gray100"
            >
              Screenshots
            </Text>
            <div className="flex flex-col items-center justify-start mt-8 w-full">
              <div className="flex flex-col items-center justify-start w-full">
                <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between w-full">
                  <Img
                    className="h-[250px] md:h-auto object-cover"
                    src="images/img_game1200.png"
                    alt="game1200"
                  />
                  <Img
                    className="h-[250px] md:h-auto object-cover"
                    src="images/img_download_250x375.png"
                    alt="download"
                  />
                  <Img
                    className="h-[250px] md:h-auto object-cover"
                    src="images/img_squidgameunit.png"
                    alt="squidgameunit"
                  />
                  <Img
                    className="h-[250px] md:h-auto object-cover"
                    src="images/img_squidgamemarbles.png"
                    alt="squidgamemarble"
                  />
                </div>
              </div>
            </div>
            <Text
              className="md:ml-[0] ml-[50px] mt-8 md:text-3xl sm:text-[28px] text-[32px] text-gray-100"
              size="txtOpenSansRomanBold32Gray100"
            >
              Stream
            </Text>
            <div className="font-poppins h-[572px] max-w-[1942px] mt-[31px] mx-auto md:px-5 relative w-full">
              <div className="bg-purple-A100 flex flex-row font-opensans items-center justify-start mb-[6px] mx-auto p-[17px] rounded-[2px] w-full z-[1]">
                <div className="flex flex-row md:gap-10 items-center justify-between ml-3.5 w-[96%]">
                  <Text
                    className="md:text-3xl sm:text-[28px] text-[32px] text-white-A700"
                    size="txtOpenSansRomanBold32WhiteA700"
                  >
                    Season 1
                  </Text>
                  <Img
                    className="h-6 w-6"
                    src="images/img_download.svg"
                    alt="download_One"
                  />
                </div>
              </div>
              <div className="bg-gray-900_02 flex flex-col items-center justify-end mt-auto mx-auto py-[15px] rounded-[50px] w-full">
                <div className="flex flex-col items-center justify-start mt-[30px] w-full">
                  <div className="flex flex-col gap-[15px] items-center justify-start w-full">
                    <div className="flex flex-row md:gap-10 items-center justify-between w-[93%] md:w-full">
                      <Text
                        className="text-gray-100 text-xl"
                        size="txtPoppinsRegular20Gray100"
                      >
                        <span className="text-gray-100 font-opensans text-left font-normal">
                          Episode 1:{" "}
                        </span>
                        <span className="text-gray-100 font-opensans text-left font-bold">
                          Pilot
                        </span>
                      </Text>
                      <div className="h-10 relative w-[9%]">
                        <div className="flex flex-row font-roboto gap-5 h-full items-center justify-between m-auto w-[97%]">
                          <Img
                            className="h-10 rounded-sm w-60"
                            src="images/img_play.svg"
                            alt="play"
                            onClick={() => navigate("/player")}
                          />
                          <Text
                            className="text-white-A700 text-xl"
                            size="txtRobotoBold20"

                          >
                            Play
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-[13px] items-center justify-start w-full">
                      <Line className="bg-purple-A100 h-0.5 w-full" />
                      <div className="flex flex-row md:gap-10 items-center justify-between w-[93%] md:w-full">
                        <Text
                          className="text-gray-100 text-xl"
                          size="txtPoppinsRegular20Gray100"
                        >
                          <span className="text-gray-100 font-opensans text-left font-normal">
                            Episode 2:{" "}
                          </span>
                          <span className="text-gray-100 font-opensans text-left font-bold">
                            Pilot
                          </span>
                        </Text>
                        <div className="h-10 relative w-[9%]">
                        <div className="flex flex-row font-roboto gap-5 h-full items-center justify-between m-auto w-[97%]">
                          <Img
                            className="h-10 rounded-sm w-60"
                            src="images/img_play.svg"
                            alt="play"
                            onClick={() => navigate("/player")}
                          />
                          <Text
                            className="text-white-A700 text-xl"
                            size="txtRobotoBold20"

                          >
                            Play
                          </Text>
                        </div>
                      </div>
                      </div>
                      <Line className="bg-purple-A100 h-0.5 w-full" />
                      <div className="flex flex-row md:gap-10 items-center justify-between w-[93%] md:w-full">
                        <Text
                          className="text-gray-100 text-xl"
                          size="txtPoppinsRegular20Gray100"
                        >
                          <span className="text-gray-100 font-opensans text-left font-normal">
                            Episode 3:{" "}
                          </span>
                          <span className="text-gray-100 font-opensans text-left font-bold">
                            Pilot
                          </span>
                        </Text>
                        <div className="h-10 relative w-[9%]">
                        <div className="flex flex-row font-roboto gap-5 h-full items-center justify-between m-auto w-[97%]">
                          <Img
                            className="h-10 rounded-sm w-60"
                            src="images/img_play.svg"
                            alt="play"
                            onClick={() => navigate("/player")}
                          />
                          <Text
                            className="text-white-A700 text-xl"
                            size="txtRobotoBold20"

                          >
                            Play
                          </Text>
                        </div>
                      </div>
                      </div>
                      <Line className="bg-purple-A100 h-0.5 w-full" />
                      <div className="flex flex-row md:gap-10 items-center justify-between w-[93%] md:w-full">
                        <Text
                          className="text-gray-100 text-xl"
                          size="txtPoppinsRegular20Gray100"
                        >
                          <span className="text-gray-100 font-opensans text-left font-normal">
                            Episode 4:{" "}
                          </span>
                          <span className="text-gray-100 font-opensans text-left font-bold">
                            Pilot
                          </span>
                        </Text>
                        <div className="h-10 relative w-[9%]">
                        <div className="flex flex-row font-roboto gap-5 h-full items-center justify-between m-auto w-[97%]">
                          <Img
                            className="h-10 rounded-sm w-60"
                            src="images/img_play.svg"
                            alt="play"
                            onClick={() => navigate("/player")}
                          />
                          <Text
                            className="text-white-A700 text-xl"
                            size="txtRobotoBold20"

                          >
                            Play
                          </Text>
                        </div>
                      </div>
                      </div>
                      <Line className="bg-purple-A100 h-0.5 w-full" />
                      <div className="flex flex-row md:gap-10 items-center justify-between w-[93%] md:w-full">
                        <Text
                          className="text-gray-100 text-xl"
                          size="txtPoppinsRegular20Gray100"
                        >
                          <span className="text-gray-100 font-opensans text-left font-normal">
                            Episode 5:{" "}
                          </span>
                          <span className="text-gray-100 font-opensans text-left font-bold">
                            Pilot
                          </span>
                        </Text>
                        <div className="h-10 relative w-[9%]">
                        <div className="flex flex-row font-roboto gap-5 h-full items-center justify-between m-auto w-[97%]">
                          <Img
                            className="h-10 rounded-sm w-60"
                            src="images/img_play.svg"
                            alt="play"
                            onClick={() => navigate("/player")}
                          />
                          <Text
                            className="text-white-A700 text-xl"
                            size="txtRobotoBold20"

                          >
                            Play
                          </Text>
                        </div>
                      </div>
                      </div>
                      <Line className="bg-purple-A100 h-0.5 w-full" />
                      <div className="flex flex-row md:gap-10 items-center justify-between w-[93%] md:w-full">
                        <Text
                          className="text-gray-100 text-xl"
                          size="txtPoppinsRegular20Gray100"
                        >
                          <span className="text-gray-100 font-opensans text-left font-normal">
                            Episode 6:{" "}
                          </span>
                          <span className="text-gray-100 font-opensans text-left font-bold">
                            Pilot
                          </span>
                        </Text>
                        <div className="h-10 relative w-[9%]">
                        <div className="flex flex-row font-roboto gap-5 h-full items-center justify-between m-auto w-[97%]">
                          <Img
                            className="h-10 rounded-sm w-60"
                            src="images/img_play.svg"
                            alt="play"
                            onClick={() => navigate("/player")}
                          />
                          <Text
                            className="text-white-A700 text-xl"
                            size="txtRobotoBold20"

                          >
                            Play
                          </Text>
                        </div>
                      </div>
                      </div>
                      <Line className="bg-purple-A100 h-0.5 w-full" />
                      <div className="flex flex-row md:gap-10 items-center justify-between w-[93%] md:w-full">
                        <Text
                          className="text-gray-100 text-xl"
                          size="txtPoppinsRegular20Gray100"
                        >
                          <span className="text-gray-100 font-opensans text-left font-normal">
                            Episode 7:{" "}
                          </span>
                          <span className="text-gray-100 font-opensans text-left font-bold">
                            Pilot
                          </span>
                        </Text>
                        <div className="h-10 relative w-[9%]">
                        <div className="flex flex-row font-roboto gap-5 h-full items-center justify-between m-auto w-[97%]">
                          <Img
                            className="h-10 rounded-sm w-60"
                            src="images/img_play.svg"
                            alt="play"
                            onClick={() => navigate("/player")}
                          />
                          <Text
                            className="text-white-A700 text-xl"
                            size="txtRobotoBold20"

                          >
                            Play
                          </Text>
                        </div>
                      </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Footer className="flex font-opensans items-center justify-center ml-2 md:ml-[0] mt-8 md:px-5 w-full" />
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailsTwoPage;
