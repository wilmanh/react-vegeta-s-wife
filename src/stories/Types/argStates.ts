import { Args, ArgTypes } from "@storybook/react-vite";

export const argStates: Partial<ArgTypes<Args>> = {
  hover: { control: "boolean" },
  focus: { control: "boolean" },
  active: { control: "boolean" },
};
