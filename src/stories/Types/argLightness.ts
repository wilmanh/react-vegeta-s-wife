import { Args, ArgTypes } from "@storybook/react-vite";

export const argLightness: Partial<ArgTypes<Args>> = {
  dark: { control: "boolean" },
  light: { control: "boolean" },
};
