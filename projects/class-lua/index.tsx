import { Project } from "@/app/types";
import Image from "next/image";
import React from "react";
import afterImage from "./images/after.png";
import beforeImage from "./images/before.png";
import thumbnail from "./images/thumbnail.jpg";

const project: Project = {
	title: "class()",
	subtitle: "A super simple approach to making classes in Roblox",
	slug: "class",
	authorDate: new Date(2017, 1, 28),
	releaseDate: new Date(2016, 0),
	type: "Code",
	thumbnail: thumbnail,
	url: "https://github.com/vocksel/class.lua",
	description: (
		<>
			<p>
				While Lua has support for OOP, their implementation is not the
				easiest to work with. Unlike other languages, there is no{" "}
				<code>class</code> keyword. What Lua uses instead are{" "}
				<code>metatables</code>, which can be confusing to work with for
				even seasoned Lua programmers. Every class definition comes with
				a heap of overhead because of the work you have to do with
				metatables. To fix this, I made a simple function that abstracts
				away the metatable overhead, which makes class definitions
				easier to parse and reason about.
			</p>

			<div className={"columns"}>
				<div className={"column"}>
					<h2>Before (Metatables)</h2>

					<Image src={beforeImage} alt="" />
				</div>

				<div className={"column"}>
					<h2>
						After (<code>class()</code>)
					</h2>

					<Image src={afterImage} alt="" />
				</div>
			</div>
		</>
	),
};

export default project;
