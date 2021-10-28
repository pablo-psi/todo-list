import React from 'react'
import Layout from './layout.ui'
import Column from './common/column'

const App = () => (
	<Layout>
		<Column title={'TODO'} list={['First task', 'Second task']} />
		<Column title={'Doing'} list={['Doing task']} />
		<Column title={'Done'} list={[]} />
	</Layout>
)

export default App
