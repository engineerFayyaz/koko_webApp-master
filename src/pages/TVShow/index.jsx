import React from "react";
import { useNavigate } from "react-router-dom";

import { Button, Img, List, PagerIndicator, RatingBar, Text } from "components";
import Header from "components/Header";
import Footer from "components/Footer";
import Banner from "components/banner";
import Featured from "components/Featured";
import Trending from "components/Trending";

const MoviesPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-gray-900 flex flex-col font-opensans items-center justify-start mx-auto py-1.5 shadow-bs w-full">
        <div className="flex flex-col items-center justify-start mb-[15px] w-full">

        <Header className="flex md:flex-col flex-row md:gap-5 items-center justify-center w-full" />


        <Banner />


          <div className="flex flex-col items-start justify-start max-w-[1932px] mt-[49px] mx-auto md:px-5 w-full">
            <List
              className="flex flex-col gap-[50px] items-center w-full"
              orientation="vertical"
            >
           <Featured />
              <Trending />

              <div className="flex flex-1 flex-col gap-[37px] justify-start my-0 w-full">
                <Text
                  className="md:ml-[0] ml-[10px] text-[40px] text-base text-gray-100"
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
                className="md:ml-[0] ml-[10px] text-[40px] text-base text-gray-100"
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
                  className="md:ml-[0] ml-[10px] text-[40px] text-base text-gray-100"
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
                  className="md:ml-[0] ml-[10px] text-[40px] text-base text-gray-100"
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
                  className="md:ml-[0] ml-[10px] text-[40px] text-base text-gray-100"
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
                  className="md:ml-[0] ml-[10px] text-[40px] text-base text-gray-100"
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
                  className="md:ml-[0] ml-[10px] text-[40px] text-base text-gray-100"
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
                  className="md:ml-[0] ml-[10px] text-[40px] text-base text-gray-100"
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
                  className="md:ml-[0] ml-[10px] text-[40px] text-base text-gray-100"
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
                  className="md:ml-[0] ml-[10px] text-[40px] text-base text-gray-100"
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
                  className="md:ml-[0] ml-[10px] text-[40px] text-base text-gray-100"
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
                    className="md:ml-[0] ml-[10px] text-[40px]  text-base text-gray-100"
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
           <Footer  />
          </div>
        </div>
      </div>
    </>
  );
};

export default MoviesPage;
