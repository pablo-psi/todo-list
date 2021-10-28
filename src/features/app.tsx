import React, {useEffect, useState} from 'react'
import {
	useQuery
} from '@apollo/client'
import {GET_TODOS} from '../api/queries'
import Layout from './layout.ui'
import { Column } from './common/column'

const App: React.FC = () => {
	
	const { loading, error, data } = useQuery(GET_TODOS)
	
	const [todoItems, setTodoItems] = useState([])
	const [doneItems, setDoneItems] = useState([])
	
	useEffect(() => {
		if (!loading && !error && data) {
			const allData = data.todos.data
			setTodoItems(allData.filter((item: any) => !item.completed))
			setDoneItems(allData.filter((item: any) => item.completed))

		}
	}, [loading, error, data])
	
	return (
		<Layout>
			<Column title={'TODO'} list={todoItems} />
			<Column title={'Done'} list={doneItems} />
		</Layout>
	)}

export default App
