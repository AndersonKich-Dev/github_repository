import styled, { keyframes } from "styled-components";


export const SkeletonItem = styled.li`
    flex-shrink: 0;
    width: 33.33%;
    height: 21vh;
    padding: .75rem;
    cursor: wait;

    @media only screen and (min-width: 320px) and (max-width: 720px){
        width: 100%;
        height: 25%;
    }
`;

export const BackgroundAnimate = styled.div`   
    position: relative;
    width: 100%;
    height: 100%;
    border-radius: .5rem;
    box-shadow: ${props => props.theme.colors.card.var_shadow};
    display: flex;
    align-items: center;
    justify-content: flex-end;
    
    :hover {
        box-shadow: ${props => props.theme.colors.card.var_shadow_hover};
    }

    :hover div{
        transform: scale(0.98);
    }
`;

const animate = keyframes` 
    0%{
        background-position: -450px 0;
    }
    100%{
        background-position: 450px 0;
    }
`;

export const TitleBox = styled.div`
    position: relative;
    width: 60%;
    height: 1rem;
    border-radius: 40px;
    margin-right: 2rem;
    background: ${props => props.theme.colors.bg.var_skeleton};
    overflow: hidden;
    
    ::before {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        background: linear-gradient(to right, ${props => props.theme.colors.bg.var_skeleton_gradient} 0%, rgba(0, 0, 0, 0.05) 20%, ${props => props.theme.colors.bg.var_skeleton_gradient} 40%, ${props => props.theme.colors.bg.var_skeleton_gradient} 100%);
        background-size: 450px 400px;
        background-repeat: no-repeat;
        animation: ${animate} 1s infinite;
   }
`;

export const DateBox = styled.div`
    position: absolute;
    bottom: 1rem;
    right: 1rem;
    width: 40%;
    height: .75rem;
    border-radius: 40px;
    background: ${props => props.theme.colors.bg.var_skeleton};
    overflow: hidden;

    ::before {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        background: linear-gradient(to right, ${props => props.theme.colors.bg.var_skeleton_gradient}  0%, rgba(0, 0, 0, 0.05) 20%, ${props => props.theme.colors.bg.var_skeleton_gradient}  40%, ${props => props.theme.colors.bg.var_skeleton_gradient}  100%);
        background-size: 450px 400px;
        background-repeat: no-repeat;
        animation: ${animate} 1s infinite;
   }
`;

export const CardInfo = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: column;
    width: 4rem;
    height: 100%;
    padding: .5rem 0rem .5rem .5rem;
    border-radius: 5px;
    
`;

export const CardInfoItem = styled.div`
    position: relative;
    min-width: 2.6rem;
    height: 1.6rem;
    display: flex;
    align-items: center;
    justify-content: space-around;
    border-radius: 5px;
    background: ${props => props.theme.colors.bg.var_skeleton};
    overflow: hidden;

   ::before {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        background: linear-gradient(to right, ${props => props.theme.colors.bg.var_skeleton_gradient}  0%, rgba(0, 0, 0, 0.05) 40%, ${props => props.theme.colors.bg.var_skeleton_gradient}  60%, ${props => props.theme.colors.bg.var_skeleton_gradient}  100%);
        background-size: 450px 400px;
        background-repeat: no-repeat;
        animation: ${animate} 1s infinite;
   }

`;