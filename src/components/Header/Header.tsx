import React from 'react'
import './Header.css'

export default function Header() {
	return (
		<div className='Header'>
			<p>
				Initial values are randomly generated in the range [-100, 100]. To add a new random value to
				this tree, <b>press "space"</b>.
			</p>
		</div>
	)
}
