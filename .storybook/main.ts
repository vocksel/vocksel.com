import type { StorybookConfig } from "@storybook/experimental-nextjs-vite";
import path from "path";

const config: StorybookConfig = {
	stories: [
		"../app/**/*.mdx",
		"../app/**/*.stories.@(js|jsx|mjs|ts|tsx)",
		"../components/**/*.mdx",
		"../components/**/*.stories.@(js|jsx|mjs|ts|tsx)",
	],
	addons: [
		"@storybook/addon-essentials",
		"@storybook/addon-onboarding",
		"@chromatic-com/storybook",
		"@storybook/experimental-addon-test",
	],
	framework: {
		name: "@storybook/experimental-nextjs-vite",
		options: {},
	},
	staticDirs: ["../public"],
	async viteFinal(config) {
		return {
			...config,
			resolve: {
				alias: {
					"@": path.resolve(__dirname, "../"),
				},
			},
		};
	},
};
export default config;
