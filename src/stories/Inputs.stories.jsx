import React from "react";

import { Input } from "components";

export default {
  title: "expertex_550_s_application1/Input",
  component: Input,
};

export const SampleInput = (args) => <Input {...args} />;
SampleInput.args = {
  shape: "round",
  color: "white_A700",
  size: "sm",
  variant: "outline",
  wrapClassName: "w-[300px]",
  className: "w-full",
  placeholder: "placeholder",
};
