import { NextComponentType } from 'next'
import React from 'react'

const Search: NextComponentType = () => {
	const [value, setValue] = React.useState<string>('')
	return (
		<form className='search'>
			<input
				onChange={e => setValue(e.target.value)}
				value={value}
				type='text'
				placeholder='найти блюдо'
			/>
			<div onClick={() => console.log(value)} className='search-btn'>
				{!value ? (
					<svg viewBox='0 0 24 24' role='presentation'>
						<path d='M5 9.5C5 7.01472 7.01472 5 9.5 5C10.0523 5 10.5 4.55228 10.5 4C10.5 3.44772 10.0523 3 9.5 3C5.91015 3 3 5.91015 3 9.5C3 13.0899 5.91015 16 9.5 16C11.1069 16 12.5776 15.4169 13.7121 14.4507L14.9935 15.7321C14.9152 16.059 15.0036 16.4178 15.2588 16.673L18.6614 20.0756C19.0519 20.4661 19.6851 20.4661 20.0756 20.0756C20.4662 19.6851 20.4662 19.0519 20.0756 18.6614L16.673 15.2587C16.4048 14.9906 16.0222 14.9065 15.6823 15.0067L14.4216 13.746C15.4052 12.607 16 11.123 16 9.5C16 7.48117 15.0784 5.67673 13.6368 4.48611C13.2109 4.13443 12.5806 4.19455 12.229 4.62038C11.8773 5.04622 11.9374 5.67653 12.3632 6.02821C13.3646 6.85518 14 8.10295 14 9.5C14 11.9853 11.9853 14 9.5 14C7.01472 14 5 11.9853 5 9.5Z'></path>
					</svg>
				) : (
					<svg
						onClick={() => setValue('')}
						viewBox='0 0 24 24'
						role='presentation'
					>
						<path d='M17.7905 6.20955C17.978 6.39709 18.0834 6.65144 18.0834 6.91666C18.0834 7.18187 17.978 7.43623 17.7905 7.62376L13.4142 12L17.7905 16.3763C17.978 16.5639 18.0834 16.8182 18.0834 17.0834C18.0834 17.3487 17.978 17.603 17.7905 17.7905C17.603 17.9781 17.3486 18.0834 17.0834 18.0834C16.8182 18.0834 16.5638 17.9781 16.3763 17.7905L12 13.4143L7.62373 17.7905C7.4362 17.9781 7.18184 18.0834 6.91663 18.0834C6.65141 18.0834 6.39706 17.9781 6.20952 17.7905C6.02198 17.603 5.91663 17.3487 5.91663 17.0834C5.91663 16.8182 6.02198 16.5639 6.20952 16.3763L10.5858 12L6.20952 7.62376C6.02198 7.43623 5.91663 7.18187 5.91663 6.91666C5.91663 6.65144 6.02198 6.39709 6.20952 6.20955C6.39706 6.02201 6.65141 5.91666 6.91663 5.91666C7.18184 5.91666 7.4362 6.02201 7.62373 6.20955L12 10.5858L16.3763 6.20955C16.5638 6.02201 16.8182 5.91666 17.0834 5.91666C17.3486 5.91666 17.603 6.02201 17.7905 6.20955Z'></path>
					</svg>
				)}
			</div>
		</form>
	)
}

export default Search
