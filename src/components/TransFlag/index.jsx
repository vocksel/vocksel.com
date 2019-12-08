// Needed to make a component for this so I could style it so it could be
// aligned properly in the footer.

import React from 'react';
import style from './style.scss';
import flag from './transflag.png';

const TransFlag = () => (
	<img src={flag} className={style.main} title={'I know the world is scary, but you\'re doing great <3'} alt='Trans Flag' />
);

export default TransFlag;
