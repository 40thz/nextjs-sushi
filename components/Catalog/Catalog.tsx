import Title from '@components/Title/Title'
import { NextComponentType } from 'next'
import React from 'react'
import Cart from './Cart/Cart'

const Catalog: NextComponentType = () => {
	return (
		<section id='catalog'>
			<Title value='Наше меню' />

			<div className='container'>
				<div className='catalog-items'>
					<Cart />
					<Cart />
					<Cart />
					<Cart />
					<Cart />
					<Cart />
					<Cart />
					<Cart />
				</div>
			</div>
		</section>
	)
}

export default Catalog
