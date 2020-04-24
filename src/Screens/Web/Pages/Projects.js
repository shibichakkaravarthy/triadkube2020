import React from 'react'
import ReactCardCarousel from 'react-card-carousel';

import '../../../styles.css'
import ArumaiiPOS from '../Components/Images/ArumaiiPOS.png'
import MagnumBond from '../Components/Images/MagnumBond.png'
import MagnumPolish from '../Components/Images/MagnumPolish.png'

const Projects = () => {
	return (
		<div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center', padding: '10px', flex: 1 }} >
			<div style={{ padding: '20px' }} >
				<div className='services-title' >
					What we have Done
				</div>

				<div className="typing">
					Here you are, at our gallery
				</div>
			</div>			
			<div style={{ position: 'relative', height: '25vw' }} >
				<ReactCardCarousel autoplay={ true } autoplay_speed={ 2500 } spread='wide' >
					<div className='project-card' >
						<div className="project-title">Arumaii - POS</div>
					  	<div>Android App</div>
					  	<div className="ImgContainer">
							<img src={ArumaiiPOS} alt="" className="image"/>
						</div>
					</div>
					<div className='project-card' >
						<div className="project-title">Arumaii Selfie Contest</div>
						<div>Website</div>
					</div>
					<div className='project-card' >
						<div className="project-title">Magnum Bond</div>
						<div>Website</div>
						<div className="ImgContainer">
							<img src={MagnumBond} alt="" className="image"/>
						</div>
					</div>
					<div className='project-card' >
						<div className="project-title">Magnum Polish</div>
						<div>Website</div>
						<div className="ImgContainer">
							<img src={MagnumPolish} alt="" className="image"/>
						</div>
					</div>
					<div className='project-card' >
						<div className="project-title">Arumaii</div>
						<div>Website</div>
					</div>
				</ReactCardCarousel>
			</div>
		</div>
	)
}

export { Projects }