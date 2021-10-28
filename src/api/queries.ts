import gql from 'graphql-tag'

export const GET_TODOS = gql`
	query Query {
		todos {
			data {
				id,
				title,
				completed
			}
		}
	}
`