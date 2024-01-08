import React from "react";
import { CheckBox } from "components";

export default {
  title: "expertex_550_s_application1/CheckBox",
  component: CheckBox,
};

export const SampleCheckbox = (args) => <CheckBox {...args} />;

SampleCheckbox.args = {
  shape: "round",
  color: "purple_A100",
  variant: "fill",
  label: "Checkbox",
  inputClassName: "mr-1",
};
