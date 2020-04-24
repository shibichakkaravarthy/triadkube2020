import React from 'react'
import '../../../styles.css'

const Button = (props) => {
	return (
		<div className='buttonContainer' style={{...props.styles}} >
			{props.children}
		</div>
	)
}

export { Button }