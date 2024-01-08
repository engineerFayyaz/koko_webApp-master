import React from "react";

import { Img, Text } from "components";

const Footer = (props) => {
  return (
    <>
      <footer className={props.className}>
        <div className="flex flex-col gap-4 items-center justify-center w-full">
          <Text
            className="md:ml-[0] ml-[42px] mr-[1110px] md:text-3xl sm:text-[28px] text-[32px] text-gray-100"
            size="txtOpenSansRomanBold32Gray100"
          >
            Related TV Shows
          </Text>
          <div className="flex flex-col items-center justify-start w-full">
            <div className="flex flex-col items-center justify-start w-full">
              <div className="flex md:flex-col flex-row gap-5 items-center justify-between w-full">
                <div className="md:flex-1 gap-5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 items-center justify-between w-[47%] md:w-full">
                  <Img
                    className="h-[300px] md:h-auto object-cover w-full"
                    src="images/img_faj2uifuuaul6u.png"
                    alt="faj2uifuuaul6u"
                  />
                  <Img
                    className="h-[300px] md:h-auto object-cover w-full"
                    src="images/img_mv5bntfinzblyme.png"
                    alt="mv5bntfinzblyme"
                  />
                  <Img
                    className="h-[300px] md:h-auto object-cover w-full"
                    src="images/img_yae6uvqijdn411.png"
                    alt="yae6uvqijdn411"
                  />
                </div>
                <div className="md:flex-1 gap-5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 items-center justify-center w-[47%] md:w-full">
                  <Img
                    className="h-[300px] md:h-auto object-cover w-full"
                    src="images/img_faj2uifuuaul6u.png"
                    alt="faj2uifuuaul6u_One"
                  />
                  <Img
                    className="h-[300px] md:h-auto object-cover w-full"
                    src="images/img_mv5bntfinzblyme.png"
                    alt="mv5bntfinzblyme_One"
                  />
                  <Img
                    className="h-[300px] md:h-auto object-cover w-full"
                    src="images/img_yae6uvqijdn411.png"
                    alt="yae6uvqijdn411_One"
                  />
                </div>
                <div className="flex md:flex-1 flex-col items-center justify-start w-[4%] md:w-full">
                  <Img
                    className="h-[300px] md:h-auto object-cover w-full"
                    src="images/img_faj2uifuuaul6u_300x52.png"
                    alt="faj2uifuuaul6u_Two"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

Footer.defaultProps = {};

export default Footer;
