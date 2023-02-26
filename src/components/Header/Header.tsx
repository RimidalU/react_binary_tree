import React from 'react'
import './Header.css'

export default function Header() {
	return (
		<div className='Header'>
			<p>Values are randomly generated in the range [-100, 100].</p>
			<p>
				To add a new random value to this tree, <b>press "space"</b>. Canvas zoom - <b>mouse wheel</b>.
			</p>
			<h4>Click on canvas to get started!</h4>
		</div>
	)
}
