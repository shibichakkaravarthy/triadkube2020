import React from 'react'
import Typed from 'react-typed'
import '../../../styles.css'

import {Button} from './Button'

const Hero = () => {
	return (
		<div style={{justifyContent: 'center', flex: 1, flexDirection: 'column', display: 'flex'}} >
			<div>
				<div className='greetings' style={{justifyContent: 'center'}} >
					Hello Guest!
				</div>
				<div className='title' >
					<div id='subtitle' ><strong>You are at</strong></div>
					<div id='maintitle' >TRIADKUBE</div>
				</div>
			</div>

			<div style={{margin: '50px', display: 'flex'}} >
				<Button styles={{ background: '#050505', color: '#fff' }} ><strong>Show me what you do</strong></Button>
				<Button styles={{ background: '#30B7FB', color: '#fff' }} ><strong>Give me an Estimate</strong></Button>
			</div>
		</div>
	)
}

export { Hero }