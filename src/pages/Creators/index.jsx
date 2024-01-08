import React from "react";
import { useNavigate } from "react-router-dom";

import { Button, Img, Text } from "components";

const CreatorsPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-gray-900 flex flex-col font-opensans items-center justify-start mx-auto p-1.5 shadow-bs w-full">
        <div className="flex flex-col md:gap-10 gap-16 items-center justify-start max-w-[1384px] mb-[11px] mx-auto md:px-5 w-full">

       
          
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
                  src="images/img_svgexport6.svg"
                  alt="svgexportSix"
                />
                <Text
                   className="text-base text-white-A700  w-auto"
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
              <div className="flex flex-row gap-2 items-center justify-center w-auto">
                  <Img
                    className="h-6 w-6"
                    src="images/img_search_purple_a100.svg"
                    alt="search"
                  />
                  <Text
                    className="text-base text-purple-A100 w-auto"
                    size="txtOpenSansRomanBold16"
                    onClick={() => navigate("/creators")}
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


          <div className="flex flex-col md:h-[569px] mt-[100px] items-center justify-start w-[136%] md:w-full">
            <div className="gap-20 md:gap-5 grid sm:grid-cols-1 md:grid-cols-3 grid-cols-5 justify-center min-h-[auto] w-full">
              <div className="flex flex-1 flex-col gap-4 items-center justify-start w-full">
                <Img
                  className="h-[200px] md:h-auto rounded-[50%] w-[200px]"
                  src="images/13.png"
                  alt="ellipseSeventySeven"
                />
                <Text
                  className="md:text-3xl sm:text-[28px] text-[32px] text-white-A700"
                  size="txtOpenSansRomanBold32WhiteA700"
                >
                  Omarion
                </Text>
              </div>
              <div className="flex flex-1 flex-col gap-4 items-center justify-start w-full">
                <Img
                  className="h-[200px] md:h-auto rounded-[50%] w-[200px]"
                  src="images/14.png"
                  alt="ellipseSeventySeven"
                />
                <Text
                  className="md:text-3xl sm:text-[28px] text-[32px] text-white-A700"
                  size="txtOpenSansRomanBold32WhiteA700"
                >
                  Omarion
                </Text>
              </div>
              <div className="flex flex-1 flex-col gap-4 items-center justify-start w-full">
                <Img
                  className="h-[200px] md:h-auto rounded-[50%] w-[200px]"
                  src="images/15.png"
                  alt="ellipseSeventySeven"
                />
                <Text
                  className="md:text-3xl sm:text-[28px] text-[32px] text-white-A700"
                  size="txtOpenSansRomanBold32WhiteA700"
                >
                  Omarion
                </Text>
              </div>
              <div className="flex flex-1 flex-col gap-4 items-center justify-start w-full">
                <Img
                  className="h-[200px] md:h-auto rounded-[50%] w-[200px]"
                  src="images/16.png"
                  alt="ellipseSeventySeven"
                />
                <Text
                  className="md:text-3xl sm:text-[28px] text-[32px] text-white-A700"
                  size="txtOpenSansRomanBold32WhiteA700"
                >
                  Omarion
                </Text>
              </div>
              <div className="flex flex-1 flex-col gap-4 items-center justify-start w-full">
                <Img
                  className="h-[200px] md:h-auto rounded-[50%] w-[200px]"
                  src="images/17.png"
                  alt="ellipseSeventySeven"
                />
                <Text
                  className="md:text-3xl sm:text-[28px] text-[32px] text-white-A700"
                  size="txtOpenSansRomanBold32WhiteA700"
                >
                  Omarion
                </Text>
              </div>

              <div className="flex flex-1 flex-col gap-4 items-center justify-start w-full">
                <Img
                  className="h-[200px] md:h-auto rounded-[50%] w-[200px]"
                  src="images/13.png"
                  alt="ellipseSeventySeven"
                />
                <Text
                  className="md:text-3xl sm:text-[28px] text-[32px] text-white-A700"
                  size="txtOpenSansRomanBold32WhiteA700"
                >
                  Omarion
                </Text>
              </div>
              <div className="flex flex-1 flex-col gap-4 items-center justify-start w-full">
                <Img
                  className="h-[200px] md:h-auto rounded-[50%] w-[200px]"
                  src="images/14.png"
                  alt="ellipseSeventySeven"
                />
                <Text
                  className="md:text-3xl sm:text-[28px] text-[32px] text-white-A700"
                  size="txtOpenSansRomanBold32WhiteA700"
                >
                  Omarion
                </Text>
              </div>
              <div className="flex flex-1 flex-col gap-4 items-center justify-start w-full">
                <Img
                  className="h-[200px] md:h-auto rounded-[50%] w-[200px]"
                  src="images/15.png"
                  alt="ellipseSeventySeven"
                />
                <Text
                  className="md:text-3xl sm:text-[28px] text-[32px] text-white-A700"
                  size="txtOpenSansRomanBold32WhiteA700"
                >
                  Omarion
                </Text>
              </div>
              <div className="flex flex-1 flex-col gap-4 items-center justify-start w-full">
                <Img
                  className="h-[200px] md:h-auto rounded-[50%] w-[200px]"
                  src="images/16.png"
                  alt="ellipseSeventySeven"
                />
                <Text
                  className="md:text-3xl sm:text-[28px] text-[32px] text-white-A700"
                  size="txtOpenSansRomanBold32WhiteA700"
                >
                  Omarion
                </Text>
              </div>
              <div className="flex flex-1 flex-col gap-4 items-center justify-start w-full">
                <Img
                  className="h-[200px] md:h-auto rounded-[50%] w-[200px]"
                  src="images/17.png"
                  alt="ellipseSeventySeven"
                />
                <Text
                  className="md:text-3xl sm:text-[28px] text-[32px] text-white-A700"
                  size="txtOpenSansRomanBold32WhiteA700"
                >
                  Omarion
                </Text>
              </div>

              <div className="flex flex-1 flex-col gap-4 items-center justify-start w-full">
                <Img
                  className="h-[200px] md:h-auto rounded-[50%] w-[200px]"
                  src="images/13.png"
                  alt="ellipseSeventySeven"
                />
                <Text
                  className="md:text-3xl sm:text-[28px] text-[32px] text-white-A700"
                  size="txtOpenSansRomanBold32WhiteA700"
                >
                  Omarion
                </Text>
              </div>
              <div className="flex flex-1 flex-col gap-4 items-center justify-start w-full">
                <Img
                  className="h-[200px] md:h-auto rounded-[50%] w-[200px]"
                  src="images/14.png"
                  alt="ellipseSeventySeven"
                />
                <Text
                  className="md:text-3xl sm:text-[28px] text-[32px] text-white-A700"
                  size="txtOpenSansRomanBold32WhiteA700"
                >
                  Omarion
                </Text>
              </div>
              <div className="flex flex-1 flex-col gap-4 items-center justify-start w-full">
                <Img
                  className="h-[200px] md:h-auto rounded-[50%] w-[200px]"
                  src="images/15.png"
                  alt="ellipseSeventySeven"
                />
                <Text
                  className="md:text-3xl sm:text-[28px] text-[32px] text-white-A700"
                  size="txtOpenSansRomanBold32WhiteA700"
                >
                  Omarion
                </Text>
              </div>
              <div className="flex flex-1 flex-col gap-4 items-center justify-start w-full">
                <Img
                  className="h-[200px] md:h-auto rounded-[50%] w-[200px]"
                  src="images/16.png"
                  alt="ellipseSeventySeven"
                />
                <Text
                  className="md:text-3xl sm:text-[28px] text-[32px] text-white-A700"
                  size="txtOpenSansRomanBold32WhiteA700"
                >
                  Omarion
                </Text>
              </div>
              <div className="flex flex-1 flex-col gap-4 items-center justify-start w-full">
                <Img
                  className="h-[200px] md:h-auto rounded-[50%] w-[200px]"
                  src="images/17.png"
                  alt="ellipseSeventySeven"
                />
                <Text
                  className="md:text-3xl sm:text-[28px] text-[32px] text-white-A700"
                  size="txtOpenSansRomanBold32WhiteA700"
                >
                  Omarion
                </Text>
              </div>

              <div className="flex flex-1 flex-col gap-4 items-center justify-start w-full">
                <Img
                  className="h-[200px] md:h-auto rounded-[50%] w-[200px]"
                  src="images/13.png"
                  alt="ellipseSeventySeven"
                />
                <Text
                  className="md:text-3xl sm:text-[28px] text-[32px] text-white-A700"
                  size="txtOpenSansRomanBold32WhiteA700"
                >
                  Omarion
                </Text>
              </div>
              <div className="flex flex-1 flex-col gap-4 items-center justify-start w-full">
                <Img
                  className="h-[200px] md:h-auto rounded-[50%] w-[200px]"
                  src="images/14.png"
                  alt="ellipseSeventySeven"
                />
                <Text
                  className="md:text-3xl sm:text-[28px] text-[32px] text-white-A700"
                  size="txtOpenSansRomanBold32WhiteA700"
                >
                  Omarion
                </Text>
              </div>
              <div className="flex flex-1 flex-col gap-4 items-center justify-start w-full">
                <Img
                  className="h-[200px] md:h-auto rounded-[50%] w-[200px]"
                  src="images/15.png"
                  alt="ellipseSeventySeven"
                />
                <Text
                  className="md:text-3xl sm:text-[28px] text-[32px] text-white-A700"
                  size="txtOpenSansRomanBold32WhiteA700"
                >
                  Omarion
                </Text>
              </div>
              <div className="flex flex-1 flex-col gap-4 items-center justify-start w-full">
                <Img
                  className="h-[200px] md:h-auto rounded-[50%] w-[200px]"
                  src="images/16.png"
                  alt="ellipseSeventySeven"
                />
                <Text
                  className="md:text-3xl sm:text-[28px] text-[32px] text-white-A700"
                  size="txtOpenSansRomanBold32WhiteA700"
                >
                  Omarion
                </Text>
              </div>
              <div className="flex flex-1 flex-col gap-4 items-center justify-start w-full">
                <Img
                  className="h-[200px] md:h-auto rounded-[50%] w-[200px]"
                  src="images/17.png"
                  alt="ellipseSeventySeven"
                />
                <Text
                  className="md:text-3xl sm:text-[28px] text-[32px] text-white-A700"
                  size="txtOpenSansRomanBold32WhiteA700"
                >
                  Omarion
                </Text>
              </div>


              <div className="flex flex-1 flex-col gap-4 items-center justify-start w-full">
                <Img
                  className="h-[200px] md:h-auto rounded-[50%] w-[200px]"
                  src="images/13.png"
                  alt="ellipseSeventySeven"
                />
                <Text
                  className="md:text-3xl sm:text-[28px] text-[32px] text-white-A700"
                  size="txtOpenSansRomanBold32WhiteA700"
                >
                  Omarion
                </Text>
              </div>
              <div className="flex flex-1 flex-col gap-4 items-center justify-start w-full">
                <Img
                  className="h-[200px] md:h-auto rounded-[50%] w-[200px]"
                  src="images/14.png"
                  alt="ellipseSeventySeven"
                />
                <Text
                  className="md:text-3xl sm:text-[28px] text-[32px] text-white-A700"
                  size="txtOpenSansRomanBold32WhiteA700"
                >
                  Omarion
                </Text>
              </div>
              <div className="flex flex-1 flex-col gap-4 items-center justify-start w-full">
                <Img
                  className="h-[200px] md:h-auto rounded-[50%] w-[200px]"
                  src="images/15.png"
                  alt="ellipseSeventySeven"
                />
                <Text
                  className="md:text-3xl sm:text-[28px] text-[32px] text-white-A700"
                  size="txtOpenSansRomanBold32WhiteA700"
                >
                  Omarion
                </Text>
              </div>
              <div className="flex flex-1 flex-col gap-4 items-center justify-start w-full">
                <Img
                  className="h-[200px] md:h-auto rounded-[50%] w-[200px]"
                  src="images/16.png"
                  alt="ellipseSeventySeven"
                />
                <Text
                  className="md:text-3xl sm:text-[28px] text-[32px] text-white-A700"
                  size="txtOpenSansRomanBold32WhiteA700"
                >
                  Omarion
                </Text>
              </div>
              <div className="flex flex-1 flex-col gap-4 items-center justify-start w-full">
                <Img
                  className="h-[200px] md:h-auto rounded-[50%] w-[200px]"
                  src="images/17.png"
                  alt="ellipseSeventySeven"
                />
                <Text
                  className="md:text-3xl sm:text-[28px] text-[32px] text-white-A700"
                  size="txtOpenSansRomanBold32WhiteA700"
                >
                  Omarion
                </Text>
              </div>


              <div className="flex flex-1 flex-col gap-4 items-center justify-start w-full">
                <Img
                  className="h-[200px] md:h-auto rounded-[50%] w-[200px]"
                  src="images/13.png"
                  alt="ellipseSeventySeven"
                />
                <Text
                  className="md:text-3xl sm:text-[28px] text-[32px] text-white-A700"
                  size="txtOpenSansRomanBold32WhiteA700"
                >
                  Omarion
                </Text>
              </div>
              <div className="flex flex-1 flex-col gap-4 items-center justify-start w-full">
                <Img
                  className="h-[200px] md:h-auto rounded-[50%] w-[200px]"
                  src="images/14.png"
                  alt="ellipseSeventySeven"
                />
                <Text
                  className="md:text-3xl sm:text-[28px] text-[32px] text-white-A700"
                  size="txtOpenSansRomanBold32WhiteA700"
                >
                  Omarion
                </Text>
              </div>
              <div className="flex flex-1 flex-col gap-4 items-center justify-start w-full">
                <Img
                  className="h-[200px] md:h-auto rounded-[50%] w-[200px]"
                  src="images/15.png"
                  alt="ellipseSeventySeven"
                />
                <Text
                  className="md:text-3xl sm:text-[28px] text-[32px] text-white-A700"
                  size="txtOpenSansRomanBold32WhiteA700"
                >
                  Omarion
                </Text>
              </div>
              <div className="flex flex-1 flex-col gap-4 items-center justify-start w-full">
                <Img
                  className="h-[200px] md:h-auto rounded-[50%] w-[200px]"
                  src="images/16.png"
                  alt="ellipseSeventySeven"
                />
                <Text
                  className="md:text-3xl sm:text-[28px] text-[32px] text-white-A700"
                  size="txtOpenSansRomanBold32WhiteA700"
                >
                  Omarion
                </Text>
              </div>
              <div className="flex flex-1 flex-col gap-4 items-center justify-start w-full">
                <Img
                  className="h-[200px] md:h-auto rounded-[50%] w-[200px]"
                  src="images/17.png"
                  alt="ellipseSeventySeven"
                />
                <Text
                  className="md:text-3xl sm:text-[28px] text-[32px] text-white-A700"
                  size="txtOpenSansRomanBold32WhiteA700"
                >
                  Omarion
                </Text>
              </div>

              <div className="flex flex-1 flex-col gap-4 items-center justify-start w-full">
                <Img
                  className="h-[200px] md:h-auto rounded-[50%] w-[200px]"
                  src="images/13.png"
                  alt="ellipseSeventySeven"
                />
                <Text
                  className="md:text-3xl sm:text-[28px] text-[32px] text-white-A700"
                  size="txtOpenSansRomanBold32WhiteA700"
                >
                  Omarion
                </Text>
              </div>
              <div className="flex flex-1 flex-col gap-4 items-center justify-start w-full">
                <Img
                  className="h-[200px] md:h-auto rounded-[50%] w-[200px]"
                  src="images/14.png"
                  alt="ellipseSeventySeven"
                />
                <Text
                  className="md:text-3xl sm:text-[28px] text-[32px] text-white-A700"
                  size="txtOpenSansRomanBold32WhiteA700"
                >
                  Omarion
                </Text>
              </div>
              <div className="flex flex-1 flex-col gap-4 items-center justify-start w-full">
                <Img
                  className="h-[200px] md:h-auto rounded-[50%] w-[200px]"
                  src="images/15.png"
                  alt="ellipseSeventySeven"
                />
                <Text
                  className="md:text-3xl sm:text-[28px] text-[32px] text-white-A700"
                  size="txtOpenSansRomanBold32WhiteA700"
                >
                  Omarion
                </Text>
              </div>
              <div className="flex flex-1 flex-col gap-4 items-center justify-start w-full">
                <Img
                  className="h-[200px] md:h-auto rounded-[50%] w-[200px]"
                  src="images/16.png"
                  alt="ellipseSeventySeven"
                />
                <Text
                  className="md:text-3xl sm:text-[28px] text-[32px] text-white-A700"
                  size="txtOpenSansRomanBold32WhiteA700"
                >
                  Omarion
                </Text>
              </div>
              <div className="flex flex-1 flex-col gap-4 items-center justify-start w-full">
                <Img
                  className="h-[200px] md:h-auto rounded-[50%] w-[200px]"
                  src="images/17.png"
                  alt="ellipseSeventySeven"
                />
                <Text
                  className="md:text-3xl sm:text-[28px] text-[32px] text-white-A700"
                  size="txtOpenSansRomanBold32WhiteA700"
                >
                  Omarion
                </Text>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default CreatorsPage;
