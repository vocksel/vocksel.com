import React from 'react'
import { ProjectType } from 'types'
import YouTubeEmbed from 'components/YouTubeEmbed'
import thumbnail from './images/hub-trench.jpg'
import urls from 'urls'
import ImageSlider from 'components/ImageSlider'

const team = [
	{ name: 'Deepak Nair', role: 'Manager', url: 'https://www.linkedin.com/in/deepaknair3' },
	{ name: 'Rebecca Crose', role: 'Coordinator', url: 'https://www.linkedin.com/in/rebeccacrose' },
	{ name: 'Thomas', role: 'Lead', url: 'https://twitter.com/buildthomasRBX' },
	{ name: 'Sondre', role: 'Lead', url: 'https://twitter.com/mote_games' },
	{ name: 'Aaron', role: 'Animator', url: 'https://twitter.com/oniichhn' },
	{ name: 'Alice', role: 'Animator, particle artist', url: 'https://twitter.com/GunsBulletsRBLX' },
	{ name: 'Beeism', role: 'Level designer, 3D modeler', url: 'https://twitter.com/BeeismRblx' },
	{ name: 'Dawson', role: 'UI designer', url: 'https://www.linkedin.com/in/dawson-lee-4085ab193/' },
	{ name: 'Eryn', role: 'Programmer', url: 'https://twitter.com/evaeraevaera' },
	{ name: 'Kyle', role: 'Level designer', url: 'https://twitter.com/KyleRBX' },
	{ name: 'Mary', role: '3D modeler', url: 'https://twitter.com/Erythia_roblox' },
	{ name: 'Max', role: 'Data analyst', url: 'https://www.linkedin.com/in/max-vivier-7b355a91/' },
	{ name: 'Nic', role: 'Programmer', url: 'https://www.linkedin.com/in/nicolas-markham-ba81ab196/' },
	{ name: 'Paulius', role: 'Music composer', url: 'https://twitter.com/Director_1406' },
	{ name: 'Will', role: 'Artist' },
]

// Formats the team as an array of "Name (Role), " elements, ending with "and
// Name (Role)." so it reads nicely when rendered.
function getTeamNames() {
	return team.map((member, index) => {
		let name = member.name

		if (member.url) {
			name = <a key={index} href={member.url}>{name}</a>
		}

		let element = <span key={index}>{name} ({member.role})</span>

		if (index + 1 === team.length) {
			element = <span key={index}>and {element}.</span>
		} else {
			element = <span key={index}>{element}, </span>
		}

		return element
	})
}

export default {
	title: 'Aquaman: Home is Calling',
	subtitle: 'A retrospective on the creation of Roblox\'s Aquaman event.',
	slug: 'aquaman',
	authorDate: new Date(2019, 11, 22),
	startDate: new Date(2018, 6),
	releaseDate: new Date(2018, 10),
	type: ProjectType.Game,
	thumbnail: thumbnail,
	url: 'https://www.roblox.com/games/2056459358/City-of-Rolantis',
	description: <>
		<p>In July of 2018 I was subcontracted by <a href={urls.roblox}>Roblox</a> to work alongside others in developing an Aquaman branded game. This was part of a sponsorship from Warner Bros. to create a game to be released in the weeks prior to the premiere of <a href='https://www.imdb.com/title/tt1477834'>Aquaman (2018)</a>. Over its lifetime, the game received 8.7 million individual play sessions, and was publicized by both Roblox—on <a href='https://www.youtube.com/watch?v=UQZE-3t0wcM'>YouTube</a> and <a href='https://twitter.com/Roblox/status/1065024190875488256'>Twitter</a>—and the official <a href='https://twitter.com/aquamanmovie/status/1066390996915695616'>Aquaman movie twitter account</a>.</p>

		<YouTubeEmbed id='UQZE-3t0wcM' />

		<p>At the time of accepting the job, I was working as an Accelerator at Roblox, which is a 12 week program to collaborate with others and create a game in-house. Being an Accelerator is a full-time, paid internship, so taking on this additional project required me to juggle my day job, as well as the subcontract. All while actively meeting weekly deadlines for both.</p>

		<p>The game’s premise centered around three trials that the user had to complete. When the game released, each trial was locked until users completed a goal in accompanying games made by users on Roblox. There were three games in total, each one corresponding with one of the trials: <a href='https://www.roblox.com/games/2563455047/Bandit-Simulator'>Bandit Simulator</a>, <a href='https://www.roblox.com/games/1262182609/BOOGA-BOOGA-v-C1-42'>BOOGA BOOGA</a>, and <a href='https://www.roblox.com/games/1314126235/Feed-Your-Pets'>Feed Your Pets!</a>. By completing objectives in each game, users earned badges that granted them exclusive items, and contributed towards unlocking the next trial.</p>

		<ImageSlider images={[
			{ src: require('./images/aquaman-surveying.jpg').default, caption: 'Shot of the custom Aquaman rig supplied to us by Roblox.' },
			{ src: require('./images/aquaman-swimming.jpg').default, caption: '"How do robots work underwater?" you might be wondering. I was too afraid to ask.' },
		]} />

		<h2>The Team</h2>

		<p>The team was composed of 14 people in total, along with our manager who handled coordinating us for the sponsorship. We had two team leads who were programming for the game, as well as various other individuals that handled 3D modeling, programming, level design, music composition, animations, and artwork. I was one of the level designers and 3D modelers for the project. We spent four months from mid July to November working together on the game, with quite a bit of crunch time at the end when getting close to release.</p>

		<p>One of the biggest boons for productivity was regularly scheduled meetings. We met with each other remotely, every week at the least, and daily at the most. During our meetings, we discussed what needed to be focused on for the week, and assigned goals for each team member to complete before our next meeting. When we were in the final stretch and needed to make sure we were all actively coordinated with each other, daily meetings turned into a necessity. Meetings are one of the biggest influences over our effective collaboration, and since then I’ve had a massive appreciation for them.</p>

		<p>Our team was composed of the following amazing people: {getTeamNames()}</p>

		<h2>Creating the Trial of Power</h2>

		<p>My job on the team was to create the Trial of Power, one of the three trials that users would have to take on to complete the game. The trial was interesting to work on because it involved linear progression. Most of the levels I create are designed to be open ended with multiple avenues for the user to travel by. However, for the trial it made sense to railroad the player, as the hub was already an open world for them to explore.</p>

		<ImageSlider images={[
			{ src: require('./images/trial-entrance.jpg').default, caption: 'Entrance to the Trial of Power.' },
			{ src: require('./images/trial-glowy-trench.jpg').default, caption: 'A glowing trench that leads players to their first enemy encounter.' },
			{ src: require('./images/trial-chest-picking.jpg').default, caption: 'Players pick one of four chests in front of an imposing temple entrance to proceed.' },
			{ src: require('./images/trial-gate.jpg').default, caption: 'Players fight robots in this room to pass the gate.' },
			{ src: require('./images/trial-main-encounter.jpg').default, caption: 'The main encounter, where players fight several types of robots.' },
		]} />

		<p>The trial was designed to be akin to dungeons in games like The Legend of Zelda franchise, where the user follows a path and completes small objectives to progress. For me, this lead to the level feeling a lot more complete, as the user is given a clear path and a defined goal. As opposed to an open ended world where it is the user’s job to make their own story.</p>

		<p>My process was iterative and involved many tweaks and changes. I burned through several greyboxed designs before finally settling on what the trial is now. It took awhile for things to click into place, which I think is a byproduct of working with such an unfamiliar theme. What the team and I were all creating was thematically underwater, which means we had very different requirements than that of an overworld map. Coral instead of bushes, and seaweed instead of vines, for example.</p>

		<p>This was a fairly big hurdle for me, as not only did I need to think in a completely different set of props, I also needed to consider full 3D movement for the player. Normally, a player does not have much vertical movement to work with in the games I create, however for an Aquaman game, the user needs to be able to swim in any direction. Tricks in elevation that work well when the user only has a small jump would not work for this game, so it required me to think very differently from normal.</p>

		<ImageSlider images={[
			{ src: require('./images/trial-lever-room.jpg').default, caption: 'The bottom half of a spacious room containing a lever.' },
			{ src: require('./images/trial-lever.jpg').default, caption: 'Breaking rocks above the lever frees it from its cage, allowing the player to progress.' },
			{ src: require('./images/trial-hallway.jpg').default, caption: 'A small connecting hallway.' },
			{ src: require('./images/trial-last-encounter.jpg').default, caption: 'The last room containing enemies before the boss.' },
			{ src: require('./images/trial-boss.jpg').default, caption: 'The final room where players faced off against giant robots in a boss battle' },
		]} />

		<p>Throughout the project, I actively worked with the programmers on the team to bring everything together. This meant deciding where enemy spawn points would be placed throughout the trials and hub, as well as hooking up various game mechanics. Some of those mechanics included chests that the user could open for small rewards, rocks that could be destroyed, and switches that open doors. I did my best to be as responsive to the needs of the team as possible to incorporate their work so that development would flow smoothly. The last thing I wanted to do was be a blocker for someone.</p>

		<p>Despite our large team, there wasn’t much overlap between level designers, as we were mostly isolated to our own trials. Looking back I wish I had taken the initiative and gotten more involved with the team to collaborate and come up with new ideas, especially for my trial. I do appreciate that I can call the Trial of Power “mine,” as I was the sole person working it, however the more I work in teams, the more I see how many great and inspirational ideas others have. I’m becoming less and less interested in making something completely and totally mine, and more interested in working with amazing people to create something together.</p>

		<h2>Going Where I'm Needed</h2>

		<p>Our team was composed of many talented individuals, however for level design and 3D modeling specifically, we only had a few people that could accomplish what we needed. Because of this, I ended up wearing several hats, and helping out others on the team when they needed it.</p>

		<p>Our level designer for the hub map was swamped with work towards the end of development, as she was also in charge of making the third trial. To get everything done on time we needed extra resources allocated to the hub so that she could focus on finishing the trial. After I was done on my trial, I switched over and helped her out while we were all crunching to get the game out. I worked to expand out the terrain for the hub, fill in various spots that lacked props, and provide color and foliage in various places to make everything come alive.</p>

		<ImageSlider images={[
			{ src: require('./images/hub-spawn.jpg').default, caption: 'The enclosed room where player\'s spawn, which acts as a small tutorial' },
			{ src: require('./images/hub-trench.jpg').default, caption: 'Establishing shot of the trench that the player emerges out into after spawning.' },
			{ src: require('./images/hub-castle.jpg').default, caption: 'The imposing castle that looms over the spawn area.' },
			{ src: require('./images/hub-arena-entrance.jpg').default, caption: 'The entrance to the arena where players battle for exclusive items.' },
			{ src: require('./images/hub-pathway.jpg').default, caption: 'A pathway just off the spawn area, leading the player along to the second trial.' },
			{ src: require('./images/hub-trial-entrance.jpg').default, caption: 'Entrance to the second trial, surrounded by ruins.' },
		]} />

		<p>Working on the open-world hub was a much needed change of pace during crunch time, as it allowed me to collaborate with the other members of the team, and work on something using level design techniques I was more familiar with. This made working on it more relaxing which helped a lot with the amount of work we had to do towards the end.</p>

		<p>Another section of the game I was tasked with designing was the arena. After players completed all 3 trials, they were able to engage in PvP combat with each other in the arena, which allows them to use all the abilities they accumulated throughout the trials to fight for exclusive items. The arena was put together towards the end of development, within the last few weeks leading up to release. Because of this I didn’t have enough time to refine it to where I would have liked. Unfortunately with the time constraints we had, quality had to be sacrificed to get the game out the door.</p>

		<ImageSlider images={[
			{ src: require('./images/arena-establishing.jpg').default, caption: 'An establishing shot of the colluseum that players fought in.' },
			{ src: require('./images/arena-throne.jpg').default, caption: 'Aerial shot that showcases the covered throne.' },
			{ src: require('./images/arena-distance.jpg').default, caption: 'A look off into the arches and structures in the distance.' },
			{ src: require('./images/arena-ruins.jpg').default, caption: 'A shot of one of the spawn areas that players rush out from.' },
		]} />

		<h2>Conclusion</h2>

		<p>I've been on Roblox since 2008 and seen many different events on the platform over the years. It was a great experience to get to participate in one, and work with the team to create something that Roblox hasn’t seen before. It’s also just cool as hell that I can say I was a subcontractor for Warner Bros.</p>

		<p>The project actively challenged me as a creative and had me out of my comfort zone in several aspects. Combined with regular meetings and collaboration with the team, I feel like I’ve grown a lot as a person, both personally and professionally.</p>

		<figure>
			<img src={require('./images/glowy-chest.jpg').default} alt='A glowing treasure chest in a small, mossy alcove.'/>
			<figcaption>One of the many chests the user could open for loot.</figcaption>
		</figure>

		<p>If you're interested in checking out the game for yourself, you can find the link below. While the event is no longer active, you can play the game just like normal.</p>
	</>
}
