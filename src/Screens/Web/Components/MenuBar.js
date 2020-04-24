import React from 'react'
import { HomeFilled, InfoCircleFilled, CodeFilled, IdcardFilled, MessageFilled } from '@ant-design/icons'
import '../../../styles.css'

const MenuBar = ({ currentPage, onNavigation }) => {
	return (
		<div className='menu-container' >
			<div className='icon-container' >
				<div className='icon-wrapper' style={(currentPage==='Home')? { backgroundColor: '#050505' }:null} onClick={() => onNavigation('Home')} >
					<HomeFilled className='icon' style={(currentPage==='Home')? { color: '#F7F7FF' }:null} />
					<div className='label' style={(currentPage==='Home')? { color: '#F7F7FF' }:null} >Home</div>
				</div>
				<div className='icon-wrapper' style={(currentPage==='Services')? { backgroundColor: '#050505' }:null} onClick={() => onNavigation('Services')} >
					<InfoCircleFilled className='icon' style={(currentPage==='Services')? { color: '#F7F7FF' }:null} />
					<div className='label' style={(currentPage==='Services')? { color: '#F7F7FF' }:null} >About</div>
				</div>
				<div  className='icon-wrapper' style={(currentPage==='Projects')? { backgroundColor: '#050505' }:null} onClick={() => onNavigation('Projects')} >
					<CodeFilled className='icon' style={(currentPage==='Projects')? { color: '#F7F7FF' }:null} />
					<div className='label'style={(currentPage==='Projects')? { color: '#F7F7FF' }:null}  >Projects</div>
				</div>
				<div  className='icon-wrapper'  >
					<IdcardFilled className='icon' />
					<div className='label' >Team</div>
				</div>

				<div  className='icon-wrapper'  >
					<MessageFilled className='icon' />
					<div className='label' >Reach Us</div>
				</div>
			</div>

			<div style={{ flex: 2 }} ></div>
		</div>
	)
}

export { MenuBar }