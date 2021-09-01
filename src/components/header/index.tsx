import React from 'react'
import * as S from './styles'

type Props = {
    avatarUrl?: string
    userName?: string 
}

export default function Header({ avatarUrl, userName }:Props) {

    return(
        <S.Container>
            <a href={`https://github.com/${userName}`} target="_blank" rel = "noreferrer">
                <h1>GITHUB</h1>
            </a>
            <S.AvatarContainer>
                <p>{userName}</p> 
                <div>
                <img src={avatarUrl} alt='Avatar'/>
                    
                </div>
            </S.AvatarContainer>
        </S.Container>
    )
}
