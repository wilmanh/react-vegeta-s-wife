import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@chromatic-com/storybook",
    "@storybook/experimental-addon-test",
    "@storybook/addon-links",
    "@storybook/addon-interactions",
  ],
  docs: {},
  // typescript: {
  //   check: false,
  //   reactDocgen: "react-docgen",
  //   reactDocgenTypescriptOptions: {
  //     include: ["**/**.tsx"],
  //     shouldExtractLiteralValuesFromEnum: true,
  //     skipChildrenPropWithoutDoc: false,
  //     shouldRemoveUndefinedFromOptional: true,
  //     tsconfigPath: "./tsconfig.app.json",
  //     compilerOptions: {
  //       allowSyntheticDefaultImports: false,
  //       esModuleInterop: false,
  //     },
  //     propFilter: () => true,
  //   },
  // },
  typescript: {
    reactDocgen: "react-docgen-typescript",
    reactDocgenTypescriptOptions: {
      include: ["../../../packages/horizon/src/**/*.{ts,tsx}"],
      tsconfigPath: "../tsconfig.app.json",
      compilerOptions: {
        allowSyntheticDefaultImports: false,
        esModuleInterop: false,
      },
      shouldExtractLiteralValuesFromEnum: true,
      shouldRemoveUndefinedFromOptional: true,
    },
  },
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
};
export default config;
