import React from 'react'
import CartItem from '../CartItem/CartItem'

type Props = {
	active: boolean
}
const CartDropDown = ({ active }: Props) => {
	return (
		<>
			{active && (
				<div className='cartDropDown'>
					<CartItem />
				</div>
			)}
		</>
	)
}

export default CartDropDown
