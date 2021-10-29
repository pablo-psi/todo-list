import React from 'react'
import styled from 'styled-components'
import { Board } from './board'
import { TodoListItem } from 'api/entities'

const StyledColumn = styled.div`
	display: flex;
	flex-direction: column;
	flex: 1;

	span {
			text-align: center;
	}
`

type ColumnProps = {
  title?: string,
  list: TodoListItem[],
}

export const Column = ({title, list}: ColumnProps): JSX.Element => (
	<StyledColumn>
		<span>{title}</span>
		<Board list={list}/>
	</StyledColumn>
)
