import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import Experience from "./Experience";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
	title: "Experience",
	component: Experience,
	// parameters: {
	// 	// Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
	// 	layout: "centered",
	// },
	// This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
	tags: ["autodocs"],
	// // More on argTypes: https://storybook.js.org/docs/api/argtypes
	// argTypes: {
	// 	backgroundColor: { control: "color" },
	// },
	// // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
	// args: { onClick: fn() },
} satisfies Meta<typeof Experience>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
	args: {
		exp: {
			title: (
				<span>
					Roblox Corporation, Music Team &mdash; Senior Software
					Engineer
				</span>
			),
			startDate: new Date(),
			description:
				"Labore eu et ut reprehenderit tempor laboris ullamco dolor sunt aliqua consequat. Duis pariatur commodo sit reprehenderit est dolor et eu mollit id incididunt consectetur nulla. Excepteur veniam non fugiat cillum cupidatat ad deserunt adipisicing. Qui anim sint sunt amet eiusmod et sint proident fugiat tempor laborum.",
			projects: [
				{
					name: "Project 1",
					url: "https://www.example.com/",
					startDate: new Date(),
					endDate: new Date(),
				},
				{
					name: "Project 2",
					url: "https://www.example.com/",
					startDate: new Date(),
					endDate: new Date(),
				},
			],
		},
	},
};
