import React from "react";
import { useNavigate } from "react-router-dom";

import { Button, Img, Line, PagerIndicator, RatingBar, Text } from "components";
import Header from "components/Header";
// import Footer from "components/Footer";
// import Banner from "components/banner";
// import Featured from "components/Featured";
// import Trending from "components/Trending";

const MoviesPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-gray-900 flex flex-col font-opensans items-center justify-start mx-auto py-1.5 shadow-bs w-full">
        <div className="flex flex-col items-center justify-start mb-[15px] w-full">
          <Header />
           {/* <Banner /> */}

           <div className="flex flex-col justify-start w-full">
            <div className="font-opensans h-[700px] max-w-[2021px] md:h-[529px]  mx-auto md:px-5 relative w-full">
              <Img
                className="h-[100%] m-auto  object-fill w-full "
                src="images/25.png"
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
                    className="absolute inset-x-[0] mx-auto md:text-5xl text-[60px] text-gray-100  w-max"
                    size="txtOpenSansRomanExtraBold100"
                  >
                    Venom 2: Let there be Carnage
                  </Text>
                  <Img
                    className="absolute bottom-[18%] h-18 left-[40%]"
                    src="images/img_bookmark.svg"
                    alt="bookmark"
                  />
                  <div className="absolute bottom-[8%] flex flex-col font-poppins items-center justify-start left-[0] ">
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
{/* 
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
            </div> */}

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
                    src="images/26.png"
                    alt="game1200"
                  />
                  <Img
                    className="h-[250px] md:h-auto w-full object-cover"
                    src="images/27.png"
                    alt="download"
                  />
                  <Img
                    className="h-[250px] md:h-auto w-full object-cover"
                    src="images/28.png"
                    alt="squidgameunit"
                  />
                  <Img
                    className="h-[250px] md:h-auto w-full object-cover"
                    src="images/29.png"
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
            <div className="bg-purple-A100 flex flex-row font-opensans items-center justify-start max-w-[1982px] mt-[31px] mx-auto p-[17px] md:px-5 rounded-[3px] w-full">
              <div className="flex flex-row md:gap-10 items-center justify-between ml-3.5 w-[96%]">
                <Text
                  className="md:text-3xl sm:text-[28px] text-[32px] text-white-A700"
                  size="txtOpenSansRomanBold32WhiteA700"
                  onClick={() => navigate("/detailstwo")}
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
            <Text
              className="md:ml-[0] ml-[30px] mt-8 md:text-3xl sm:text-[28px] text-[32px] text-gray-100"
              size="txtOpenSansRomanBold32Gray100"
            >
              Related TV Shows
            </Text>

            <div className="flex flex-col items-center justify-start w-full  md:ml-[0] mt-8 md:px-5">
              <div className="flex flex-col items-center justify-start w-full">
                <div className="flex md:flex-col flex-row gap-5 items-center justify-between w-full">
                  <div className="md:flex-1 gap-5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 items-center justify-between w-[47%] md:w-full">
                    <Img
                      className="h-[300px] md:h-auto object-cover w-full"
                      src="images/8.png"
                      alt="faj2uifuuaul6u"
                      onClick={() => navigate("/detailsone")}
                    />
                    <Img
                      className="h-[300px] md:h-auto object-cover w-full"
                      src="images/9.png"
                      alt="mv5bntfinzblyme"
                      onClick={() => navigate("/detailsvenomn")}
                    />
                    <Img
                      className="h-[300px] md:h-auto object-cover w-full"
                      src="images/10.png"
                      alt="yae6uvqijdn411"
                    />
                  </div>
                  <div className="md:flex-1 gap-5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 items-center justify-center w-[47%] md:w-full">
                    <Img
                      className="h-[300px] md:h-auto object-cover w-full"
                      src="images/4.png"
                      alt="faj2uifuuaul6u_One"
                    />
                    <Img
                      className="h-[300px] md:h-auto object-cover w-full"
                      src="images/11.png"
                      alt="mv5bntfinzblyme_One"
                    />
                    <Img
                      className="h-[300px] md:h-auto object-cover w-full"
                      src="images/12.png"
                      alt="yae6uvqijdn411_One"
                    />
                  </div>
                  <div className="flex md:flex-1 flex-col items-center justify-start w-[4%] md:w-full">
                    <Img
                      className="h-[300px] md:h-auto object-cover w-full"
                      src="images/8.png"
                      alt="faj2uifuuaul6u_Two"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>


          {/* <div className="flex flex-col items-start justify-start max-w-[1932px] mt-[49px] mx-auto md:px-5 w-full">
            <List
              className="flex flex-col gap-[50px] items-center w-full"
              orientation="vertical"
            >
              <Featured />
              <Trending />

              <div className="flex flex-1 flex-col gap-[37px] justify-start my-0 w-full">
                <Text
                  className="md:ml-[0] ml-[20px] text-[20px] text-base text-gray-100"
                  size="txtOpenSansRomanBold16Gray100"
                >
                  Popular
                </Text>
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="flex flex-col items-center justify-start w-full">
                    <div className="flex md:flex-col flex-row gap-5 items-center justify-between w-full">
                      <div className="md:flex-1 gap-5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 items-center justify-between w-[47%] md:w-full">
                        <Img
                          className="h-[300px] md:h-auto object-cover w-full"
                          src="images/8.png"
                          alt="faj2uifuuaul6u"
                          onClick={() => navigate("/detailsone")}
                        />
                        <Img
                          className="h-[300px] md:h-auto object-cover w-full"
                          src="images/9.png"
                          alt="mv5bntfinzblyme"
                          onClick={() => navigate("/detailsvenomn")}
                        />
                        <Img
                          className="h-[300px] md:h-auto object-cover w-full"
                          src="images/10.png"
                          alt="yae6uvqijdn411"
                        />
                      </div>
                      <div className="md:flex-1 gap-5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 items-center justify-center w-[47%] md:w-full">
                        <Img
                          className="h-[300px] md:h-auto object-cover w-full"
                          src="images/4.png"
                          alt="faj2uifuuaul6u_One"
                        />
                        <Img
                          className="h-[300px] md:h-auto object-cover w-full"
                          src="images/11.png"
                          alt="mv5bntfinzblyme_One"
                        />
                        <Img
                          className="h-[300px] md:h-auto object-cover w-full"
                          src="images/12.png"
                          alt="yae6uvqijdn411_One"
                        />
                      </div>
                      <div className="flex md:flex-1 flex-col items-center justify-start w-[4%] md:w-full">
                        <Img
                          className="h-[300px] md:h-auto object-cover w-full"
                          src="images/8.png"
                          alt="faj2uifuuaul6u_Two"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </List>
            <div className="flex flex-col gap-[37px] justify-start mt-[50px] w-full">
              <Text
                className="md:ml-[0] ml-[20px] text-[20px] text-base text-gray-100"
                size="txtOpenSansRomanBold16Gray100"
              >
                Top 10 in USA
              </Text>
              <div className="flex flex-col items-center justify-start w-full">
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="flex md:flex-col flex-row gap-5 items-center justify-between w-full">
                    <div className="md:flex-1 gap-5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 items-center justify-between w-[47%] md:w-full">
                      <Img
                        className="h-[300px] md:h-auto object-cover w-full"
                        src="images/8.png"
                        alt="faj2uifuuaul6u"
                        onClick={() => navigate("/detailsone")}
                      />
                      <Img
                        className="h-[300px] md:h-auto object-cover w-full"
                        src="images/9.png"
                        alt="mv5bntfinzblyme"
                        onClick={() => navigate("/detailsvenomn")}
                      />
                      <Img
                        className="h-[300px] md:h-auto object-cover w-full"
                        src="images/10.png"
                        alt="yae6uvqijdn411"
                      />
                    </div>
                    <div className="md:flex-1 gap-5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 items-center justify-center w-[47%] md:w-full">
                      <Img
                        className="h-[300px] md:h-auto object-cover w-full"
                        src="images/4.png"
                        alt="faj2uifuuaul6u_One"
                      />
                      <Img
                        className="h-[300px] md:h-auto object-cover w-full"
                        src="images/11.png"
                        alt="mv5bntfinzblyme_One"
                      />
                      <Img
                        className="h-[300px] md:h-auto object-cover w-full"
                        src="images/12.png"
                        alt="yae6uvqijdn411_One"
                      />
                    </div>
                    <div className="flex md:flex-1 flex-col items-center justify-start w-[4%] md:w-full">
                      <Img
                        className="h-[300px] md:h-auto object-cover w-full"
                        src="images/8.png"
                        alt="faj2uifuuaul6u_Two"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <List
              className="flex flex-col gap-12 items-center mt-[49px] w-full"
              orientation="vertical"
            >
              <div className="flex flex-1 flex-col gap-[39px] justify-start w-full">
                <Text
                  className="md:ml-[0] ml-[20px] text-[20px] text-base text-gray-100"
                  size="txtOpenSansRomanBold16Gray100"
                >
                  Action/Adventure
                </Text>
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="flex flex-col items-center justify-start w-full">
                    <div className="flex md:flex-col flex-row gap-5 items-center justify-between w-full">
                      <div className="md:flex-1 gap-5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 items-center justify-between w-[47%] md:w-full">
                        <Img
                          className="h-[300px] md:h-auto object-cover w-full"
                          src="images/8.png"
                          alt="faj2uifuuaul6u"
                          onClick={() => navigate("/detailsone")}
                        />
                        <Img
                          className="h-[300px] md:h-auto object-cover w-full"
                          src="images/9.png"
                          alt="mv5bntfinzblyme"
                          onClick={() => navigate("/detailsvenomn")}
                        />
                        <Img
                          className="h-[300px] md:h-auto object-cover w-full"
                          src="images/10.png"
                          alt="yae6uvqijdn411"
                        />
                      </div>
                      <div className="md:flex-1 gap-5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 items-center justify-center w-[47%] md:w-full">
                        <Img
                          className="h-[300px] md:h-auto object-cover w-full"
                          src="images/4.png"
                          alt="faj2uifuuaul6u_One"
                        />
                        <Img
                          className="h-[300px] md:h-auto object-cover w-full"
                          src="images/11.png"
                          alt="mv5bntfinzblyme_One"
                        />
                        <Img
                          className="h-[300px] md:h-auto object-cover w-full"
                          src="images/12.png"
                          alt="yae6uvqijdn411_One"
                        />
                      </div>
                      <div className="flex md:flex-1 flex-col items-center justify-start w-[4%] md:w-full">
                        <Img
                          className="h-[300px] md:h-auto object-cover w-full"
                          src="images/8.png"
                          alt="faj2uifuuaul6u_Two"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-1 flex-col gap-[39px] justify-start w-full">
                <Text
                  className="md:ml-[0] ml-[20px] text-[20px] text-base text-gray-100"
                  size="txtOpenSansRomanBold16Gray100"
                >
                  Animations
                </Text>
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="flex flex-col items-center justify-start w-full">
                    <div className="flex md:flex-col flex-row gap-5 items-center justify-between w-full">
                      <div className="md:flex-1 gap-5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 items-center justify-between w-[47%] md:w-full">
                        <Img
                          className="h-[300px] md:h-auto object-cover w-full"
                          src="images/8.png"
                          alt="faj2uifuuaul6u"
                          onClick={() => navigate("/detailsone")}
                        />
                        <Img
                          className="h-[300px] md:h-auto object-cover w-full"
                          src="images/9.png"
                          alt="mv5bntfinzblyme"
                          onClick={() => navigate("/detailsvenomn")}
                        />
                        <Img
                          className="h-[300px] md:h-auto object-cover w-full"
                          src="images/10.png"
                          alt="yae6uvqijdn411"
                        />
                      </div>
                      <div className="md:flex-1 gap-5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 items-center justify-center w-[47%] md:w-full">
                        <Img
                          className="h-[300px] md:h-auto object-cover w-full"
                          src="images/4.png"
                          alt="faj2uifuuaul6u_One"
                        />
                        <Img
                          className="h-[300px] md:h-auto object-cover w-full"
                          src="images/11.png"
                          alt="mv5bntfinzblyme_One"
                        />
                        <Img
                          className="h-[300px] md:h-auto object-cover w-full"
                          src="images/12.png"
                          alt="yae6uvqijdn411_One"
                        />
                      </div>
                      <div className="flex md:flex-1 flex-col items-center justify-start w-[4%] md:w-full">
                        <Img
                          className="h-[300px] md:h-auto object-cover w-full"
                          src="images/8.png"
                          alt="faj2uifuuaul6u_Two"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-1 flex-col gap-[37px] justify-start w-full">
                <Text
                  className="md:ml-[0] ml-[20px] text-[20px] text-base text-gray-100"
                  size="txtOpenSansRomanBold16Gray100"
                >
                  Comedy
                </Text>
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="flex flex-col items-center justify-start w-full">
                    <div className="flex md:flex-col flex-row gap-5 items-center justify-between w-full">
                      <div className="md:flex-1 gap-5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 items-center justify-between w-[47%] md:w-full">
                        <Img
                          className="h-[300px] md:h-auto object-cover w-full"
                          src="images/8.png"
                          alt="faj2uifuuaul6u"
                          onClick={() => navigate("/detailsone")}
                        />
                        <Img
                          className="h-[300px] md:h-auto object-cover w-full"
                          src="images/9.png"
                          alt="mv5bntfinzblyme"
                          onClick={() => navigate("/detailsvenomn")}
                        />
                        <Img
                          className="h-[300px] md:h-auto object-cover w-full"
                          src="images/10.png"
                          alt="yae6uvqijdn411"
                        />
                      </div>
                      <div className="md:flex-1 gap-5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 items-center justify-center w-[47%] md:w-full">
                        <Img
                          className="h-[300px] md:h-auto object-cover w-full"
                          src="images/4.png"
                          alt="faj2uifuuaul6u_One"
                        />
                        <Img
                          className="h-[300px] md:h-auto object-cover w-full"
                          src="images/11.png"
                          alt="mv5bntfinzblyme_One"
                        />
                        <Img
                          className="h-[300px] md:h-auto object-cover w-full"
                          src="images/12.png"
                          alt="yae6uvqijdn411_One"
                        />
                      </div>
                      <div className="flex md:flex-1 flex-col items-center justify-start w-[4%] md:w-full">
                        <Img
                          className="h-[300px] md:h-auto object-cover w-full"
                          src="images/8.png"
                          alt="faj2uifuuaul6u_Two"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-1 flex-col gap-9 justify-start w-full">
                <Text
                  className="md:ml-[0] ml-[20px] text-[20px] text-base text-gray-100"
                  size="txtOpenSansRomanBold16Gray100"
                >
                  Documentary
                </Text>
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="flex flex-col items-center justify-start w-full">
                    <div className="flex md:flex-col flex-row gap-5 items-center justify-between w-full">
                      <div className="md:flex-1 gap-5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 items-center justify-between w-[47%] md:w-full">
                        <Img
                          className="h-[300px] md:h-auto object-cover w-full"
                          src="images/8.png"
                          alt="faj2uifuuaul6u"
                          onClick={() => navigate("/detailsone")}
                        />
                        <Img
                          className="h-[300px] md:h-auto object-cover w-full"
                          src="images/9.png"
                          alt="mv5bntfinzblyme"
                          onClick={() => navigate("/detailsvenomn")}
                        />
                        <Img
                          className="h-[300px] md:h-auto object-cover w-full"
                          src="images/10.png"
                          alt="yae6uvqijdn411"
                        />
                      </div>
                      <div className="md:flex-1 gap-5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 items-center justify-center w-[47%] md:w-full">
                        <Img
                          className="h-[300px] md:h-auto object-cover w-full"
                          src="images/4.png"
                          alt="faj2uifuuaul6u_One"
                        />
                        <Img
                          className="h-[300px] md:h-auto object-cover w-full"
                          src="images/11.png"
                          alt="mv5bntfinzblyme_One"
                        />
                        <Img
                          className="h-[300px] md:h-auto object-cover w-full"
                          src="images/12.png"
                          alt="yae6uvqijdn411_One"
                        />
                      </div>
                      <div className="flex md:flex-1 flex-col items-center justify-start w-[4%] md:w-full">
                        <Img
                          className="h-[300px] md:h-auto object-cover w-full"
                          src="images/8.png"
                          alt="faj2uifuuaul6u_Two"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-1 flex-col gap-[38px] justify-start w-full">
                <Text
                  className="md:ml-[0] ml-[20px] text-[20px] text-base text-gray-100"
                  size="txtOpenSansRomanBold16Gray100"
                >
                  Drama
                </Text>
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="flex flex-col items-center justify-start w-full">
                    <div className="flex md:flex-col flex-row gap-5 items-center justify-between w-full">
                      <div className="md:flex-1 gap-5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 items-center justify-between w-[47%] md:w-full">
                        <Img
                          className="h-[300px] md:h-auto object-cover w-full"
                          src="images/8.png"
                          alt="faj2uifuuaul6u"
                          onClick={() => navigate("/detailsone")}
                        />
                        <Img
                          className="h-[300px] md:h-auto object-cover w-full"
                          src="images/9.png"
                          alt="mv5bntfinzblyme"
                          onClick={() => navigate("/detailsvenomn")}
                        />
                        <Img
                          className="h-[300px] md:h-auto object-cover w-full"
                          src="images/10.png"
                          alt="yae6uvqijdn411"
                        />
                      </div>
                      <div className="md:flex-1 gap-5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 items-center justify-center w-[47%] md:w-full">
                        <Img
                          className="h-[300px] md:h-auto object-cover w-full"
                          src="images/4.png"
                          alt="faj2uifuuaul6u_One"
                        />
                        <Img
                          className="h-[300px] md:h-auto object-cover w-full"
                          src="images/11.png"
                          alt="mv5bntfinzblyme_One"
                        />
                        <Img
                          className="h-[300px] md:h-auto object-cover w-full"
                          src="images/12.png"
                          alt="yae6uvqijdn411_One"
                        />
                      </div>
                      <div className="flex md:flex-1 flex-col items-center justify-start w-[4%] md:w-full">
                        <Img
                          className="h-[300px] md:h-auto object-cover w-full"
                          src="images/8.png"
                          alt="faj2uifuuaul6u_Two"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-1 flex-col gap-[38px] justify-start w-full">
                <Text
                  className="md:ml-[0] ml-[20px] text-[20px] text-base text-gray-100"
                  size="txtOpenSansRomanBold16Gray100"
                >
                  Horror
                </Text>
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="flex flex-col items-center justify-start w-full">
                    <div className="flex md:flex-col flex-row gap-5 items-center justify-between w-full">
                      <div className="md:flex-1 gap-5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 items-center justify-between w-[47%] md:w-full">
                        <Img
                          className="h-[300px] md:h-auto object-cover w-full"
                          src="images/8.png"
                          alt="faj2uifuuaul6u"
                          onClick={() => navigate("/detailsone")}
                        />
                        <Img
                          className="h-[300px] md:h-auto object-cover w-full"
                          src="images/9.png"
                          alt="mv5bntfinzblyme"
                          onClick={() => navigate("/detailsvenomn")}
                        />
                        <Img
                          className="h-[300px] md:h-auto object-cover w-full"
                          src="images/10.png"
                          alt="yae6uvqijdn411"
                        />
                      </div>
                      <div className="md:flex-1 gap-5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 items-center justify-center w-[47%] md:w-full">
                        <Img
                          className="h-[300px] md:h-auto object-cover w-full"
                          src="images/4.png"
                          alt="faj2uifuuaul6u_One"
                        />
                        <Img
                          className="h-[300px] md:h-auto object-cover w-full"
                          src="images/11.png"
                          alt="mv5bntfinzblyme_One"
                        />
                        <Img
                          className="h-[300px] md:h-auto object-cover w-full"
                          src="images/12.png"
                          alt="yae6uvqijdn411_One"
                        />
                      </div>
                      <div className="flex md:flex-1 flex-col items-center justify-start w-[4%] md:w-full">
                        <Img
                          className="h-[300px] md:h-auto object-cover w-full"
                          src="images/8.png"
                          alt="faj2uifuuaul6u_Two"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-1 flex-col gap-[39px] justify-start w-full">
                <Text
                  className="md:ml-[0] ml-[20px] text-[20px] text-base text-gray-100"
                  size="txtOpenSansRomanBold16Gray100"
                >
                  Music
                </Text>
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="flex flex-col items-center justify-start w-full">
                    <div className="flex md:flex-col flex-row gap-5 items-center justify-between w-full">
                      <div className="md:flex-1 gap-5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 items-center justify-between w-[47%] md:w-full">
                        <Img
                          className="h-[300px] md:h-auto object-cover w-full"
                          src="images/8.png"
                          alt="faj2uifuuaul6u"
                          onClick={() => navigate("/detailsone")}
                        />
                        <Img
                          className="h-[300px] md:h-auto object-cover w-full"
                          src="images/9.png"
                          alt="mv5bntfinzblyme"
                          onClick={() => navigate("/detailsvenomn")}
                        />
                        <Img
                          className="h-[300px] md:h-auto object-cover w-full"
                          src="images/10.png"
                          alt="yae6uvqijdn411"
                        />
                      </div>
                      <div className="md:flex-1 gap-5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 items-center justify-center w-[47%] md:w-full">
                        <Img
                          className="h-[300px] md:h-auto object-cover w-full"
                          src="images/4.png"
                          alt="faj2uifuuaul6u_One"
                        />
                        <Img
                          className="h-[300px] md:h-auto object-cover w-full"
                          src="images/11.png"
                          alt="mv5bntfinzblyme_One"
                        />
                        <Img
                          className="h-[300px] md:h-auto object-cover w-full"
                          src="images/12.png"
                          alt="yae6uvqijdn411_One"
                        />
                      </div>
                      <div className="flex md:flex-1 flex-col items-center justify-start w-[4%] md:w-full">
                        <Img
                          className="h-[300px] md:h-auto object-cover w-full"
                          src="images/8.png"
                          alt="faj2uifuuaul6u_Two"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-1 flex-col gap-[39px] justify-start w-full">
                <Text
                  className="md:ml-[0] ml-[20px] text-[20px] text-base text-gray-100"
                  size="txtOpenSansRomanBold16Gray100"
                >
                  Romantic
                </Text>
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="flex flex-col items-center justify-start w-full">
                    <div className="flex md:flex-col flex-row gap-5 items-center justify-between w-full">
                      <div className="md:flex-1 gap-5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 items-center justify-between w-[47%] md:w-full">
                        <Img
                          className="h-[300px] md:h-auto object-cover w-full"
                          src="images/8.png"
                          alt="faj2uifuuaul6u"
                          onClick={() => navigate("/detailsone")}
                        />
                        <Img
                          className="h-[300px] md:h-auto object-cover w-full"
                          src="images/9.png"
                          alt="mv5bntfinzblyme"
                          onClick={() => navigate("/detailsvenomn")}
                        />
                        <Img
                          className="h-[300px] md:h-auto object-cover w-full"
                          src="images/10.png"
                          alt="yae6uvqijdn411"
                        />
                      </div>
                      <div className="md:flex-1 gap-5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 items-center justify-center w-[47%] md:w-full">
                        <Img
                          className="h-[300px] md:h-auto object-cover w-full"
                          src="images/4.png"
                          alt="faj2uifuuaul6u_One"
                        />
                        <Img
                          className="h-[300px] md:h-auto object-cover w-full"
                          src="images/11.png"
                          alt="mv5bntfinzblyme_One"
                        />
                        <Img
                          className="h-[300px] md:h-auto object-cover w-full"
                          src="images/12.png"
                          alt="yae6uvqijdn411_One"
                        />
                      </div>
                      <div className="flex md:flex-1 flex-col items-center justify-start w-[4%] md:w-full">
                        <Img
                          className="h-[300px] md:h-auto object-cover w-full"
                          src="images/8.png"
                          alt="faj2uifuuaul6u_Two"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-1 flex-col gap-[37px] justify-start w-full">
                <Text
                  className="md:ml-[0] ml-[20px] text-[20px] text-base text-gray-100"
                  size="txtOpenSansRomanBold16Gray100"
                >
                  Science Fiction/Fantasy
                </Text>
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="flex flex-col items-center justify-start w-full">
                    <div className="flex md:flex-col flex-row gap-5 items-center justify-between w-full">
                      <div className="md:flex-1 gap-5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 items-center justify-between w-[47%] md:w-full">
                        <Img
                          className="h-[300px] md:h-auto object-cover w-full"
                          src="images/8.png"
                          alt="faj2uifuuaul6u"
                          onClick={() => navigate("/detailsone")}
                        />
                        <Img
                          className="h-[300px] md:h-auto object-cover w-full"
                          src="images/9.png"
                          alt="mv5bntfinzblyme"
                          onClick={() => navigate("/detailsvenomn")}
                        />
                        <Img
                          className="h-[300px] md:h-auto object-cover w-full"
                          src="images/10.png"
                          alt="yae6uvqijdn411"
                        />
                      </div>
                      <div className="md:flex-1 gap-5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 items-center justify-center w-[47%] md:w-full">
                        <Img
                          className="h-[300px] md:h-auto object-cover w-full"
                          src="images/4.png"
                          alt="faj2uifuuaul6u_One"
                        />
                        <Img
                          className="h-[300px] md:h-auto object-cover w-full"
                          src="images/11.png"
                          alt="mv5bntfinzblyme_One"
                        />
                        <Img
                          className="h-[300px] md:h-auto object-cover w-full"
                          src="images/12.png"
                          alt="yae6uvqijdn411_One"
                        />
                      </div>
                      <div className="flex md:flex-1 flex-col items-center justify-start w-[4%] md:w-full">
                        <Img
                          className="h-[300px] md:h-auto object-cover w-full"
                          src="images/8.png"
                          alt="faj2uifuuaul6u_Two"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-9  w-full">
                <Text
                  className="md:ml-[0] ml-[20px] text-[20px]  text-base text-gray-100"
                  size="txtOpenSansRomanBold16Gray100"
                >
                  Sports
                </Text>
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="flex flex-col items-center justify-start w-full">
                    <div className="flex md:flex-col flex-row gap-5 items-center justify-between w-full">
                      <div className="md:flex-1 gap-5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 items-center justify-between w-[47%] md:w-full">
                        <Img
                          className="h-[300px] md:h-auto object-cover w-full"
                          src="images/8.png"
                          alt="faj2uifuuaul6u"
                          onClick={() => navigate("/detailsone")}
                        />
                        <Img
                          className="h-[300px] md:h-auto object-cover w-full"
                          src="images/9.png"
                          alt="mv5bntfinzblyme"
                          onClick={() => navigate("/detailsvenomn")}
                        />
                        <Img
                          className="h-[300px] md:h-auto object-cover w-full"
                          src="images/10.png"
                          alt="yae6uvqijdn411"
                        />
                      </div>
                      <div className="md:flex-1 gap-5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 items-center justify-center w-[47%] md:w-full">
                        <Img
                          className="h-[300px] md:h-auto object-cover w-full"
                          src="images/4.png"
                          alt="faj2uifuuaul6u_One"
                        />
                        <Img
                          className="h-[300px] md:h-auto object-cover w-full"
                          src="images/11.png"
                          alt="mv5bntfinzblyme_One"
                        />
                        <Img
                          className="h-[300px] md:h-auto object-cover w-full"
                          src="images/12.png"
                          alt="yae6uvqijdn411_One"
                        />
                      </div>
                      <div className="flex md:flex-1 flex-col items-center justify-start w-[4%] md:w-full">
                        <Img
                          className="h-[300px] md:h-auto object-cover w-full"
                          src="images/8.png"
                          alt="faj2uifuuaul6u_Two"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </List>
          </div> */}
        </div>

        <div className="flex sm:flex-col flex-row font-opensans gap-8 items-start justify-start md:w-full md:mt-[2em] pl-[4em] md:p-0 text-left w-full my-5">
          <a className="text-base text-white-A700">
            <Text
              className="common-pointer"
              size="txtOpenSansRomanRegular16"
              onClick={() => navigate("/privacy")}
            >
              Privacy Policy
            </Text>
          </a>
          <Text
            className="common-pointer text-base text-white-A700"
            size="txtOpenSansRomanRegular16"
            onClick={() => navigate("/disclaimer")}
          >
            Disclaimer
          </Text>
          <a className="text-base text-white-A700">
            <Text
              className="common-pointer"
              size="txtOpenSansRomanRegular16"
              onClick={() => navigate("/termsconditions")}
            >
              Terms and Conditions
            </Text>
          </a>
          <Text
            className="text-base text-white-A700"
            size="txtOpenSansRomanRegular16"
          >
            Terms of Use
          </Text>
        </div>
      </div>
    </>
  );
};

export default MoviesPage;
