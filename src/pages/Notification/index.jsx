import React from "react";

import { Button, Img, Line, List, Text } from "components";

const NotificationPage = () => {
  return (
    <>
      <div className="bg-gray-900 flex flex-col font-opensans items-center justify-start mx-auto py-1.5 shadow-bs w-full">
        <div className="flex flex-col items-center justify-start mb-[71px] w-full">
          <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start max-w-[1384px] mx-auto md:px-5 w-full">
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
          <div className="flex flex-col items-center justify-start mt-[55px] md:px-5">
            <Text
              className="md:text-3xl sm:text-[28px] text-[32px] text-gray-100"
              size="txtOpenSansRomanBold32Gray100"
            >
              Notifications
            </Text>
          </div>
          <div className="flex flex-col gap-[21px] items-center justify-start mt-[33px] w-full">
            <List
              className="flex flex-col gap-5 items-center w-full"
              orientation="vertical"
            >
              <div className="flex flex-1 flex-col gap-5 items-center justify-start my-0 w-full">
                <div className="flex sm:flex-col flex-row md:gap-10 items-center justify-between max-w-[1370px] mx-auto md:px-5 w-full">
                  <Text
                    className="text-gray-100 text-xl"
                    size="txtOpenSansRomanRegular20"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit.Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit.Lorem
                  </Text>
                  <Text
                    className="text-base text-white-A700_90"
                    size="txtOpenSansRomanRegular16WhiteA70090"
                  >
                    21/10/21 8:34 pm
                  </Text>
                </div>
                <Line className="bg-gray-100 h-px w-full" />
              </div>
              <div className="flex flex-1 flex-col gap-5 items-center justify-start my-0 w-full">
                <div className="flex sm:flex-col flex-row md:gap-10 items-center justify-between max-w-[1370px] mx-auto md:px-5 w-full">
                  <Text
                    className="text-gray-100 text-xl"
                    size="txtOpenSansRomanRegular20"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit.Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit.Lorem
                  </Text>
                  <Text
                    className="text-base text-white-A700_90"
                    size="txtOpenSansRomanRegular16WhiteA70090"
                  >
                    21/10/21 8:34 pm
                  </Text>
                </div>
                <Line className="bg-gray-100 h-px w-full" />
              </div>
              <div className="flex flex-1 flex-col gap-5 items-center justify-start my-0 w-full">
                <div className="flex sm:flex-col flex-row md:gap-10 items-center justify-between max-w-[1370px] mx-auto md:px-5 w-full">
                  <Text
                    className="text-gray-100 text-xl"
                    size="txtOpenSansRomanRegular20"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit.Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit.Lorem
                  </Text>
                  <Text
                    className="text-base text-white-A700_90"
                    size="txtOpenSansRomanRegular16WhiteA70090"
                  >
                    21/10/21 8:34 pm
                  </Text>
                </div>
                <Line className="bg-gray-100 h-px w-full" />
              </div>
              <div className="flex flex-1 flex-col gap-5 items-center justify-start my-0 w-full">
                <div className="flex sm:flex-col flex-row md:gap-10 items-center justify-between max-w-[1370px] mx-auto md:px-5 w-full">
                  <Text
                    className="text-gray-100 text-xl"
                    size="txtOpenSansRomanRegular20"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit.Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit.Lorem
                  </Text>
                  <Text
                    className="text-base text-white-A700_90"
                    size="txtOpenSansRomanRegular16WhiteA70090"
                  >
                    21/10/21 8:34 pm
                  </Text>
                </div>
                <Line className="bg-gray-100 h-px w-full" />
              </div>
              <div className="flex flex-1 flex-col gap-5 items-center justify-start my-0 w-full">
                <div className="flex sm:flex-col flex-row md:gap-10 items-center justify-between max-w-[1370px] mx-auto md:px-5 w-full">
                  <Text
                    className="text-gray-100 text-xl"
                    size="txtOpenSansRomanRegular20"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit.Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit.Lorem
                  </Text>
                  <Text
                    className="text-base text-white-A700_90"
                    size="txtOpenSansRomanRegular16WhiteA70090"
                  >
                    21/10/21 8:34 pm
                  </Text>
                </div>
                <Line className="bg-gray-100 h-px w-full" />
              </div>
              <div className="flex flex-1 flex-col gap-5 items-center justify-start my-0 w-full">
                <div className="flex sm:flex-col flex-row md:gap-10 items-center justify-between max-w-[1370px] mx-auto md:px-5 w-full">
                  <Text
                    className="text-gray-100 text-xl"
                    size="txtOpenSansRomanRegular20"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit.Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit.Lorem
                  </Text>
                  <Text
                    className="text-base text-white-A700_90"
                    size="txtOpenSansRomanRegular16WhiteA70090"
                  >
                    21/10/21 8:34 pm
                  </Text>
                </div>
                <Line className="bg-gray-100 h-px w-full" />
              </div>
              <div className="flex flex-1 flex-col gap-5 items-center justify-start my-0 w-full">
                <div className="flex sm:flex-col flex-row md:gap-10 items-center justify-between max-w-[1370px] mx-auto md:px-5 w-full">
                  <Text
                    className="text-gray-100 text-xl"
                    size="txtOpenSansRomanRegular20"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit.Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit.Lorem
                  </Text>
                  <Text
                    className="text-base text-white-A700_90"
                    size="txtOpenSansRomanRegular16WhiteA70090"
                  >
                    21/10/21 8:34 pm
                  </Text>
                </div>
                <Line className="bg-gray-100 h-px w-full" />
              </div>
              <div className="flex flex-1 flex-col gap-5 items-center justify-start my-0 w-full">
                <div className="flex sm:flex-col flex-row md:gap-10 items-center justify-between max-w-[1370px] mx-auto md:px-5 w-full">
                  <Text
                    className="text-gray-100 text-xl"
                    size="txtOpenSansRomanRegular20"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit.Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit.Lorem
                  </Text>
                  <Text
                    className="text-base text-white-A700_90"
                    size="txtOpenSansRomanRegular16WhiteA70090"
                  >
                    21/10/21 8:34 pm
                  </Text>
                </div>
                <Line className="bg-gray-100 h-px w-full" />
              </div>
              <div className="flex flex-1 flex-col gap-5 items-center justify-start my-0 w-full">
                <div className="flex sm:flex-col flex-row md:gap-10 items-center justify-between max-w-[1370px] mx-auto md:px-5 w-full">
                  <Text
                    className="text-gray-100 text-xl"
                    size="txtOpenSansRomanRegular20"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit.Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit.Lorem
                  </Text>
                  <Text
                    className="text-base text-white-A700_90"
                    size="txtOpenSansRomanRegular16WhiteA70090"
                  >
                    21/10/21 8:34 pm
                  </Text>
                </div>
                <Line className="bg-gray-100 h-px w-full" />
              </div>
              <div className="flex flex-1 flex-col gap-5 items-center justify-start my-0 w-full">
                <div className="flex sm:flex-col flex-row md:gap-10 items-center justify-between max-w-[1370px] mx-auto md:px-5 w-full">
                  <Text
                    className="text-gray-100 text-xl"
                    size="txtOpenSansRomanRegular20"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit.Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit.Lorem
                  </Text>
                  <Text
                    className="text-base text-white-A700_90"
                    size="txtOpenSansRomanRegular16WhiteA70090"
                  >
                    21/10/21 8:34 pm
                  </Text>
                </div>
                <Line className="bg-gray-100 h-px w-full" />
              </div>
            </List>
            <div className="flex flex-col items-center justify-start max-w-[1370px] mx-auto md:px-5 w-full">
              <div className="flex sm:flex-col flex-row md:gap-10 items-center justify-between w-full">
                <Text
                  className="text-gray-100 text-xl"
                  size="txtOpenSansRomanRegular20"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem
                  ipsum dolor sit amet, consectetur adipiscing elit.Lorem
                </Text>
                <Text
                  className="text-base text-white-A700_90"
                  size="txtOpenSansRomanRegular16WhiteA70090"
                >
                  21/10/21 8:34 pm
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotificationPage;