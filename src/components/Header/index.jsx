import React from "react";

import { Button, Img, Text } from "components";

const Header = (props) => {
  return (
    <>
      <header className={props.className}>
        <Img
          className="h-[79px] sm:h-auto object-cover w-[12%] md:w-full"
          src="images/img_kokotv2.png"
          alt="kokotvTwo"
        />
        <ul className="flex sm:flex-col flex-row sm:hidden items-start justify-center md:ml-[0] ml-[290px] md:mt-0 my-[27px] w-[34%] md:w-full common-row-list">
          <li>
            <div className="flex flex-row gap-2 items-center justify-center">
              <Img
                className="h-[22px] w-[22px]"
                src="images/img_frame.svg"
                alt="frame"
              />
              <Text
                className="text-base text-white-A700 w-auto"
                size="txtOpenSansRomanRegular16"
              >
                Home
              </Text>
            </div>
          </li>
          <li>
            <div className="flex flex-row gap-2 items-center justify-center ml-[34px]">
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
          </li>
          <li>
            <div className="flex flex-row gap-2 items-center justify-center ml-9">
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
          </li>
          <li>
            <div className="flex flex-row gap-2 items-center justify-center ml-9">
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
          </li>
        </ul>
        <Img
          className="h-[18px] md:ml-[0] ml-[203px] md:mt-0 my-[30px] w-[18px]"
          src="images/img_search_white_a700.svg"
          alt="search_One"
        />
        <Button
          className="cursor-pointer flex items-center justify-center min-w-[190px] md:ml-[0] ml-[50px] md:mt-0 my-[18px]"
          leftIcon={
            <Img
              className="h-[22px] mb-px mr-2.5"
              src="images/img_bipersonfill.svg"
              alt="bi:person-fill"
            />
          }
          shape="round"
          color="purple_A100"
          size="xs"
          variant="fill"
        >
          <div className="font-bold font-opensans text-base text-center">
            Sign Up / Login
          </div>
        </Button>
      </header>
    </>
  );
};

Header.defaultProps = {};

export default Header;
