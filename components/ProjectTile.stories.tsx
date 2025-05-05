import type { Meta, StoryObj } from "@storybook/react";

import thumbnail from "@/projects/wild-revolvers/outpost/013.jpg";
import ProjectTile from "./ProjectTile";

const meta = {
	component: ProjectTile,
} satisfies Meta<typeof ProjectTile>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {
		project: {
			slug: "project-slug",
			authorDate: new Date(),
			description: "Description",
			releaseDate: new Date(),
			subtitle: "Subtitle",
			thumbnail: thumbnail,
			title: "Title",
			type: "Game",
			url: "https://example.com",
		},
		slide: "x",
	},
};
