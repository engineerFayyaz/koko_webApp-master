import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Img, Line, List, Text } from "components";
import Header from "components/Header";

const CreatorsTypePage = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="bg-gray-900 flex flex-col font-opensans items-center justify-start mx-auto p-1.5 shadow-bs w-full">
        <div className="flex flex-col gap-[54px] items-center justify-start max-w-[1376px] mb-[46px] mx-auto md:px-5 w-full">
          <Header className="flex md:flex-col flex-row md:gap-5 items-center justify-center w-full" />
          <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-[93%] md:w-full">
            <Img
              className="h-[217px] md:h-auto md:mt-0 mt-[290px] object-cover"
              src="images/img_kokotv2.png"
              alt="kokotvOne"
            />
            <Line className="bg-white-A700_75 md:h-0.5 h-[885px] w-0.5 md:w-full" />
            <div className="flex flex-col gap-10 justify-start md:mt-0 mt-[29px]">
              <Text
                className="ml-28 md:ml-[0] md:text-3xl sm:text-[28px] text-[32px] text-white-A700"
                size="txtOpenSansRomanBold32WhiteA700"
              >
                What type of creator are you?
              </Text>
              <div className="flex sm:flex-col flex-row font-nunitosans sm:gap-[50px] items-center justify-between w-full">
                <List
                  className="sm:flex-1 sm:flex-col flex-row gap-[50px] grid sm:grid-cols-1 grid-cols-2 w-[72%] sm:w-full"
                  orientation="horizontal"
                >
                  <div className="flex flex-col gap-[15px] items-start justify-start sm:ml-[0] w-full">
                    <div className="border border-solid border-white-A700 flex flex-row gap-5 items-center justify-between sm:px-5 px-[30px] py-[13px] rounded-[5px] w-[131px]">
                      <div className="border-2 border-purple-A100 border-solid h-2 rounded-[50%] w-2"></div>
                      <Text
                        className="text-sm text-white-A700 w-auto"
                        size="txtNunitoSansRegular14"
                      >
                        Gamer
                      </Text>
                    </div>
                    <div className="border border-solid border-white-A700 flex flex-row gap-5 items-center justify-between sm:px-5 px-[30px] py-[13px] rounded-[5px] w-[174px]">
                      <div className="border-2 border-purple-A100 border-solid h-2 rounded-[50%] w-2"></div>
                      <Text
                        className="text-sm text-white-A700 w-auto"
                        size="txtNunitoSansRegular14"
                      >
                        Food Vlogger
                      </Text>
                    </div>
                    <div className="border border-solid border-white-A700 flex flex-row gap-5 items-center justify-between sm:px-5 px-[30px] py-[13px] rounded-[5px] w-[181px]">
                      <div className="border-2 border-purple-A100 border-solid h-2 rounded-[50%] w-2"></div>
                      <Text
                        className="text-sm text-white-A700 w-auto"
                        size="txtNunitoSansRegular14"
                      >
                        Travel Vlogger
                      </Text>
                    </div>
                    <div className="border border-solid border-white-A700 flex flex-row gap-5 items-center justify-between sm:px-5 px-[30px] py-[13px] rounded-[5px] w-[118px]">
                      <div className="border-2 border-purple-A100 border-solid h-2 rounded-[50%] w-2"></div>
                      <Text
                        className="text-sm text-white-A700 w-auto"
                        size="txtNunitoSansRegular14"
                      >
                        Chef
                      </Text>
                    </div>
                    <div className="border border-solid border-white-A700 flex flex-row gap-5 items-center justify-between sm:px-5 px-[30px] py-[13px] rounded-[5px] w-[124px]">
                      <div className="border-2 border-purple-A100 border-solid h-2 rounded-[50%] w-2"></div>
                      <Text
                        className="text-sm text-white-A700 w-auto"
                        size="txtNunitoSansRegular14"
                      >
                        Artist
                      </Text>
                    </div>
                    <div className="border border-solid border-white-A700 flex flex-row gap-5 items-center justify-between sm:px-5 px-[30px] py-[13px] rounded-[5px] w-[151px]">
                      <div className="border-2 border-purple-A100 border-solid h-2 rounded-[50%] w-2"></div>
                      <Text
                        className="text-sm text-white-A700 w-auto"
                        size="txtNunitoSansRegular14"
                      >
                        Comedian
                      </Text>
                    </div>
                    <div className="border border-solid border-white-A700 flex flex-row gap-5 items-center justify-between sm:px-5 px-[30px] py-[13px] rounded-[5px] w-[184px]">
                      <div className="border-2 border-purple-A100 border-solid h-2 rounded-[50%] w-2"></div>
                      <Text
                        className="text-sm text-white-A700 w-auto"
                        size="txtNunitoSansRegular14"
                      >
                        Event Producer
                      </Text>
                    </div>
                    <div className="border border-solid border-white-A700 flex flex-row gap-5 items-center justify-between sm:px-5 px-[30px] py-[13px] rounded-[5px] w-[151px]">
                      <div className="border-2 border-purple-A100 border-solid h-2 rounded-[50%] w-2"></div>
                      <Text
                        className="text-sm text-white-A700 w-auto"
                        size="txtNunitoSansRegular14"
                      >
                        Influencer
                      </Text>
                    </div>
                    <div className="border border-solid border-white-A700 flex flex-row gap-5 items-center justify-between sm:px-5 px-[30px] py-[13px] rounded-[5px] w-[140px]">
                      <div className="border-2 border-purple-A100 border-solid h-2 rounded-[50%] w-2"></div>
                      <Text
                        className="text-sm text-white-A700 w-auto"
                        size="txtNunitoSansRegular14"
                      >
                        Muscian
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col gap-[15px] items-start justify-start sm:ml-[0] w-full">
                    <div className="border border-solid border-white-A700 flex flex-row gap-5 items-center justify-between sm:px-5 px-[30px] py-[13px] rounded-[5px] w-[199px]">
                      <div className="border-2 border-purple-A100 border-solid h-2 rounded-[50%] w-2"></div>
                      <Text
                        className="text-sm text-white-A700 w-auto"
                        size="txtNunitoSansRegular14"
                      >
                        Product Reviewer
                      </Text>
                    </div>
                    <div className="border border-solid border-white-A700 flex flex-row gap-5 items-center justify-between sm:px-5 px-[30px] py-[13px] rounded-[5px] w-[133px]">
                      <div className="border-2 border-purple-A100 border-solid h-2 rounded-[50%] w-2"></div>
                      <Text
                        className="text-sm text-white-A700 w-auto"
                        size="txtNunitoSansRegular14"
                      >
                        Brands
                      </Text>
                    </div>
                    <div className="border border-solid border-white-A700 flex flex-row gap-5 items-center justify-between sm:px-5 px-[30px] py-[13px] rounded-[5px] w-[127px]">
                      <div className="border-2 border-purple-A100 border-solid h-2 rounded-[50%] w-2"></div>
                      <Text
                        className="text-sm text-white-A700 w-auto"
                        size="txtNunitoSansRegular14"
                      >
                        Coach
                      </Text>
                    </div>
                    <div className="border border-solid border-white-A700 flex flex-row gap-5 items-center justify-between sm:px-5 px-[30px] py-[13px] rounded-[5px] w-[169px]">
                      <div className="border-2 border-purple-A100 border-solid h-2 rounded-[50%] w-2"></div>
                      <Text
                        className="text-sm text-white-A700 w-auto"
                        size="txtNunitoSansRegular14"
                      >
                        Craftsperson
                      </Text>
                    </div>
                    <div className="border border-solid border-white-A700 flex flex-row gap-5 items-center justify-between sm:px-5 px-[30px] py-[13px] rounded-[5px] w-[138px]">
                      <div className="border-2 border-purple-A100 border-solid h-2 rounded-[50%] w-2"></div>
                      <Text
                        className="text-sm text-white-A700 w-auto"
                        size="txtNunitoSansRegular14"
                      >
                        Teacher
                      </Text>
                    </div>
                    <div className="border border-solid border-white-A700 flex flex-row gap-5 items-center justify-between sm:px-5 px-[30px] py-[13px] rounded-[5px] w-[197px]">
                      <div className="border-2 border-purple-A100 border-solid h-2 rounded-[50%] w-2"></div>
                      <Text
                        className="text-sm text-white-A700 w-auto"
                        size="txtNunitoSansRegular14"
                      >
                        Fitness Instructor
                      </Text>
                    </div>
                    <div className="border border-solid border-white-A700 flex flex-row gap-5 items-center justify-between sm:px-5 px-[30px] py-[13px] rounded-[5px] w-[127px]">
                      <div className="border-2 border-purple-A100 border-solid h-2 rounded-[50%] w-2"></div>
                      <Text
                        className="text-sm text-white-A700 w-auto"
                        size="txtNunitoSansRegular14"
                      >
                        Maker
                      </Text>
                    </div>
                    <div className="border border-solid border-white-A700 flex flex-row gap-5 items-center justify-between sm:px-5 px-[30px] py-[13px] rounded-[5px] w-[151px]">
                      <div className="border-2 border-purple-A100 border-solid h-2 rounded-[50%] w-2"></div>
                      <Text
                        className="text-sm text-white-A700 w-auto"
                        size="txtNunitoSansRegular14"
                      >
                        Podcaster
                      </Text>
                    </div>
                    <div className="border border-solid border-white-A700 flex flex-row gap-5 items-center justify-between sm:px-5 px-[30px] py-[13px] rounded-[5px] w-[129px]">
                      <div className="border-2 border-purple-A100 border-solid h-2 rounded-[50%] w-2"></div>
                      <Text
                        className="text-sm text-white-A700 w-auto"
                        size="txtNunitoSansRegular14"
                      >
                        Writer
                      </Text>
                    </div>
                  </div>
                </List>
                <div className="border border-solid border-white-A700 flex flex-row gap-5 items-center justify-between sm:px-5 px-[30px] py-[13px] rounded-[5px] w-[125px]">
                  <div className="border-2 border-purple-A100 border-solid h-2 rounded-[50%] w-2"></div>
                  <Text
                    className="text-sm text-white-A700 w-auto"
                    size="txtNunitoSansRegular14"
                  >
                    Other
                  </Text>
                </div>
              </div>
              <Button
                className="cursor-pointer font-extrabold font-nunitosans leading-[normal] mx-auto rounded-md text-center text-lg w-[420px]"
                color="purple_A100"
                size="sm"
                variant="fill"
                onClick={() => navigate("/home1")}
              >
                Confirm
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreatorsTypePage;
