import React from "react";

import { useNavigate } from "react-router-dom";
import Header from "components/Header";
import Footer from "components/Footer";
import { Button, Img, Line, List, Switch, Text } from "components";

const Home1Page = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-gray-900 flex flex-col font-opensans items-center justify-start mx-auto pr-1 py-1 shadow-bs w-full">
        <div className="md:h-[700px] h-[825px] md:px-5 relative w-full">
        <Header className="flex md:flex-col flex-row md:gap-5 items-center justify-center w-full" />

          <div className="absolute bottom-[0] h-[735px] inset-x-[0] mx-auto w-full">
            <Img
              className="h-[731px] m-auto object-cover w-full"
              src="images/40.png"
              alt="9021"
            />
            <div className="absolute flex flex-col h-max inset-y-[0] items-start justify-start  left-[3%] my-auto w-[60%]">
              <Img
                className="h-[169px] sm:h-auto object-cover w-[56%] md:w-full"
                src="images/img_kokotv2.png"
                alt="kokotvTwo"
              />
              <Text
                className="mt-[17px] md:text-3xl sm:text-[28px] text-[32px] w-[60%] text-gray-100"
                size="txtOpenSansRomanBold32Gray100"
              >
                <>Unlimited movies, TV shows, and more.</>
              </Text>
              <Text
                className="mt-3.5 text-base text-gray-100"
                size="txtOpenSansRomanRegular16Gray100"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Text>
              <div className="flex sm:flex-col flex-row font-nunitosans gap-6 items-center justify-start mt-[29px] w-[67%] md:w-full">
                <Button
                  className="common-pointer cursor-pointer font-extrabold leading-[normal] rounded-md text-center text-lg w-[196px]"
                  onClick={() => navigate("/movies")}
                  color="purple_A100"
                  size="sm"
                  variant="fill"
                >
                  Movies
                </Button>
                <Button
                  className="common-pointer cursor-pointer font-extrabold leading-[normal] rounded-md text-center text-lg w-[196px]"
                  onClick={() => navigate("/tvshow")}
                  color="purple_A100"
                  size="sm"
                  variant="fill"
                >
                  TV Shows
                </Button>
              
              </div>
            </div>
          </div>
          
        </div>
        <div className="flex flex-col items-center justify-start max-w-[1326px] mt-8 mx-auto md:px-5 w-full">
          <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full px-[3px]">
            <div className="flex md:flex-1 flex-col items-center justify-start w-[35%] md:w-full">
              <div className="flex flex-col items-center justify-start w-full">
                <div className="flex flex-col gap-[11px] items-center justify-start w-full">
                  <Text
                    className="md:text-3xl sm:text-[28px] text-[32px] text-gray-100"
                    size="txtOpenSansRomanBold32Gray100"
                  >
                    UNLIMITED STREAMING
                  </Text>
                  <Text
                    className="text-base text-gray-100 text-center"
                    size="txtOpenSansRomanRegular16Gray100"
                  >
                    Get streaming access to all the content and all future
                    releases
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex md:flex-1 flex-col items-center justify-start w-[30%] md:w-full">
              <div className="flex flex-col items-center justify-start w-full">
                <div className="flex flex-col gap-[11px] items-center justify-start w-full">
                  <Text
                    className="md:text-3xl sm:text-[28px] text-[35px] text-gray-100"
                    size="txtOpenSansRomanBold32Gray100"
                  >
                    WATCH ANYWHERE
                  </Text>
                  <Text
                    className="text-base text-gray-100"
                    size="txtOpenSansRomanRegular16Gray100"
                  >
                    Enjoy on your favorite device
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex md:flex-1 flex-col items-center justify-start w-[35%] md:w-full">
              <div className="flex flex-col items-center justify-start w-full">
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="flex flex-col gap-2.5 items-center justify-start w-full">
                    <Text
                      className="md:text-3xl sm:text-[28px] text-[32px] text-gray-100"
                      size="txtOpenSansRomanBold32Gray100"
                    >
                      SUPPORT THE CREATORS
                    </Text>
                    <Text
                      className="leading-[20.00px] text-base text-center text-gray-100 w-full"
                      size="txtOpenSansRomanRegular16Gray100"
                    >
                      Directly support the creators and help them provide you
                      with more content
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Text
            className="mt-8 md:text-3xl sm:text-[28px] text-[32px] text-gray-100"
            size="txtOpenSansRomanBold32Gray100"
          >
            Available on
          </Text>

          <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start mt-[22px] w-[81%] md:w-full">
              <div className="flex flex-row gap-3  justify-start w-[12%] md:w-full">
                <Img
                  className="h-8 w-8"
                  src="images/img_iondesktop.svg"
                  alt="iondesktop"
                />
                <Text
                  className="mb-[3px] mt-1.5 text-base text-gray-100"
                  size="txtOpenSansRomanBold16Gray100"
                >
                  Desktop
                </Text>
              </div>
              <div className="flex flex-row gap-3 items-center  ml-8 md:ml-[0] w-[8%] md:w-full">
                <Img
                  className="h-8 w-8"
                  src="images/img_icbaselineapple.svg"
                  alt="icbaselineapple"
                />
                <Text
                  className="text-base text-gray-100"
                  size="txtOpenSansRomanBold16Gray100"
                >
                  iOS
                </Text>
              </div>
              <div className="flex flex-row gap-3 items-center  ml-8 md:ml-[0] w-[12%] md:w-full">
                <Img
                  className="h-8 w-8"
                  src="images/img_deviconplainandroid.svg"
                  alt="deviconplainand"
                />
                <Text
                  className="text-base text-gray-100"
                  size="txtOpenSansRomanBold16Gray100"
                >
                  Android
                </Text>
              </div>
              <Img
                className="h-8 ml-8 md:ml-[0] w-8"
                src="images/img_simpleiconsroku.svg"
                alt="simpleiconsroku"
              />
              <Text
                className="ml-3 md:ml-[0] md:mt-0 mt-[5px] text-base text-gray-100"
                size="txtOpenSansRomanBold16Gray100"
              >
                ROKU
              </Text>
              <Img
                className="h-8 md:ml-[0] ml-[33px] w-8"
                src="images/img_eye.svg"
                alt="eye"
              />
              <Text
                className="ml-3 md:ml-[0] md:mt-0 mt-[5px] text-base text-gray-100"
                size="txtOpenSansRomanBold16Gray100"
              >
                Amazon Fire TV
              </Text>
              <Img
                className="h-8 ml-8 md:ml-[0] w-8"
                src="images/img_computer.svg"
                alt="computer"
              />
              <Text
                className="ml-3 md:ml-[0] md:mt-0 mt-1.5 text-base text-gray-100"
                size="txtOpenSansRomanBold16Gray100"
              >
                Google TV
              </Text>
              <Img
                className="h-8 ml-8 md:ml-[0] w-8"
                src="images/img_simpleiconsappletv.svg"
                alt="simpleiconsappl"
              />
              <Text
                className="ml-3 md:ml-[0] md:mt-0 mt-1.5 text-base text-gray-100"
                size="txtOpenSansRomanBold16Gray100"
              >
                Apple TV
              </Text>
            </div>

          <Text
            className="mt-[4em] md:text-3xl sm:text-[28px] text-[32px] text-gray-100"
            size="txtOpenSansRomanBold32Gray100"
          >
            Some Famous Shows and Movies
          </Text>
        </div>
        
        <List
          className="sm:flex-col flex-row gap-6 grid sm:grid-cols-1 md:grid-cols-3 grid-cols-5 justify-center max-w-[1888px] mt-8 mx-auto md:px-5 w-full"
          orientation="horizontal"
        >
          <div className="h-[349px] relative w-full">
            <Img
              className="h-[349px] m-auto object-cover rounded-[3px] w-full"
              src="images/1.png"
              alt="rectangleThirtyFive"
            />
            <Text className="absolute bottom-[0] inset-x-[0] mx-auto w-max"></Text>
          </div>
          <div className="h-[349px] relative w-full">
            <Img
              className="h-[349px] m-auto object-cover rounded-[3px] w-full"
              src="images/2.png"
              alt="rectangleThirtyFive"
            />
            <Text className="absolute bottom-[0] inset-x-[0] mx-[auto] w-max"></Text>
          </div>
          <div className="h-[349px] relative w-full">
            <Img
              className="h-[349px] m-auto object-cover rounded-[3px] w-full"
              src="images/3.png"
              alt="rectangleThirtyFive"
            />
            <Text className="absolute bottom-[0] inset-x-[0] mx-auto w-max"></Text>
          </div>
          <div className="h-[349px] relative w-full">
            <Img
              className="h-[349px] m-auto object-cover rounded-[3px] w-full"
              src="images/4.png"
              alt="rectangleThirtyFive"
            />
            <Text className="absolute bottom-[0] inset-x-[0] mx-auto w-max"></Text>
          </div>
          <div className="h-[349px] relative w-full">
            <Img
              className="h-[349px] m-auto object-cover rounded-[3px] w-full"
              src="images/5.png"
              alt="rectangleThirtyFive"
            />
            <Text className="absolute bottom-[0] inset-x-[0] mx-auto w-max"></Text>
          </div>
        </List>

        <Text
          className="mt-[2em] md:text-3xl sm:text-[28px] text-[32px] text-gray-100"
          size="txtOpenSansRomanBold32Gray100"
        >
          Membership
        </Text>
        <div className="flex flex-col font-inter gap-[50px] p-5 items-start justify-start max-w-[1816px] mb-4 mt-7 mx-auto md:px-5 w-full">
          <List
            className="sm:flex-col flex-row gap-8 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center w-full"
            orientation="horizontal"
          >
            <div className="bg-white-A700 flex flex-1 flex-col items-center justify-start sm:ml-[0]  py-3 rounded-[20px] w-full">
              <div className="flex flex-col justify-start my-3 w-full">
                <div className="flex flex-row gap-2 items-center justify-start ml-1 md:ml-[0] w-3/4 md:w-full">
                  <Img
                    className="h-10 w-10"
                    src="images/img_lightbulb.svg"
                    alt="lightbulb"
                  />
                  <Text
                    className="md:text-3xl sm:text-[28px] text-[28px] text-gray-900_01"
                    size="txtInterBold32"
                  >
                    Free for All
                  </Text>
                </div>
                <div className="flex flex-col gap-6 items-start justify-start ml-3 md:ml-[0] mt-6 w-auto">
                  <Text
                    className="text-[20px] text-gray-500 sm:text-lg md:text-xl w-full"
                    size="txtInterRegular22"
                  >
                    What You’ll Get
                  </Text>
                  <div className="flex flex-row gap-2 items-start justify-start w-[281px] ">
                    <Img
                      className="h-5 w-5"
                      src="images/img_bxscheckcircle.svg"
                      alt="bxscheckcircle"
                    />
                    <Text
                      className="text-gray-900_01 text-md w-auto"
                      size="txtInterRegular18"
                    >
                      Lorem ipsum dolor sit amet
                    </Text>
                  </div>
                  <div className="flex flex-row gap-2 items-start justify-start w-[281px]">
                    <Img
                      className="h-5 w-5"
                      src="images/img_bxscheckcircle.svg"
                      alt="bxscheckcircle_One"
                    />
                    <Text
                      className="text-gray-900_01 text-md w-auto"
                      size="txtInterRegular18"
                    >
                      Lorem ipsum dolor sit amet
                    </Text>
                  </div>
                  <div className="flex flex-row gap-2 items-start justify-start w-[281px]">
                    <Img
                      className="h-5 w-5"
                      src="images/img_bxscheckcircle.svg"
                      alt="bxscheckcircle_Two"
                    />
                    <Text
                      className="text-gray-900_01 text-md w-auto"
                      size="txtInterRegular18"
                    >
                      Lorem ipsum dolor sit amet
                    </Text>
                  </div>
                  <div className="flex flex-row gap-2 items-start justify-start w-[281px]">
                    <Img
                      className="h-5 w-5"
                      src="images/img_bxscheckcircle.svg"
                      alt="bxscheckcircle_Three"
                    />
                    <Text
                      className="text-gray-900_01 text-md w-auto"
                      size="txtInterRegular18"
                    >
                      Lorem ipsum dolor sit amet
                    </Text>
                  </div>
                </div>
                <Line className="bg-gray-500 h-px mr-3 mt-6 w-[96%]" />
                <Text
                  className="ml-3 md:ml-[0] mt-[25px] md:text-3xl sm:text-[28px] text-[32px] text-gray-900_01"
                  size="txtInterBold32"
                >
                  FREE
                </Text>
                <Button
                  className="cursor-pointer font-semibold min-w-[257px] ml-3 md:ml-[0] mr-6 mt-5 shadow-bs1 text-[22px] text-center sm:text-lg md:text-xl"
                  shape="round"
                  color="purple_A100"
                  size="md"
                  variant="fill"
                  onClick={() => navigate("/businessplan")}
                >
                  Choose
                </Button>
              </div>
            </div>
            <div className="bg-white-A700 flex flex-1 flex-col items-center justify-start sm:ml-[0]  py-3 rounded-[20px] w-full">
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
                <div className="flex flex-col gap-6 items-start justify-start ml-3 md:ml-[0] mt-6 w-auto">
                  <Text
                    className="text-[20px] text-gray-500 sm:text-lg md:text-xl w-full"
                    size="txtInterRegular22"
                  >
                    What You’ll Get
                  </Text>
                  <div className="flex flex-row gap-2 items-start justify-start w-[281px]">
                    <Img
                      className="h-5 w-5"
                      src="images/img_bxscheckcircle.svg"
                      alt="bxscheckcircle"
                    />
                    <Text
                      className="text-gray-900_01 text-md w-auto"
                      size="txtInterRegular18"
                    >
                      Lorem ipsum dolor sit amet
                    </Text>
                  </div>
                  <div className="flex flex-row gap-2 items-start justify-start w-[281px]">
                    <Img
                      className="h-5 w-5"
                      src="images/img_bxscheckcircle.svg"
                      alt="bxscheckcircle_One"
                    />
                    <Text
                      className="text-gray-900_01 text-md w-auto"
                      size="txtInterRegular18"
                    >
                      Lorem ipsum dolor sit amet
                    </Text>
                  </div>
                  <div className="flex flex-row gap-2 items-start justify-start w-[281px]">
                    <Img
                      className="h-5 w-5"
                      src="images/img_bxscheckcircle.svg"
                      alt="bxscheckcircle_Two"
                    />
                    <Text
                      className="text-gray-900_01 text-md w-auto"
                      size="txtInterRegular18"
                    >
                      Lorem ipsum dolor sit amet
                    </Text>
                  </div>
                  <div className="flex flex-row gap-2 items-start justify-start w-[281px]">
                    <Img
                      className="h-5 w-5"
                      src="images/img_bxscheckcircle.svg"
                      alt="bxscheckcircle_Three"
                    />
                    <Text
                      className="text-gray-900_01 text-md w-auto"
                      size="txtInterRegular18"
                    >
                      Lorem ipsum dolor sit amet
                    </Text>
                  </div>
                </div>
                <Line className="bg-gray-500 h-px mr-3 mt-6 w-[96%]" />
                <Text
                  className="ml-3 md:ml-[0] mt-[25px] md:text-3xl sm:text-[28px] text-[32px] text-gray-900_01"
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
                  className="cursor-pointer font-semibold min-w-[257px] ml-3 md:ml-[0] mr-6 mt-5 shadow-bs1 text-[22px] text-center sm:text-lg md:text-xl"
                  shape="round"
                  color="purple_A100"
                  size="md"
                  variant="fill"
                  onClick={() => navigate("/businessplan")}
                >
                  Choose
                </Button>
              </div>
            </div>
            <div className="bg-white-A700 flex flex-1 flex-col items-center justify-start sm:ml-[0]  py-3 rounded-[20px] w-full">
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
                <div className="flex flex-col gap-6 items-start justify-start ml-3 md:ml-[0] mt-6 w-auto">
                  <Text
                    className="text-[20px] text-gray-500 sm:text-lg md:text-xl w-full"
                    size="txtInterRegular22"
                  >
                    What You’ll Get
                  </Text>
                  <div className="flex flex-row gap-2 items-start justify-start w-[281px]">
                    <Img
                      className="h-5 w-5"
                      src="images/img_bxscheckcircle.svg"
                      alt="bxscheckcircle"
                    />
                    <Text
                      className="text-gray-900_01 text-md w-auto"
                      size="txtInterRegular18"
                    >
                      Lorem ipsum dolor sit amet
                    </Text>
                  </div>
                  <div className="flex flex-row gap-2 items-start justify-start w-[281px]">
                    <Img
                      className="h-5 w-5"
                      src="images/img_bxscheckcircle.svg"
                      alt="bxscheckcircle_One"
                    />
                    <Text
                      className="text-gray-900_01 text-md w-auto"
                      size="txtInterRegular18"
                    >
                      Lorem ipsum dolor sit amet
                    </Text>
                  </div>
                  <div className="flex flex-row gap-2 items-start justify-start w-[281px]">
                    <Img
                      className="h-5 w-5"
                      src="images/img_bxscheckcircle.svg"
                      alt="bxscheckcircle_Two"
                    />
                    <Text
                      className="text-gray-900_01 text-md w-auto"
                      size="txtInterRegular18"
                    >
                      Lorem ipsum dolor sit amet
                    </Text>
                  </div>
                  <div className="flex flex-row gap-2 items-start justify-start w-[281px]">
                    <Img
                      className="h-5 w-5"
                      src="images/img_bxscheckcircle.svg"
                      alt="bxscheckcircle_Three"
                    />
                    <Text
                      className="text-gray-900_01 text-md w-auto"
                      size="txtInterRegular18"
                    >
                      Lorem ipsum dolor sit amet
                    </Text>
                  </div>
                </div>
                <Line className="bg-gray-500 h-px mr-3 mt-6 w-[96%]" />
                <Text
                  className="ml-3 md:ml-[0] mt-[25px] md:text-3xl sm:text-[28px] text-[32px] text-gray-900_01"
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
                  className="cursor-pointer font-semibold min-w-[257px] ml-3 md:ml-[0] mr-6 mt-5 shadow-bs1 text-[22px] text-center sm:text-lg md:text-xl"
                  shape="round"
                  color="purple_A100"
                  size="md"
                  variant="fill"
                  onClick={() => navigate("/businessplan")}
                >
                  Choose
                </Button>
              </div>
            </div>
            <div className="bg-white-A700 flex flex-1 flex-col items-center justify-start sm:ml-[0]  py-3 rounded-[20px] w-full">
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
                <div className="flex flex-col gap-6 items-start justify-start ml-3 md:ml-[0] mt-6 w-auto">
                  <Text
                    className="text-[20px] text-gray-500 sm:text-lg md:text-xl w-full"
                    size="txtInterRegular22"
                  >
                    What You’ll Get
                  </Text>
                  <div className="flex flex-row gap-2 items-start justify-start w-[281px]">
                    <Img
                      className="h-5 w-5"
                      src="images/img_bxscheckcircle.svg"
                      alt="bxscheckcircle"
                    />
                    <Text
                      className="text-gray-900_01 text-md w-auto"
                      size="txtInterRegular18"
                    >
                      Lorem ipsum dolor sit amet
                    </Text>
                  </div>
                  <div className="flex flex-row gap-2 items-start justify-start w-[281px]">
                    <Img
                      className="h-5 w-5"
                      src="images/img_bxscheckcircle.svg"
                      alt="bxscheckcircle_One"
                    />
                    <Text
                      className="text-gray-900_01 text-md w-auto"
                      size="txtInterRegular18"
                    >
                      Lorem ipsum dolor sit amet
                    </Text>
                  </div>
                  <div className="flex flex-row gap-2 items-start justify-start w-[281px]">
                    <Img
                      className="h-5 w-5"
                      src="images/img_bxscheckcircle.svg"
                      alt="bxscheckcircle_Two"
                    />
                    <Text
                      className="text-gray-900_01 text-md w-auto"
                      size="txtInterRegular18"
                    >
                      Lorem ipsum dolor sit amet
                    </Text>
                  </div>
                  <div className="flex flex-row gap-2 items-start justify-start w-[281px]">
                    <Img
                      className="h-5 w-5"
                      src="images/img_bxscheckcircle.svg"
                      alt="bxscheckcircle_Three"
                    />
                    <Text
                      className="text-gray-900_01 text-md w-auto"
                      size="txtInterRegular18"
                    >
                      Lorem ipsum dolor sit amet
                    </Text>
                  </div>
                </div>
                <Line className="bg-gray-500 h-px mr-3 mt-6 w-[96%]" />
                <Text
                  className="ml-3 md:ml-[0] mt-[25px] md:text-3xl sm:text-[28px] text-[32px] text-gray-900_01"
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
                  className="cursor-pointer font-semibold min-w-[257px] ml-3 md:ml-[0] mr-6 mt-5 shadow-bs1 text-[22px] text-center sm:text-lg md:text-xl"
                  shape="round"
                  color="purple_A100"
                  size="md"
                  variant="fill"
                  onClick={() => navigate("/businessplan")}
                >
                  Choose
                </Button>
              </div>
            </div>
          </List>
        <Footer />
        </div>
      </div>
    </>
  );
};

export default Home1Page;
