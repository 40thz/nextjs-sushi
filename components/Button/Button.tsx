import React from 'react'
type Props = {
	name: string
	to?: string
}

const Button = ({ name, to }: Props) => {
	return <button className='button'>{name}</button>
}

export default Button
