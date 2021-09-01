import styled from "styled-components";
import { tooglePositionBubble } from './mixins'

type BubbleProps = {
    display: number
    positionMode: string
}


export const Container = styled.div<BubbleProps>`
    position: absolute;
    background-color: ${props => props.theme.colors.bg.var_bubble}; 
    ${props => props.positionMode ? tooglePositionBubble(props.positionMode) : ''}
    height: 2rem;
    display: ${props => !props.display ? 'none' : 'flex'};
    border-radius: 5px;
    align-items: center;
    justify-content: center;
    padding: 0 1rem;
    z-index: 1;

    p {
        font-size: .625rem; 
        white-space: nowrap;  
        color: ${props => props.theme.colors.text.var_white};
        text-shadow: 0 0 20px ${props => props.theme.colors.text.var_white};
    }

    ::before {
        position: absolute;
        transform: translate(-50%, -50%);
        content: '';
        width: 0; 
        height: 0; 
        border-left: 6px solid transparent;
        border-right: 6px solid transparent;
        border-top: 10px solid ${props => props.theme.colors.bg.var_bubble};      
    }
`;