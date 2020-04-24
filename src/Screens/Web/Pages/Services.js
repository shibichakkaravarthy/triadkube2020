import React from 'react'
import Typed from 'react-typed'
import { Card } from '../Components'

import '../../../styles.css'

const Services = ({ currentPage }) => {
	return (
		<div style={{ flex: 1, justifyContent: 'space-around' }} >
			<div className='services-title' >
				What We do
			</div>

			{	
				(currentPage === 'Services')
				?
				<div className='typing' >
					<div>
						We serve&nbsp;
					</div>
					<Typed
	                    strings={[' Induviduals', 'Enterprises', 'Startups', 'Institutions', 'Companies']}
	                    typeSpeed={100}
	                    backSpeed={50}
	                    smartBackspace={true}
	                    backDelay={1000}
	                    loop
	                />
	                <div>
	                	!
	                </div>
				</div>
				:
				null
			}

			<div style={{ margin: '15px', marginTop: '100px' }} >
				<Card currentPage={currentPage} />
			</div>
		</div>
	)
}

export { Services }