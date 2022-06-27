import Logo from '@components/Logo'
import { NextComponentType } from 'next'
import React from 'react'
import FooterCol from './FooterCol'

const Footer: NextComponentType = () => {
	return (
		<footer id='footer'>
			<div className='footer__inside container'>
				<div className='footer-colum'>
					<Logo />
					<p className='footer-restourant-description'>
						Грильница — сеть ресторанов быстрого питания. Доставляем
						качественную и вкусную еду, предлагая высокое качество <br />
						за приемлемую цену.
					</p>
				</div>
				<FooterCol
					items={[
						{
							title: 'Компания',
							nav: [
								{
									title: 'О нас',
									href: '/',
								},
								{
									title: 'Рестораны',
									href: '/',
								},
							],
						},
						{
							title: 'Партнерам',
							nav: [
								{
									title: 'Франшиза',
									href: '/',
								},
								{
									title: 'Аренда',
									href: '/',
								},
								{
									title: 'Снабжение',
									href: '/',
								},
							],
						},
						{
							title: 'Карьера',
							nav: [
								{
									title: 'Стать тайным покупателем',
									href: '/',
								},
								{
									title: 'Работа в Грильнице',
									href: '/',
								},
							],
						},
						{
							title: 'Контакты',
							nav: [
								{
									title: 'Контроль качества',
									href: '/',
								},
								{
									title: '8 (800) 100-82-90',
									href: '88001008290',
									type: 'phone',
								},
								{
									title: '+7 (3852) 50-50-65',
									href: '+73852505065',
									type: 'phone',
								},
							],
						},
						{
							title: 'Документы',
							nav: [
								{
									title: 'Публичная оферта',
									href: '/',
								},
								{
									title: 'Соглашение',
									href: '/',
								},
							],
						},
					]}
				/>
			</div>
		</footer>
	)
}

export default Footer
