import type { Meta, StoryObj } from "@storybook/react";

import Experience from "./Experience";

const meta = {
	component: Experience,
	args: {
		exp: {
			id: "sample",
			title: (
				<span>
					Roblox Corporation, Music Team &mdash; Senior Software
					Engineer
				</span>
			),
			startDate: new Date(),
			description:
				"Labore eu et ut reprehenderit tempor laboris ullamco dolor sunt aliqua consequat. Duis pariatur commodo sit reprehenderit est dolor et eu mollit id incididunt consectetur nulla. Excepteur veniam non fugiat cillum cupidatat ad deserunt adipisicing. Qui anim sint sunt amet eiusmod et sint proident fugiat tempor laborum.",
		},
	},
} satisfies Meta<typeof Experience>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {};
