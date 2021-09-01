import styled from "styled-components";

type DarkProps = {
    toogleDark: number
}


export const Container = styled.div`
    position: fixed;
    top: 7%;
    left: 1.5rem;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    z-index: 1;
    
    input {
        display: none;
    }

    input[type="checkbox"]:checked ~ span{
        transform: rotate(180deg);
    }

    @media only screen and (min-width: 320px) and (max-width: 720px) {
        top: 8%;
        right: 16%;
    }
`;

export const SubContainer = styled.span`
    position: relative;
    display: inline-block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    transform: rotate(0);
    transition: all .5s  ease-in-out;
    
`;



export const IconBox = styled.div<DarkProps>`
    position: absolute;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    left: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    transform: translate(-50%, -50%);
    cursor: pointer;
    transition: all .3s ease-in-out;
    
    :nth-child(1){
        transition-delay: ${props => !props.toogleDark ? '.3s' : '0'};
        top: 0;
        opacity: ${props => !props.toogleDark ? '1' : '0'};
        box-shadow: 0 0 15px #ffa500;
        
        svg {
            font-size: 1.5rem;
            color: #ffa500;
            text-shadow: 0 0 15px #ff9900;
        }
    
    }

    :nth-child(2){
        transition-delay: ${props => !props.toogleDark ? '0' : '.3s'};
        top: 100%;
        opacity: ${props => !props.toogleDark ? '0' : '1'};
        border-radius: 50%;
        box-shadow: 0 0 15px #3c6681;

        svg {
            transform: rotate(180deg);
            font-size: 1.5rem;
            color: #fff;
            text-shadow: 0 0 15px #fff;
        }
    }
`;
