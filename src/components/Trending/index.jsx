import React from "react";
import { useNavigate } from "react-router-dom";
import {Img,Text} from "components";

const Trending = (props) =>{
const navigate = useNavigate;

return (

    <>
    <section>
    <div className="flex flex-1 flex-col gap-[37px] justify-start my-0 w-full">
                <Text
                  className="md:ml-[0] ml-[10px] text-[40px] text-base text-gray-100"
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
    </section>
    
    
    </>
)
};

Trending.defaultProps = {};
export default Trending;