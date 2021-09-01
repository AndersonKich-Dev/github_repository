import React from 'react'
import * as S from './styles'

type Props = {
    display: number
    positionMode: string
    text: string
}

export default function Bubble({positionMode, display, text}:Props) {

    return(
        <S.Container positionMode={positionMode} display={display}>
            <p>{text}</p>
        </S.Container>
    )
}