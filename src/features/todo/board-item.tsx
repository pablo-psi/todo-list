import React from 'react'
import styled from 'styled-components'

const StyledBoardItem = styled.div`
    padding: 24px;
    box-shadow: #56565654 3px 3px 6px 0px;
`

interface BoardItemProps {
    text: string,
}

export const BoardItem: React.FC<BoardItemProps> = (props) => {
	return (
		<StyledBoardItem>
			<span>{props.text}</span>
		</StyledBoardItem>
	)
}
