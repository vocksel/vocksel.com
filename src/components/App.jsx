import React from 'react';
import style from './App.scss';

console.log(style.app);

const Keyword = ({ text }) => (
	<span className={style.keyword}>{text}</span>
);

const Orion = () => <Keyword text="Orion" />;

export default class App extends React.Component {
	render() {
		return (
			<div className={style.app}>
				<h1><Orion/>, the Banished Blade</h1>

				<p><Orion/> was the sworn blade to a royal family. She was born into a well off household, in which her father was a retired member of the royal guard. Over the years growing up, <Orion/> heard many stories of his heroism (most of it embellished), which lit a fire in her to follow the same path of protecting the royal family.</p>

				<p>She is a masterful dualist and avid magic user, casting spells that imbue her blade with varying elements to best suit the situation and strike down her current foe. Throughout her years of training she gained notoriety and quickly climbed the ranks, ending up as the appointed knight to the daughter of the king. However, somewhere along the lines, she was banished. Her memories of the past several years as a royal knight were forcibly erased. This included the death of her father. <Orion/> was deeply ingrained within the royal family’s private life, so much so that the king had concerns that family secrets would get out as a result of her banishment. As a preventative measure, her memories were erased. It was either that, or beheading. “Father be reasonable, erasure is far more humane,” cried the princess.</p>

				<p><Orion/> awakens in a haze, in an unfamiliar forest with no memory leading up to this point. The last thing she remembers is being knighted several years prior. She sees abstract shapes in her mind that she thinks represent faces. One of these faces makes her cry. To her side, she sees her blade. A longsword dubbed <Keyword text="Comet" />, which was given to her as a gift. She can’t remember from who. <Orion/> is the archetypical swordswoman—her sword acting as an extension of her body. Regardless of the magic used to erase her memories, this sword she remembers. <Orion/> vigorously trained her mind and body over her teenage years into young adulthood to be a protector, with the end goal of guarding the royal family with her life. Even with her memories gone, that innate desire to protect is still within her. But now, with no one to guard, she feels empty and lost. More lost than she feels in this strange, unfamiliar place.</p>

				<p>It’s been 2 years since she woke, however she only has clear memories of the last year. The year before that is sliced up into dreamlike uncertainty. The magic placed over her seems to have had a lasting effect that mangled her memories long after awakening. She remembers waking up as clear as when it happened, however everything after that point is hazy. Only recently have her memories started to solidify and stay with her, however she is now very doubtful of her own memory. <Orion/> now is wandering blade for hire, carrying out escort requests and guarding cargo being transported overseas from pirates. She thinks that if she keeps traveling, keeps guarding others, that something will come back to her, and she’ll remember what she lost.</p>

				<p><Orion/> is driven by the need to know what happened to her. She is trying desperately to get back to where she was so she can finally have closure—and to destroy the evil that forced her to forget what she cared so deeply for.</p>
			</div>
		);
	}
}
