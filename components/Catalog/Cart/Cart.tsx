import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import ctalogImg from '@img/1.jpg'
type Props = {
	item?: Array<number>
}

const Cart = ({ item }: Props) => {
	return (
		<Link href={'/'}>
			<a className='ctalogCart'>
				<div className='ctalogCart-image'>
					<Image layout='responsive' src={ctalogImg} />
				</div>
				<p className='ctalogCart-title'>Шаурма</p>
			</a>
		</Link>
	)
}

export default Cart
