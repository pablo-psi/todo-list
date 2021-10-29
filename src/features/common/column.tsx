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
interface ColumnProps {
  title?: string,
  list: Array<TodoListItem>,
}

export const Column: React.FC<ColumnProps> = (props) => (
	<StyledColumn>
		<span>{props.title}</span>
		<Board list={props.list}/>
	</StyledColumn>
)
