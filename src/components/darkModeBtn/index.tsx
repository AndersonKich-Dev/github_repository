import React from 'react'
import * as S from './styles'
import { useState} from 'react'
import { RiMoonClearFill, RiSunFill } from 'react-icons/ri'

type Props ={
    onClick: () => void;
}

export default function DarkModeBtn({ onClick}:Props){

    const [darkTheme, setDarkTheme] = useState(0)

   
    const toogleTheme = () =>{
        onClick()
        !darkTheme ? setDarkTheme(1) : setDarkTheme(0)
    }
    

    return(
        <S.Container>
        <label htmlFor='btn'>
            <input onClick={toogleTheme} id='btn' type="checkbox" />
            <S.SubContainer >
            <S.IconBox toogleDark={darkTheme}>
                <RiSunFill/>
            </S.IconBox>

            <S.IconBox toogleDark={darkTheme}>
                <RiMoonClearFill/>
            </S.IconBox>
            </S.SubContainer>
         </label>
        </S.Container>
    )
}

