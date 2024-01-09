import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Img, Line, List, Switch, Text } from "components";

const Header = (props) => {
  const navigate = useNavigate();
  const [activeLink, setActiveLink] = useState(null);

  const handleLinkClick = (path, index) => {
    navigate(path);
    setActiveLink(index);
  };
  return (
    <>
      <header className={`${props.className} justify-between px-[30px]`}>
        <Img
          className="h-[100%] sm:h-auto object-cover w-[15%] md:w-full"
          src="images/img_kokotv2.png"
          alt="kokotvTwo"
          onClick={() => handleLinkClick("/home1", 0)}

        />
        <ul className="flex sm:flex-col flex-row sm:hidden items-start justify-center md:ml-[0] ml-[20px]        md:mt-0 my-[27px] w-[40%] md:w-full common-row-list">
          <li>
          <div
              className={`flex flex-row gap-2 items-center justify-center ${
                activeLink === 0 ? 'text-purple-A100' : 'text-white-A700'
              }`}
              onClick={() => handleLinkClick("/home1", 0)}
            >
              <Img
                className="h-[22px] w-[22px]"
                src="images/img_frame.svg"
                alt="frame"
              />
              <Text
                className="text-base text-white-A700 w-auto"
                size="txtOpenSansRomanRegular16"
                onClick={() => navigate("/home1")}
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
                onClick={() => navigate("/movies")}
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
                onClick={() => navigate("/tvshow")}
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
                onClick={() => navigate("/creators")}

              >
                Creators
              </Text>
            </div>
          </li>
        </ul>
        <div className="flex items-center gap-[20px]">
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
              onClick={() => navigate("/homemenu")}
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


          {/* <div className="absolute bg-gray-900_02 flex flex-col items-start justify-end p-4 right-[1%] top-[8%] w-[21%]">
            <Text
              className="md:ml-[0] ml-[33px] mt-1 text-base text-white-A700"
              size="txtOpenSansRomanRegular16"
              onClick={() => navigate("/profile")}
            >
              Profile
            </Text>
            <Text
              className="md:ml-[0] ml-[33px] mt-[26px] text-base text-white-A700"
              size="txtOpenSansRomanRegular16"
              onClick={() => navigate("/watchlist")}
            >
              Wishlist
            </Text>
            <Text
              className="md:ml-[0] ml-[33px] mt-[25px] text-base text-white-A700"
              size="txtOpenSansRomanRegular16"
              onClick={() => navigate("/notification")}
            >
              Notification
            </Text>
            <div className="flex flex-col items-center justify-start md:ml-[0] ml-[30px] mt-[26px] w-[78%] md:w-full">
              <div className="flex flex-row gap-[35px] items-center justify-between w-full">
                <Text
                  className="text-base text-white-A700"
                  size="txtOpenSansRomanRegular16"
                >
                  Email Notification
                </Text>
                <Switch
                  onColor="#d9d9d9"
                  offColor="#d9d9d9"
                  onHandleColor="#f41b3b"
                  offHandleColor="#f41b3b"
                  value={true}
                  className=""
                />
              </div>
            </div>
            <div className="flex flex-col items-center justify-start md:ml-[0] ml-[33px] mt-7">
              <Text
                className="text-base text-white-A700"
                size="txtOpenSansRomanRegular16"
              >
                Language
              </Text>
            </div>
            <a
              href="javascript:"
              className="md:ml-[0] ml-[33px] mt-6 text-base text-white-A700"
              onClick={() => navigate("/contact")}
            >
              <Text size="txtOpenSansRomanRegular16">Contact Us</Text>
            </a>
            <a
              href="javascript:"
              className="md:ml-[0] ml-[33px] mt-[27px] text-base text-white-A700"
              onClick={() => navigate("/")}
            >
              <Text size="txtOpenSansRomanRegular16">Log Out</Text>
            </a>
          </div> */}
      </header>
    </>
  );
};

Header.defaultProps = {};

export default Header;
