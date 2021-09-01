import styled from "styled-components";

type OnPress = {
    btnPress: number
}

export const Container = styled.li`
    position: relative;
    width: 33.33%;
    flex-shrink: 0;

    @media only screen and (min-width: 720px) and (max-width: 1080px){
        width: 50%
    }
    

    @media only screen and (min-width: 480px) and (max-width: 720px){
        width: 50%;
    }

    @media only screen and (min-width: 320px) and (max-width: 480px){
      width: 100%;
    }
`;

export const Card = styled.div`
    position: relative;
    width: 100%;
    height: 21vh;
    padding: .75rem;
   
`;

export const MarkGit = styled.a` 
    position: absolute;
    top: 0;
    right: 0;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    z-index: 1;

    svg {
       font-size: 1.5rem;
       color: ${props => props.theme.colors.icon.var_green_100};
    }

    :hover svg {
        color: ${props => props.theme.colors.icon.var_neon_green};
        text-shadow: 0 0 15px ${props => props.theme.colors.icon.var_neon_green};
    }
`;

export const SubCard = styled.div`
    width: 100%;
    height: 100%;
    border-radius: .5rem;
    box-shadow: ${props => props.theme.colors.card.var_shadow};

    
        position: relative;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: flex-end;
        justify-content: center;
        flex-direction: column;
        padding: .5rem;
        color: ${props => props.theme.colors.text.var_green_100};


        span {
            position: absolute;
            bottom: 1rem;
            right: 1rem;
            font-size: 0.75rem;
            font-family: 'Fira Code';
        }

    :hover {
        transform: scale(0.98);
        box-shadow: ${props => props.theme.colors.card.var_shadow_hover};
        color: ${props => props.theme.colors.card.var_neon_blue};
        text-shadow: 0 0 1px ${props => props.theme.colors.card.var_neon_blue};
    }
`;

export const Title = styled.div`
    width: calc(100% - 4rem);
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Fira Code';

    svg {
        margin-right: .5rem;
        font-size: 1rem;
    }

    h1 {
        width: 60%;
        text-transform: capitalize;
        font-weight: 500;
        font-size: 1.2rem;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
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
    min-width: 3rem;
    height: 2rem;
    display: flex;
    align-items: center;
    justify-content: space-around;
    border: 1px solid ${props => props.theme.colors.border.var_black_01};
    border-radius: 5px;

    :hover {
        box-shadow: 0 0 3px ${props => props.theme.colors.border.var_neon_green};
    }

    :hover div {
        display: flex;
    }

`;

export const Clipboard = styled.div`
    position: relative;
    width: 40%;
    height: 2rem;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    box-shadow: ${props => props.theme.colors.button.var_shadow};
    
    p {
        font-size: .75rem;
        white-space: nowrap;
    }

    textArea {
        resize: none;
        width: 10%;
        height: 2rem;   
        opacity: 0;
    }

    button {
        position: absolute;
        top: 0;
        left: 0;
        z-index: 1;
        width: 100%;
        height: 100%;  
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: transparent;
        color: ${props => props.theme.colors.text.var_green_100};
        cursor: copy;

       svg {
            color: ${props => props.theme.colors.icon.var_green_100};
            font-size: 1.2rem;
            transition: all .3s linear;
            margin-left: 1rem;
       }
    }

    :hover {
        box-shadow: ${props => props.theme.colors.button.var_shadow_hover};
    }

    @media only screen and (min-width: 320px) and (max-width: 720px){
        min-width: 40%;
    }
`;

export const CardDetail = styled.li`
    position: relative;
    width: 100%;
    height: calc(100vh - 35vh);
    margin-bottom: 2rem;
    padding: 3rem .75rem .75rem .75rem ;

`;

export const SubCardDetail = styled.div`
    position: relative;
    width: 100%;
    height: 95%;
    border-radius: .5rem;
    padding: 3rem 1rem 1rem 1rem;
    box-shadow: ${props => props.theme.colors.card.var_shadow};
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
    border: 2px solid transparent;
    color: ${props => props.theme.colors.text.var_green_100};


    h1 {
        width: 100%;
        text-align: center;
        font-size: 1.3rem;
        text-transform: uppercase;
        transition: all .3s linear;
        margin-bottom: 1rem;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        letter-spacing: .2rem;
        font-family: 'Fira Code';
    }

`;

export const GitAvatar = styled.a`
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 5.625rem;
    height: 5.625rem;
    border-radius: 50%;
    border: 2px solid transparent;
    background-color: ${props => props.theme.colors.bg.var_default};
    border: 1px solid ${props => props.theme.colors.border.var_black_01};
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all .3s linear;


    svg {
        width: 90%;
        height: 90%;
        color: ${props => props.theme.colors.text.var_green_100};
        cursor: nesw-resize;
      
        :hover {
            transform: scale(0.98);
            color: ${props => props.theme.colors.icon.var_neon_blue};
            text-shadow: 0 0 15px ${props => props.theme.colors.icon.var_neon_blue};
        }
    }

`;

export const DetailFlexBox = styled.div`
    width: 100%;
    height: 15%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: .5rem;
`;

export const BtnDowload = styled.button<OnPress>`
    width: 40%;
    height: 2rem;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${props => props.theme.colors.text.var_green_100};
    box-shadow: ${props => !props.btnPress  ? props.theme.colors.button.var_shadow : props.theme.colors.button.var_shadow_hover};
    
    p{
        font-size: .75rem;
        white-space: nowrap;
    }

    svg {
        font-size: 1.2rem;
        transition: all .3s linear;
        margin-left: 1rem;
        color: ${props => props.theme.colors.icon.var_green_100};//fazer algo diferente
    }

    @media only screen and (min-width: 320px) and (max-width: 720px){
        min-width: 40%;
    }
   
`;

export const CommitBox = styled.div`
    width: 100%;
    height: 70%;
    padding: .5rem;
    border-radius: 8px;
    border: 1px solid ${props => props.theme.colors.border.var_black_02};

    span {
        width: 100%;
        height: 15%;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        border-top-left-radius: 8px;
        border-top-right-radius: 8px;
    }

    ul {
        width: 100%;
        height: 85%;
        display: flex;
        align-items: center;
        flex-direction: column;
        display: flex;
        overflow: auto;
        border-radius: 8px;


        ::-webkit-scrollbar {
            width: 0;
            height: 0;
        }

        li {
            flex-shrink: 0;
            width: 100%;
            height: 25%;
            padding: .25rem;
        }
    }
    
    
`;

export const Commit = styled.div`
    width: 100%;
    height: 100%;
    border-radius: 5px;
    background-color: ${props => props.theme.colors.bg.var_lightGray};
    display: flex;
    align-items: center;
    justify-content: space-between;

    p {
        max-width: 7rem;
        margin: 0 .5rem;
        font-size: .75rem;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    svg {
        font-size: 2rem;
    }

    :hover {
        background-color: ${props => props.theme.colors.bg.var_lightGray};
    }

    @media only screen and (min-width: 320px) and (max-width: 720px){
        p {
            :nth-child(2){
                min-width: 30%;
            }
        }
    }

`;

export const CommitBtn = styled.a`
    width: 3rem;
    height: 100%;
    border: 1px solid ${props => props.theme.colors.border.var_black_02};
    border-radius: 5px;
    cursor: pointer;
    background-color: ${props => props.theme.colors.bg.var_default};
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: nesw-resize;

    svg {
        font-size: 1.5rem;
        color: ${props => props.theme.colors.text.var_green_100};
    }

    :hover {
        border: 1px solid ${props => props.theme.colors.border.var_neon_blue};
        box-shadow: 0 0 2px ${props => props.theme.colors.border.var_neon_blue};
    }

    :hover svg {
      color: ${props => props.theme.colors.icon.var_neon_blue};
      text-shadow: 0 0 2px ${props => props.theme.colors.icon.var_neon_blue};
    }
`;

export const CommitVoid = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: ${props => props.theme.colors.bg.var_lightGray};
    padding: 0 1.5rem;

    p {
        text-align: center;
        font-size: .75rem;
    }

    svg {
        margin-top: 1rem;
        font-size: 2.5rem;
    }
`;
