import styled from "styled-components";

type PropsBtnClose = {
    display: number
}

export const Container = styled.div`
    position: relative;
    width: 100vw;
    height: 100vh;
    background-color: ${props => props.theme.colors.bg.var_default};
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem 6.25rem;
    z-index: 99;

    h1 {
        position: absolute;
        top: 30%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: ${props => props.theme.colors.text.var_gray};

        strong {
            color: ${props => props.theme.colors.text.var_red};
        }
    }

    @media only screen and (min-width: 320px) and (max-width: 720px){
        width: 100%;
        padding: 1rem 2rem;

        h1 {
            width: 100%;
            text-align: center;
        }
    }
    
`;

export const SearchBox = styled.form`
    position: relative;
    width: 50rem;
    height: 3.75rem;
    background-color: ${props => props.theme.colors.home_bg};
    box-shadow:${props => props.theme.colors.button.var_search_shadow};
    border-radius: 3.75rem;
    display: flex;
    align-items: center;
    justify-content: space-around;
    
    
    input {
        background-color: transparent;
        width: 80%;
        height: 100%;
        font-size: 1.2rem;
        font-family: 'Fira Code';
        text-align: center;
        color:  ${props => props.theme.colors.text.var_gray};
        

        ::placeholder{
            text-align: center;
            font-family: 'Poppins', sans-serif;
            font-size: 1.2rem;
        }
    }

    @media only screen and (min-width: 320px) and (max-width: 720px){
        width: 100%;

        input {
            text-align: center;
        }
    }
   
`;


export const SearchBtn = styled.button<PropsBtnClose>`
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    visibility: ${({display}) => display ? 'visible' : 'hidden'};

    :disabled{
        cursor: default;
    }

    svg {
        width: 50%;
        height: 50%;
        color: ${props => props.theme.colors.icon.var_gray};
    }

    :hover svg{
        color: ${props => props.theme.colors.icon.var_neon_red};
        text-shadow: 0 0 15px ${props => props.theme.colors.icon.var_neon_red}; 
    }
`;