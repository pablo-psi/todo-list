import React from 'react'
import styled from 'styled-components'
import { BoardItem } from 'features/todo/board-item'
import { TodoListItem } from 'api/entities'

const StyledBoard = styled.div`
	display: flex;
	flex-direction: column;
	background: white;
	box-shadow: #56565694 0px 7px 20px 0px;
	flex: 1;
	margin: 8px;
	padding: 24px;
	max-height: 100%;
	overflow-y: scroll;

	div + div {
			margin-top: 8px;
	}
`

type BoardProps = {
  list: TodoListItem[],
}

export const Board = ({list}: BoardProps): JSX.Element => (
	<StyledBoard>
		{list.map((item) => 
			<BoardItem key={item.id} text={item.title}/>
		)}
	</StyledBoard>
)