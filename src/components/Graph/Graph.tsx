import React, { useEffect, useState } from 'react'
import Tree from 'react-d3-tree'

import './Graph.css'

import BinaryTree from '../../helpers/createBinaryTree'
import { getRandomNumber } from '../../helpers/getRandomNumber'

const binaryTree = new BinaryTree()


export default function Graph() {
	const [initialItems, setInitialItems] = useState<number[]>([])

	useEffect(() => {
		const items = Array.from({ length: 10 }, () => getRandomNumber())
		setInitialItems(items)
	}, [])

	useEffect(() => {}, [initialItems])

	return (
		<div className='Graph'>
			<Tree orientation='vertical'
      enableLegacyTransitions
      translate={{
        x: window.innerWidth / 2,
        y: window.innerHeight / 5
      }}
      // data={data}
      />
		</div>
	)
}
