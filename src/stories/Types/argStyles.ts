import { Args, ArgTypes } from "@storybook/react";

export const argStyles: Partial<ArgTypes<Args>> = {
  outlined: { control: "boolean" },
  inverted: { control: "boolean" },
  rounded: { control: "boolean" },
  static: { control: "boolean" },
};
