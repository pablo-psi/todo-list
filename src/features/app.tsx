import React from 'react'
import Layout from "./layout.ui"
import Column from "./common/column"

const App = () => (
    <Layout>
        <Column title={"TODO"} />
        <Column title={"Doing"} />
        <Column title={"Done"} />
    </Layout>
)

export default App
