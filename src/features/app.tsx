import React from 'react'
import Layout from './layout.ui'
import { Column } from './common/column'

const App: React.FC = () => (
	<Layout>
		<Column title={'TODO'} list={['First task', 'Second task']} />
		<Column title={'Doing'} list={['Doing task']} />
		<Column title={'Done'} list={[]} />
	</Layout>
)

export default App
