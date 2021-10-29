import React from 'react'
import ReactDOM from 'react-dom'
import App from 'features/app'
import './index.css'
import {
	ApolloClient,
	InMemoryCache,
	ApolloProvider
} from '@apollo/client'

const client = new ApolloClient({
	uri: 'https://graphqlzero.almansi.me/api',
	cache: new InMemoryCache(),
})

ReactDOM.render(
	<React.StrictMode>
		<ApolloProvider client={client}>
			<App/>
		</ApolloProvider>
	</React.StrictMode>,
	document.getElementById('root')
)
