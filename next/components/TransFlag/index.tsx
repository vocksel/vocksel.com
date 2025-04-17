// Needed to make a component for this so I could style it so it could be
// aligned properly in the footer.

import Image from 'next/image'
import style from './style.scss'
import flag from './transflag.png'

export default function TransFlag() {
	return <Image src={flag} className={style.main} title={'I know the world is scary, but you\'re doing great <3'} alt='Trans Flag' />
}
