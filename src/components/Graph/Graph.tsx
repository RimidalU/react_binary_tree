import React, { useEffect, useState } from 'react'
import './Graph.css'

import Tree from '../../helpers/createBinaryTree'
import { getRandomNumber } from '../../helpers/getRandomNumber'

const tree = new Tree()

export default function Graph() {
	const [initialItems, setInitialItems] = useState<number[]>([])

	useEffect(() => {
		const items = Array.from({ length: 10 }, () => getRandomNumber())
		setInitialItems(items)
	}, [])

	return <div className='Graph'>Graph</div>
}
