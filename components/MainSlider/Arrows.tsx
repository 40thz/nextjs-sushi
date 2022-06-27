import React from 'react'
type Props = {
	className?: string
	style?: object
	onClick?: any
	type: string
}
const Arrows = ({ className, onClick, type }: Props) => {
	if (type === 'next') {
		return (
			<div className={`${className} arrow`} onClick={onClick}>
				<div className='icon'></div>
			</div>
		)
	} else {
		return (
			<div className={`${className} arrow`} onClick={onClick}>
				<div className='icon'></div>
			</div>
		)
	}
}

export default Arrows
