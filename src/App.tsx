import { useState } from 'react'
import Graph from './components/Graph/Graph'
import Header from './components/Header/Header'
import Tree from './helpers/createBinaryTree'

const tree = new Tree()

function App() {
	return (
		<main className='App'>
			<Header />
			<Graph />
		</main>
	)
}

export default App
