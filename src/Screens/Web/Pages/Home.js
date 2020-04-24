import React from 'react'
import { Banner, Hero } from '../Components'
import '../../../styles.css'

const Home = () => {
	return (
		<div style={{ flex: 1 }} >
			<div>
				<div class="header">T R I A D K U B E</div>
			</div>

			<div className='hero' >
				<div className='hero-section' >
					<Hero />
				</div>

				<div className='hero-section' >
					<Banner />
				</div>
			</div>
		</div>
	)
}

export { Home }