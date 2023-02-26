import { KeyboardEvent, useEffect, useState } from 'react'

import { RawNodeDatum } from 'react-d3-tree/lib/types/types/common'

import Graph from './components/Graph/Graph'
import Header from './components/Header/Header'

import BinaryTree from './helpers/createBinaryTree'
import { getRandomNumber } from './helpers/getRandomNumber'

const binaryTree = new BinaryTree()

function App() {
	const [items, setItems] = useState<number[]>([])
	const [initialItems, setInitialItems] = useState<RawNodeDatum | RawNodeDatum[] | undefined>()

	useEffect(() => {
		let randomItems = Array.from({ length: 2 }, () => getRandomNumber())
		setItems(randomItems)
	}, [])

	useEffect(() => {
		items.forEach((el) => binaryTree.addItem(el))
		const newTree = binaryTree.getData()
		if (newTree) {
			setInitialItems({ ...newTree })
		}
	}, [items])

	const handleAddItem = (event: KeyboardEvent<HTMLInputElement>) => {
		if (event.key === ' ') {
			setItems((items) => [...items, getRandomNumber()])
		}
	}

	return (
		<main tabIndex={1} onKeyDown={handleAddItem} className='App'>
			<Header />
			<Graph initialItems={initialItems} />
		</main>
	)
}

export default App
