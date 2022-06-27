import React from 'react'

type Props = {
	value: string
}
const Title = ({ value }: Props) => {
	return <div className='title'>{value}</div>
}

export default Title
