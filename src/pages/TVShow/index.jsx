import React from "react";
import { useNavigate } from "react-router-dom";


import { Button, Img, List, PagerIndicator, RatingBar, Text } from "components";

const TVShowPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-gray-900 flex flex-col font-opensans items-center justify-start mx-auto py-1.5 shadow-bs w-full">
        <div className="flex flex-col items-center justify-start mb-[15px] w-full">

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
                   className="text-base text-white-A700 w-auto"
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
                  className="text-base text-purple-A100 w-auto"
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


          <div className="h-[514px] md:h-[529px] mt-[90px] md:px-5 relative w-full">
            <Img
              className="h-[514px] m-auto object-cover w-full"
              src="images/6.png"
              alt="lucifersOne"
            />
            <div className="absolute bottom-[2%] flex flex-col md:gap-10 gap-[65px] justify-start right-[2%] w-[57%]">
              <div className="flex flex-col items-center justify-start w-full">
                <div className="flex flex-col items-end justify-start w-full">
                  <Text
                    className="text-base text-gray-100 text-right"
                    size="txtOpenSansRomanBold16Gray100"
                  >
                    Marvel’s
                  </Text>
                  <Text
                    className="mr-[18px] mt-3.5 sm:text-[40px] md:text-[46px] text-[50px] text-gray-100 text-right"
                    size="txtOpenSansRomanExtraBold50"
                  >
                    Venom 2: Let There be Carnage
                  </Text>
                  <div className="flex flex-row gap-[53px] items-start justify-end w-[41%] md:w-full">
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
                  <div className="flex flex-row font-poppins gap-5 items-center justify-end mt-[17px] w-[31%] md:w-full">
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
                  <Text
                    className="mt-2.5 text-gray-100 text-xl w-[88%] sm:w-full"
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
              <PagerIndicator
                className="flex h-6 ml-8 md:ml-[0] w-[194px]"
                count={6}
                activeCss="inline-block cursor-pointer rounded-[50%] h-6 border-gray-100 border-2 border-solid bg-gray-100 w-6"
                activeIndex={1}
                inactiveCss="inline-block cursor-pointer rounded-[50%] h-6 border-gray-100 border-2 border-solid w-6"
                selectedWrapperCss="inline-block md:ml-[0] mx-[5.00px] sm:ml-[0]"
                unselectedWrapperCss="inline-block md:ml-[0] mx-[5.00px] sm:ml-[0]"
              />
            </div>
          </div>


          <div className="flex flex-col items-start justify-start max-w-[1932px] mt-[49px] mx-auto md:px-5 w-full">
            <List
              className="flex flex-col gap-[50px] items-center w-full"
              orientation="vertical"
            >
              <div className="flex flex-1 flex-col gap-[39px] justify-start my-0 w-full">
                <Text
                  className="md:ml-[0] ml-[42px] text-base text-gray-100"
                  size="txtOpenSansRomanBold16Gray100"
                >
                  Featured
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
              <div className="flex flex-1 flex-col gap-[37px] justify-start my-0 w-full">
                <Text
                  className="md:ml-[0] ml-[42px] text-base text-gray-100"
                  size="txtOpenSansRomanBold16Gray100"
                >
                  Trending
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
              <div className="flex flex-1 flex-col gap-[37px] justify-start my-0 w-full">
                <Text
                  className="md:ml-[0] ml-[42px] text-base text-gray-100"
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
                className="md:ml-[0] ml-[42px] text-base text-gray-100"
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
                  className="md:ml-[0] ml-[42px] text-base text-gray-100"
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
                  className="md:ml-[0] ml-[42px] text-base text-gray-100"
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
                  className="md:ml-[0] ml-[42px] text-base text-gray-100"
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
                  className="md:ml-[0] ml-[42px] text-base text-gray-100"
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
                  className="md:ml-[0] ml-[42px] text-base text-gray-100"
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
                  className="md:ml-[0] ml-[42px] text-base text-gray-100"
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
                  className="md:ml-[0] ml-[42px] text-base text-gray-100"
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
                  className="md:ml-[0] ml-[42px] text-base text-gray-100"
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
                  className="md:ml-[0] ml-[42px] text-base text-gray-100"
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
              <footer className="flex flex-1 items-center justify-center w-full">
                <div className="flex flex-col gap-9 items-center justify-center w-full">
                  <Text
                    className="md:ml-[0] ml-[42px] mr-[1338px] text-base text-gray-100"
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
              </footer>
            </List>
            <div className="flex sm:flex-col flex-row font-opensans mt-[30px] gap-8 items-start justify-start w-[41%] md:w-full">
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
        </div>
      </div>
    </>
  );
};


export default TVShowPage;
