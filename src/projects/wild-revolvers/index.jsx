import classNames from 'classnames';
import React from 'react';
import { ProjectType } from 'types';
import { TwitterTweetEmbed } from 'react-twitter-embed';
import thumbnail from './outpost/013.png';
import bulma from 'bulma.scss';

export default {
	title: 'Wild Revolvers',
	subtitle: 'An analysis of Roblox\'s beloved action packed western shooter.',
	slug: 'wild-revolvers',
	authorDate: new Date(2019, 11, 11),
	releaseDate: new Date(2017, 7),
	type: ProjectType.Game,
	thumbnail: thumbnail,
	url: 'https://www.roblox.com/games/983224898/Wild-Revolvers',
	description: (
		<React.Fragment>
			<p>In June of 2017, I was approached by Novaly Studios to work as a level designer for a western shooter focused around revolvers—aptly named Wild Revolvers. The game’s core premise was simple: an arcade shooter with one-shot kills. Upon release, the game soured to the front page of Roblox, topping out around 16k concurrent users where it stayed at the #2 spot. Wild Revolvers consists of 5 core levels and a lobby that I created over 3 months. The levels serve as the game’s battlegrounds, while the lobby is a place to hang out during intermission and trade revolver skins with each other.</p>

			<p>Since its release, it has gained quite a bit of notoriety, and is still tweeted occasionally by Roblox to their 1.3 million followers.</p>

			<div className={bulma.columns}>
				<div className={classNames(bulma.column, bulma['is-half'])}>
					<TwitterTweetEmbed tweetId='1155145823824560135' options={{ theme: 'dark' }}/>
				</div>

				<div className={classNames(bulma.column, bulma['is-half'])}>
					<TwitterTweetEmbed tweetId='1020039549215420416' options={{ theme: 'dark' }}/>
				</div>
			</div>

			<h2 id='level-design'>My Jobs</h2>

			<p>My work consisted of handling everything to do with the in-game world. From levels, to lobbies, to incorporating new assets from other developers, and managing existing assets at the request of others. I was given a lot of creative freedom for each map, and was left to my own devices to come up with new themes and designs and execute them to completion. I typically prefer a more hands-off approach, so this worked great for me. Mojave was the first map I created, and I drew a lot of inspiration from mesas for it. It has an above ground plateau as well as tunnels underneath, which allow players to sneak behind others that are camping out. It was a hit from the start and is one of the more iconic maps.</p>

			<figure>
				<img src={require('./mojave/066.png').default} />
				<figcaption>Aerial view of Mojave.</figcaption>
			</figure>

			<p>I drew a lot of inspiration from <a href='https://store.steampowered.com/app/265630/Fistful_of_Frags/'>Fistful of Frags</a> during my time working on Wild Revolvers, as it has similar gameplay to what we were aiming for. Particularly in the sense of being a western arcade shooter. Prior to Wild Revolvers, I had never designed maps for a shooter, so in the process of creating the maps I used games like Fistful of Frags and CS:GO as inspiration for what a shooter map could look and feel like. Mojave was an example of where this worked well, and the same can be said for Outpost, which consisted of various elevation changes and different avenues for player’s to attack from. Two of the other maps, Depot and Farm, were not as beloved but still held up as quality maps to play on.</p>

			<figure>
				<img src={require('./outpost/019.png').default} />
				<figcaption>Another look at Outpost, showcasing one of its routes that the user can take.</figcaption>
			</figure>

			<p>A month after release in October, I was brought on as a programmer for the game. Our main programmer was swamped with schoolwork, and we needed help to keep up with the game’s popularity, especially around the holidays. Being dumped into a fully released product with its own share of tech debt, and understanding its intricacies so I could interact with it was a lot to take in initially. Wild Revolvers taught me a lot about working with an existing codebase, seeing how code flows from the entry points down through the codebase, and how to reason about that flow.</p>

			<p>I primarily worked on bugfixes, adding new gun skins,  and general maintenance. However I did add several features, such as spectating,  support for VIP servers, and daily rewards. I also rewrote our code for the CTF gamemode from the ground up, as we were having several consistency issues with it. The whole process taught me a lot about how to work in codebases other than my own, as well as managing perfectionist tendencies. We had updates we needed to get out the door, so we had to take shortcuts occasionally.</p>

			<figure>
				<img src={require('./canyon/2017-12-09 15.50.37.png').default} />
				<figcaption>Another view of Canyon, highlighting a little fishing shack and covered bridge.</figcaption>
			</figure>

			<h2 id='problem-areas'>Problem Areas</h2>

			<p>One of my biggest regrets is a lack of greyboxing and testing. I focused primarily on the aesthetics of the various maps without thinking too much about playability. This resulted in some maps having a large disparity in terms of how fun they were. If instead I had designed the layout of the maps as a greybox—no details or aesthetics, just the rough layout—and then had those layouts thoroughly tested and iterated on, Wild Revolvers could have been significantly more enjoyable overall.</p>

			<p>The most glaring example of a lack of planning was with Canyon. I spent most of my time focused around the idea of a huge bridge cutting through a town in a canyon, that I didn’t think much about how the map would play. Because of this, soon after the game’s release we decided that Canyon needed a rework, as it was very easy for players to kill each other from across the map, and overall was not fun to play.</p>

			<figure>
				<img src={require('./canyon/2017-08-08 21.02.38.png').default} />
				<figcaption>The first iteration of Canyon, notice the lack of elevation throughout the map.</figcaption>
			</figure>

			<p>The way the map was designed lead to players feeling like they died unfairly, and it was also hard to navigate. Canyon was designed to have two pathways that players take most often, creating chokepoints. With the old map, it was easy for these spots to be camped and resulted in deaths that didn’t feel warranted. The rework consisted of cutting off line of sight that crossed the entire map, along with changing around elevation and making the map overall easier to navigate. This helped significantly and put Canyon in a better place, however with proper greyboxing and testing, this rework might have been avoided from the start.</p>

			<figure>
				<img src={require('./canyon/2017-12-09 15.49.34.png').default} />
				<figcaption>Showcasing the newest iteration of Canyon with its elevated center island.</figcaption>
			</figure>

			<h2 id='game-design'>Game Design</h2>

			<p>One of the best decisions that was made for the game was the addition of a double jump. Initially I criticized the idea because it seemed out of place for a western shooter, however giving the user the option of vertical movement was a massive boon for the game. This feature enhanced the feeling of the game being arcadey and fast paced, which is exactly what we were going for. When playing the game myself, this is still one of my favorite additions because of all the possibilities of movement around the map it allows. It’s also just cool to see cowboys flipping around midair while firing at each other.</p>

			<figure>
				<img src={require('./farm/032.png').default} />
				<figcaption>Farm map, featuring the barn and various boards that make paths to move along.</figcaption>
			</figure>

			<p>Due to the game being played primarily in third-person, with the camera over the player’s shoulder, some players developed interesting strategies around this. One of these was the strategy of hiding behind cover, peering over in third-person, and jumping to one-shot somebody before they have time to react. While this is ultimately very unfair to the person being shot, it is an interesting example of players working with their surroundings. If the game were forced into first-person, this strategy couldn’t exist. As well, if the guns didn’t kill in one hit, this strategy would likely be less viable. You would still be able to pick people off over time, but users would have better odds of getting away from someone camping a particular spot and taking potshots at them.</p>

			<h2 id='events'>Events</h2>

			<p>For Halloween and Christmas of 2017, I was tasked with modifying the maps to feature spooky and festive props for each event. It was fun to get to revisit the levels after the fact and reflect on what I had created. Decorating the maps with various props and ambient lighting was a nice change of pace as well.</p>

			<figure>
				<img src={require('./farm-spooky.png').default} />
				<figcaption>Spooky version of the Farm map.</figcaption>
			</figure>

			<p>When I was younger, one of my favorite things to see on Roblox was games changing their appearance to match the season. It really helped cement in my kid brain that it was Christmas, or Halloween, or Easter, or some other holiday. It was always super exciting for me to see all my favorite games updated with special events, so I hope Wild Revolvers doing the same brought some joy to the kids that played it.</p>

			<figure>
				<img src={require('./saloon-holiday.png').default} />
				<figcaption>A holiday version of the lobby, featuring string lights and a festive tree.</figcaption>
			</figure>

			<h2 id='conclusion'>Conclusion</h2>

			<p>Despite any shortcomings, the work I did was super fun and was an incredibly valuable learning experience. It also resulted in a quality product that users are still enjoying to this day. Each map has a unique theme separating it from the others, and the art direction of the game comes together cohesively, creating a recognizable look for Wild Revolvers. Roblox still occasionally tweets about Wild Revolvers to their 1.3 million followers, which I think acts as a testament to the game being a staple of arcade shooters on the platform.</p>

			<p>Now giddy on up an git, ride off into your sunset pardner. Yeehaw 🤠</p>

			<img src={require('./lobby/021.png').default} />
		</React.Fragment>
	)
};
