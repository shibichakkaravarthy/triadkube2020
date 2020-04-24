import React, {useEffect, useRef, useState} from 'react'
import { Home, Services, Projects } from './Web/Pages'
import { MenuBar } from './Web/Components'
import { Element, scroller } from 'react-scroll'
import { disableBodyScroll } from 'body-scroll-lock';
import '../styles.css'

require('react-web-vector-icons/fonts');

const pageOrder = ['Home', 'Services', 'Projects']

const Rendered = () => {
	const rootDiv = useRef(null)

	const [currentPage, setPage] = useState('Home')

	const onNavigation = (page) => {
		scroller.scrollTo(page, { duration: 500, smooth: 'ease' })
		setPage(page)
	}

	const handleScroll = (event) => {

		// event.preventDefault()
		// event.stopPropagation()

		console.log('scrolling', event.deltaY)

		if (event.deltaY < 0 && event.deltaY > 100) {
			const index = pageOrder.findIndex(page => page === currentPage)

			if(index >= 0 && currentPage !== 'Home') {
				scroller.scrollTo(pageOrder[index-1], {
					duration: 500,
					smooth: 'ease'
				})
				setPage(pageOrder[index-1])
			}
		}

		else {
			const index = pageOrder.findIndex(page => page === currentPage)

			if(index !== pageOrder[pageOrder.length - 1]) {
				scroller.scrollTo(pageOrder[index+1], {
					duration: 500,
					smooth: 'ease'
				})
				setPage(pageOrder[index+1])
			}
		}
	}

	useEffect(() => {
		// window.addEventListener('mousewheel', handleScroll)
		disableBodyScroll(rootDiv)
	}, [ pageOrder, currentPage ])


	return (
		<div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start' }} ref={rootDiv} >
			<div style={{ zIndex: 99, position: 'fixed' }} >
				<MenuBar currentPage={currentPage} onNavigation={onNavigation} />
			</div>
			<div className='webpage' >
				<div className="pageContainer">
					<Element name='Home'></Element>
					<Home />
				</div>

				<div className="pageContainer">
					<Element name='Services' ></Element>
					<Services currentPage={currentPage} />
				</div>

				<div className="pageContainer">
					<Element name='Projects'></Element>
					<Projects />
				</div>
			</div>
		</div>
	)
}

export default Rendered;