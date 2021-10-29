import gql from 'graphql-tag'

export const GET_TODOS = gql`
	query Query {
		todos {
				id,
				title,
				completed
		}
	}
`