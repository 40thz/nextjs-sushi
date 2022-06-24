import Image from 'next/image'
import React from 'react'

import shawerma from '@img/shawerma.png'

const CartItem = () => {
	return (
		<div className='cartItem'>
			<div className='cartItem-image'>
				<Image width='48' height='48' src={shawerma} />
			</div>
			<div className='cartItem-elem title'>Грильяс Нежный</div>
		</div>
	)
}

export default CartItem
