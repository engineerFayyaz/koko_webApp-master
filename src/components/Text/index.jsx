import React from "react";

const sizeClasses = {
  txtOpenSansRomanExtraBold100: "font-extrabold font-opensans",
  txtOpenSansRomanBold16WhiteA700: "font-bold font-opensans",
  txtNunitoSansRegular14: "font-normal font-nunitosans",
  txtPoppinsBold30: "font-bold font-poppins",
  txtOpenSansRomanBold16Gray100: "font-bold font-opensans",
  txtPoppinsRegular10: "font-normal font-poppins",
  txtOpenSansRomanBold16: "font-bold font-opensans",
  txtOpenSansRomanRegular20: "font-normal font-opensans",
  txtInterRegular22: "font-inter font-normal",
  txtOpenSansRomanRegular16WhiteA70090: "font-normal font-opensans",
  txtNunitoSansBold14: "font-bold font-nunitosans",
  txtRobotoBold20: "font-bold font-roboto",
  txtOpenSansRomanBold32: "font-bold font-opensans",
  txtOpenSansRomanSemiBold18: "font-opensans font-semibold",
  txtOpenSansRomanBold80: "font-bold font-opensans",
  txtNunitoSansRegular14Gray100: "font-normal font-nunitosans",
  txtPoppinsBold20: "font-bold font-poppins",
  txtOpenSansRomanRegular16: "font-normal font-opensans",
  txtInterBold32: "font-bold font-inter",
  txtOpenSansRomanBold32WhiteA700: "font-bold font-opensans",
  txtOpenSansRomanSemiBold14: "font-opensans font-semibold",
  txtOpenSansRomanSemiBold12: "font-opensans font-semibold",
  txtOpenSansRomanRegular16Gray100: "font-normal font-opensans",
  txtNunitoSansRegular18: "font-normal font-nunitosans",
  txtCatamaranRomanSemiBold12: "font-catamaran font-semibold",
  txtPoppinsRegular20Gray100: "font-normal font-poppins",
  txtOpenSansRomanExtraBold50: "font-extrabold font-opensans",
  txtPoppinsRegular20: "font-normal font-poppins",
  txtOpenSansRomanBold20: "font-bold font-opensans",
  txtOpenSansRomanBold32Gray100: "font-bold font-opensans",
  txtInterRegular18: "font-inter font-normal",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
