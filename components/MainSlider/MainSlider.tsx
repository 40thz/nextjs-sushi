import { NextComponentType } from 'next'
import React from 'react'
import Slider from 'react-slick'
import SliderImg from '@img/MainSlider/Slider.jpeg'
import Image from 'next/image'
import Arrows from './Arrows'

const MainSlider: NextComponentType = () => {
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000,
		nextArrow: <Arrows type='next' />,
		prevArrow: <Arrows type='prev' />,
	}

	return (
		<Slider {...settings}>
			<div className='item'>
				<Image layout='responsive' src={SliderImg} />
			</div>
			<div className='item'>
				<Image layout='responsive' src={SliderImg} />
			</div>
			<div className='item'>
				<Image layout='responsive' src={SliderImg} />
			</div>
			<div className='item'>
				<Image layout='responsive' src={SliderImg} />
			</div>
			<div className='item'>
				<Image layout='responsive' src={SliderImg} />
			</div>
			<div className='item'>
				<Image layout='responsive' src={SliderImg} />
			</div>
			<div className='item'>
				<Image layout='responsive' src={SliderImg} />
			</div>
			<div className='item'>
				<Image layout='responsive' src={SliderImg} />
			</div>
			<div className='item'>
				<Image layout='responsive' src={SliderImg} />
			</div>
			<div className='item'>
				<Image layout='responsive' src={SliderImg} />
			</div>
		</Slider>
	)
}

export default MainSlider
