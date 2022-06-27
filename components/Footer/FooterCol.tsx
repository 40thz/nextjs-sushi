import Link from 'next/link'
import React from 'react'

type Props = {
	items: {
		title: string
		nav: {
			title: string
			href: string
			type?: string
		}[]
	}[]
}

const FooterCol = ({ items }: Props) => {
	return (
		<>
			{items.map(item => (
				<div className='footer-colum'>
					<div className='footer-colum-title'>{item.title}</div>
					<nav className='footer-colum-nav'>
						{item.nav.map(link => {
							if (link.type === 'phone') {
								return (
									<a
										href={`tel:${link.href}`}
										className='footer-colum-nav-link'
									>
										{link.title}
									</a>
								)
							} else {
								return (
									<Link href={link.href}>
										<a className='footer-colum-nav-link'>{link.title}</a>
									</Link>
								)
							}
						})}
					</nav>
				</div>
			))}
		</>
	)
}

export default FooterCol
