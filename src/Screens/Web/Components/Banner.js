import React, { useEffect } from 'react'
import anime from 'animejs/lib/anime.es.js';

const Banner = () => {

	const Mounted = true

	const initAnimations = () => {
		anime({
			targets: '.box',
			width: 330,
			height: 250,
		})

		anime({
			targets: '.worksContainer',
			opacity: 1
		})
	}

	const initToWebAnimations = () => {
		anime({
			targets: '.web-button',
			opacity: 1,
			loop: false,
			duration: 1000,
			direction: 'normal',
			easing: 'linear',
			fill: '#98ce00',
			strokeWidth: 0
		})
		anime({
			targets: '.webFrameLine',
			y1: 45,
			y2: 45,
			x2: 340,
			duration: 1000,
			direction: 'normal',
			// easing: 'linear'
		})

		anime({
			targets: '#work1',
			opacity: 1,
		})
	}

	const webToMobileAnimations = () => {
		anime({
			targets: '.webFrameLine',
			y1: 45,
			y2: 45,
			x1: 75,
			x2: 75,
			duration: 1000,
			direction: 'normal',
		})

		anime({
			targets: '.box',
			width: 200,
			height: 330,
			x: 75
		})

		anime({
			targets: '.web-button',
			cx: 175,
			fill: '#050505',
			r: 5
		})

		anime({
			targets: '.mobileFrameLine1',
			x1: 75,
			x2: 275,
		})

		anime({
			targets: '.mobileFrameLine2',
			x1: 75,
			x2: 275,
		})

		anime({
			targets: '.mobile-button',
			fill: '#F7F7FF',
			r: 15,
			strokeWidth: 2
		})

		anime({
			targets: '#work2',
			opacity: 1,
		})
	}

	const mobileToServerAnimations = () => {
		anime({
			targets: '.box',
			rx: 0,
			ry: 0
		})

		anime({
			targets: '.serverFrameLine',
			x2: 275,
		})

		anime({
			targets: '.mobileFrameLine2',
			y1: 92,
			y2: 92,
		})

		anime({
			targets: '.mobileFrameLine1',
			y1: 257,
			y2: 257,
		})

		anime({
			targets: '.web-button',
			r: 5,
			cx: 100,
			fill: '#98CE00',
			cy: (el, i, l) => {
				return 51 + (i * 82.5)
			}
		})

		anime({
			targets: '.mobile-button',
			r: 5,
			cx: 100,
			cy: 298,
			fill: '#98ce00',
			strokeWidth: 0,
		})

		anime({
			targets: '#work3',
			opacity: 1,
		})
	}

	const serverToInitAnimation = () => {
		anime({
			targets: '.web-button',
			cy: 30,
			cx: (el, i, l) => {
				return 25 + (i*20)
			},
			opacity: 0,
			r: 7,
		})

		anime({
			targets: '.box',
			x:10,
			y:10,
			rx:20,
			ry:20,
			width:0,
			height:0,
		})

		anime({
			targets: '.webFrameLine',
			x1:10,
			y1:45,
			x2:10,
			y2:45
		})

		anime({
			targets: '.mobile-button',
			cx:175,
			cy:315,
			r:0,
		})

		anime({
			targets: '.serverFrameLine',
			x1:75,
			y1:175,
			x2:75,
			y2:175,
		})

		anime({
			targets: '.mobileFrameLine2',
			x1:75,
			y1:45,
			x2:75,
			y2:45,
		})

		anime({
			targets: '.mobileFrameLine1',
			x1:75,
			y1:290,
			x2:75,
			y2:290,
		})

		anime({
			targets: '.works',
			duration: 1000,
			opacity: 0,
		})

		anime({
			targets: '.worksContainer',
			opacity: 0
		})
	}

	const bannerAnimations = () => {
		initAnimations()
		setTimeout(() => { initToWebAnimations() },1000)
		setTimeout(() => { webToMobileAnimations() }, 2500)
		setTimeout(() => { mobileToServerAnimations() }, 4000)
		setTimeout(() => { serverToInitAnimation() }, 5500)
	}

	useEffect(() => {
		bannerAnimations()
		setInterval(bannerAnimations, 7000)
	}, [Mounted])
	
	console.log('inside banner')
	return (
		<div>
			<div className='worksContainer' >
				<div style={{fontSize: '20px'}} >
					We do
				</div>
				<div style={{display: 'flex', flexDirection: 'column', position: 'relative'}} >
					<span id='work1' className='works' >Web & PWA Development</span>
					<span id='work2' className='works' >Mobile Application Development</span>
					<span id='work3' className='works' >Backend Development</span>
				</div>
			</div>
			
			<div>
				<svg width="350" height="350">
					<rect className='box' x="10" y="10" rx="20" ry="20" width="0" height="0" style={{fill:'none', stroke:'#30B7FB', strokeWidth:5, opacity:1}} />

					<g>
					<circle className='web-button' style={{opacity: 0}} cx="25" cy="30" r="7" stroke="#30B7FB" stroke-width="0" />

					<circle className='web-button' style={{opacity: 0}} cx="45" cy="30" r="7" stroke="#30B7FB" stroke-width="0" />

					<circle className='web-button' style={{opacity: 0}} cx="65" cy="30" r="7" stroke="#30B7FB" stroke-width="0" />
					</g>

					<line className='webFrameLine' x1="10" y1="45" x2="10" y2="45" style={{stroke:'#30B7FB', strokeWidth:5}} />

					<circle className='mobile-button' cx="175" cy="315" r="0" stroke="#30B7FB" stroke-width="2" fill="white" />

					<line className='serverFrameLine' x1="75" y1="175" x2="75" y2="175" style={{stroke:'#30B7FB', strokeWidth:5}} />

					<line className='mobileFrameLine2' x1="75" y1="45" x2="75" y2="45" style={{stroke:'#30B7FB', strokeWidth:5}} />

					<line className='mobileFrameLine1' x1="75" y1="290" x2="75" y2="290" style={{stroke:'#30B7FB', strokeWidth:5}} />
				</svg>
			</div>
		</div>
	)
}

export { Banner }