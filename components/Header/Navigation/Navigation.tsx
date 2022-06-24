import Link from 'next/link'
import React from 'react'

import AuthBtn from './AuthBtn/AuthBtn'

type MenuProps = {
	menu: {
		name: string
		to: string
	}[]
}

const Navigation = ({ menu }: MenuProps) => {
	return (
		<nav className='header__navigation'>
			{menu.map(item => (
				<Link href={item.to}>
					<a>
						<li>{item.name}</li>
					</a>
				</Link>
			))}
			<AuthBtn />
		</nav>
	)
}

export default Navigation
