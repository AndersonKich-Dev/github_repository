import React from 'react'
import * as S from './styles'

export default function CardAnimateVoid() {



    return (
        <S.SkeletonItem>
            <S.BackgroundAnimate>
                <S.TitleBox/>
                    <S.CardInfo>
                        <S.CardInfoItem/>
                        <S.CardInfoItem/>
                        <S.CardInfoItem/>
                    </S.CardInfo>
                <S.DateBox/>
            </S.BackgroundAnimate>
        </S.SkeletonItem>
    )
}