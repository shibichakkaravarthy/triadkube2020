import React, {useState} from 'react'
import { GoBrowser, GoDeviceMobile, GoRocket } from 'react-icons/go';
import { FaChartLine } from 'react-icons/fa'
import anime from 'animejs/lib/anime.es.js';


const Card = ({icon, title, children, currentPage}) => {
	console.log('currentPage', currentPage)

	if(currentPage === 'Services') {
		anime({
			targets: '.cardContainer',
			loop: false,
			duration: 300,
			delay: anime.stagger(100, { start: 700 }),
			keyframes: [
				{ translateY: -250 },
				{ translateY: 0 },
			]
		})
	}

	return (
		<div style={{ display: 'flex', flexDirection: 'row' }} >
			<div className='cardContainer' >
				<div className="cardIconContainer">
					<GoBrowser color='#30B7FB' size='3em' />

					<div className="cardTitleContainer">
						Web Development
					</div>

					<div className="cardContentContainer">
						For those that are out of the loop, you can think of an icon font as a grown-up version of dingbats…with an actual use-case.
					</div>
				</div>
			</div>

			<div className='cardContainer' >
				<div className="cardIconContainer">
					<GoDeviceMobile color='#30B7FB' size='3em' />

					<div className="cardTitleContainer">
						Mobile App Development
					</div>

					<div className="cardContentContainer">
						For those that are out of the loop, you can think of an icon font as a grown-up version of dingbats…with an actual use-case.
					</div>
				</div>
			</div>


			<div className='cardContainer' >
				<div className="cardIconContainer">
					<FaChartLine color='#30B7FB' size='3em' />

					<div className="cardTitleContainer">
						Business Development & Analytics Tools
					</div>

					<div className="cardContentContainer">
						For those that are out of the loop, you can think of an icon font as a grown-up version of dingbats…with an actual use-case.
					</div>
				</div>
			</div>

			<div className='cardContainer' >
				<div className="cardIconContainer">
					<GoRocket color='#30B7FB' size='3em' />

					<div className="cardTitleContainer">
						MVP Development and Support
					</div>

					<div className="cardContentContainer">
						For those that are out of the loop, you can think of an icon font as a grown-up version of dingbats…with an actual use-case.
					</div>
				</div>
			</div>
		</div>	
	)	
}

export { Card }