import type { Meta, StoryObj } from "@storybook/react";

import Headline from "./Headline";

const meta = {
	component: Headline,
} satisfies Meta<typeof Headline>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {};
