import React from 'react'
import styled from 'styled-components'
import { Board } from './board'

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
    list: Array<string>,
}

export const Column = (props: ColumnProps) => (
	<StyledColumn>
		<span>{props.title}</span>
		<Board list={props.list}/>
	</StyledColumn>
)


export default Column