import Link from 'next/link'
import { useCallback, useState } from 'react'
import { slide as Menu } from 'react-burger-menu'
import './BurgerMenu.module.scss'

// Everything going on with the state is to make the menu work with
// react-router-dom. Since the page isn't actually changing, we have to close
// the menu ourselves when a link is clicked.

export default function BurgerMenu() {
	const [isOpen, setIsOpen] = useState(false)

	const onStateChange = useCallback((state: { isOpen: boolean }) => {
		setIsOpen(state.isOpen)
	}, [])

	const closeMenu = useCallback(() => {
		setIsOpen(false)
	}, [])

	return (
		<Menu right
			isOpen={isOpen}
			onStateChange={onStateChange}
		>
			<Link onClick={() => closeMenu()} href='/'><i className='fas fa-home' /> Home</Link>
			<Link onClick={() => closeMenu()} href='/projects/'><i className='fas fa-heart' /> Projects</Link>
			<Link onClick={() => closeMenu()} href='/about/'><i className='fas fa-question-circle' /> About</Link>
		</Menu>
	)
}

