import React from 'react'
import styled from 'styled-components'
import { BoardItem } from '../todo/board-item'

const StyledBoard = styled.div`
    display: flex;
    flex-direction: column;
    background: white;
    box-shadow: #56565694 0px 7px 20px 0px;
    flex: 1;
    margin: 8px;
    padding: 24px;

    div + div {
        margin-top: 8px;
    }
`

interface BoardProps {
    list: Array<any>,
}

export const Board: React.FC<BoardProps> = (props) => (
	<StyledBoard>
		{props.list.map((item) => 
			<BoardItem key={item.id} text={item.title}/>
		)}
	</StyledBoard>
)