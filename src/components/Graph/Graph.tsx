import React, { useEffect, useState } from 'react'
import Tree from 'react-d3-tree'
import { RawNodeDatum } from 'react-d3-tree/lib/types/types/common'

import './Graph.css'

interface RowsProps {
	initialItems: RawNodeDatum | RawNodeDatum[] | undefined
}

export default function Graph({ initialItems }: RowsProps) {
	const [treeData, setTreeData] = useState<RawNodeDatum | RawNodeDatum[] | undefined>()
	useEffect(() => {
		setTreeData(initialItems)
	})

	return (
		<div className='Graph' id='treeWrapper'>
			{treeData && (
				<Tree
					orientation='vertical'
					enableLegacyTransitions
					translate={{
						x: window.innerWidth / 2,
						y: window.innerHeight / 5,
					}}
					data={initialItems}
				/>
			)}
		</div>
	)
}
