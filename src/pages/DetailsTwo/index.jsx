import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Line, RatingBar, Text } from "components";
import Footer from "components/Footer";
import Header from "components/Header";
const DetailsTwoPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-gray-900_01 flex flex-col font-opensans items-center justify-start mx-auto py-1.5 w-full">
        <div className="flex flex-col gap-[18px] items-center justify-start  w-full">
        <Header className="flex md:flex-col flex-row md:gap-5 items-center justify-center w-full" />

          <div className="flex flex-col justify-start w-full">
          <div className="font-opensans h-[700px] max-w-[2021px] md:h-[529px]  mx-auto md:px-5 relative w-full">
              <Img
                className="h-[100%] m-auto  object-cover w-full "
                src="images/img_lucifers1_924x1421.png"
                alt="lucifersOne"
              />
              <div className="absolute bottom-[10%] flex flex-col gap-[18px] items-start justify-start left-[4%] w-[57%]">
                <Text
                  className="text-base text-gray-100 text-right"
                  size="txtOpenSansRomanBold16Gray100"
                >
                  Netflix’s Original
                </Text>
                <div className="md:h-[137px] h-[200px] relative w-full mt-[-20px]">
                  <Text
                    className="absolute inset-x-[0] mx-auto md:text-5xl text-[70px] text-gray-100  w-max"
                    size="txtOpenSansRomanExtraBold100"
                  >
                    Squid Game Season 1
                  </Text>
                  <Img
                    className="absolute bottom-[10%] h-18 left-[40%]"
                    src="images/img_bookmark.svg"
                    alt="bookmark"
                  />
                  <div className="absolute bottom-[0%] flex flex-col font-poppins items-center justify-start left-[0] ">
                    <div className="flex flex-col justify-start w-full">
                      <div className="flex flex-row gap-[38px] items-center justify-between ml-1.5 md:ml-[0] w-[100%] md:w-full">
                        <Text
                          className="text-gray-100  text-lg"
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
                          className="text-gray-100 text-right text-lg"
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
                      <div className="flex flex-row gap-5 items-center justify-start w-[100%] md:w-full">
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
              className="md:ml-[0] ml-[50px] mt-5 text-gray-100 text-sm w-[93%] sm:w-full text-justify"
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
            <div className="flex flex-col font-poppins gap-2.5 items-start justify-start md:ml-[0] ml-[50px] mt-[22px] md:px-5 w-[90%]">
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
              <div className="flex md:flex-col flex-row gap-5 items-center justify-between w-full">
                <div className="md:flex-1  grid sm:grid-cols-1 md:grid-cols-2  grid-cols-4 items-center justify-between w-[100%] md:w-full">
                  <Img
                    className="h-[250px] md:h-auto w-full object-cover"
                    src="images/img_game1200.png"
                    alt="game1200"
                  />
                  <Img
                    className="h-[250px] md:h-auto w-full object-cover"
                    src="images/img_download_250x375.png"
                    alt="download"
                  />
                  <Img
                    className="h-[250px] md:h-auto w-full object-cover"
                    src="images/img_squidgameunit.png"
                    alt="squidgameunit"
                  />
                  <Img
                    className="h-[250px] md:h-auto w-full object-cover"
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
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailsTwoPage;
