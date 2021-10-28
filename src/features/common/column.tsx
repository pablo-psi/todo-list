import React from 'react'
import styled from 'styled-components'

const StyledColumn = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    border: 1px solid black;

    span {
        text-align: center;
    }
`

const Board = styled.div`
    display: flex;
    background: white;
    box-shadow: #56565694 0px 7px 20px 0px;
    flex-grow: 1;
    margin: 10px;
`

interface ColumnProps {
    title?: string
}

export const Column = (props: ColumnProps) => (
    <StyledColumn>
        <span>{props.title}</span>
        <Board />
    </StyledColumn>
)


export default Column