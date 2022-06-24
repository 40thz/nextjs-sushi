import React from 'react'

import CitySelector from './CitySelector/CitySelector'
import Navigation from './Navigation/Navigation'
import Logo from '@components/Logo'
import Search from './Search/Search'
import CartBtn from './CartBtn/CartBtn'

const Header = () => {
	return (
		<header id='header'>
			<div className='header__inside'>
				<div className='header__inside-head'>
					<div className='container-white'>
						<CitySelector />
						<Navigation
							menu={[
								{
									name: 'Акции',
									to: '/',
								},
								{
									name: 'О компании',
									to: '/',
								},
								{
									name: 'Доставка',
									to: '/',
								},
								{
									name: 'Франшиза',
									to: '/',
								},
								{
									name: 'Рестораны',
									to: '/',
								},
								{
									name: 'Контроль качества',
									to: '/',
								},
							]}
						/>
					</div>
				</div>

				<div style={{ width: '100%' }} className='container'>
					<div className='header__inside-body'>
						<Logo />
						<div className='header__inside-body-panel'>
							<div className='header__inside-body-phone'>
								<a href='tel:+73854777111'>+7 385 477 71 11</a>
							</div>
							<Search />
							<CartBtn />
						</div>
					</div>
				</div>
			</div>
		</header>
	)
}

export default Header
