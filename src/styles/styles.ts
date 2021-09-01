import styled from "styled-components";

type OnPress = {
    btnPress: number
}

export const Container = styled.div`
    position: relative;
    width: 100vw;
    height: 100vh;
    background-color: ${props => props.theme.colors.bg.var_default};
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;

`;

export const Menu = styled.nav`
    position: relative;
    width: 100%;
    height: 10%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 1.5rem;
`;

export const Search = styled.div`
    width: 18.75rem;
    margin-right: 2rem;
    height: 2.5rem;
    border-radius: 40px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    box-shadow:${props => props.theme.colors.button.var_search_shadow};

    input {
        width: 70%;
        height: 100%;
        font-size: 0.875rem;
        color: ${props => props.theme.colors.text.var_green_100};
        font-family: 'Poppins', sans-serif;
    
        ::placeholder{
            color: ${props => props.theme.colors.text.var_green_100};
            padding-left: 1rem;
        }
    }  
    
    @media only screen and (min-width: 320px) and (max-width: 480px) {
        flex: 1;
    }
`;


export const SearchBtn = styled.button`
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: .5rem;

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

export const ContainerMenuBtn = styled.div`
    width: 13rem;
    height: 2.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    

    @media only screen and (min-width: 320px) and (max-width: 720px){  
        left: calc(100% - 8.5rem)       
    }
    
`;  

export const MenuBtn = styled.div`
    position: relative;
    width: 2.5rem;
    height: 2.5rem;
    
    label {
        width: 100%;
        height: 100%;
        box-shadow: ${props => props.theme.colors.button.var_shadow};
        border-radius: 5px;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;

        svg {
            font-size: 1.5rem;   
            color: ${props => props.theme.colors.text.var_green_100};    
        }

        :hover svg{
            color: ${props => props.theme.colors.icon.var_neon_blue};
            text-shadow: 0 0 15px ${props => props.theme.colors.icon.var_neon_blue}; 
        }
    }

    input {
        display: none;
        }

    input[type="radio"]:checked ~ label{
        box-shadow: ${props => props.theme.colors.button.var_shadow_hover};
    }

    input[type="radio"]:checked ~ label svg{
        color: ${props => props.theme.colors.icon.var_neon_blue};
        text-shadow: 0 0 15px ${props => props.theme.colors.icon.var_neon_blue}; 
        transform: scale(0.95);
    }   

    :hover div {
        display: flex;
    }

`;

export const BtnUpdate = styled.button<OnPress>`
    position: relative;
    width: 2.5rem;
    height: 2.5rem;
    box-shadow: ${props => !props.btnPress ? props.theme.colors.button.var_shadow : props.theme.colors.button.var_shadow_hover};
    border-radius: 5px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${props => props.theme.colors.text.var_green_100};

    svg {
        font-size: 1.5rem;       
    }

    :hover div {
        display: flex;
    }

    :hover svg {
        color: ${props => props.theme.colors.icon.var_neon_blue};
        text-shadow: 0 0 15px ${props => props.theme.colors.icon.var_neon_blue}; 
    }

`;

export const Main = styled.main`
    width: 100%;
    height: 65%;
    padding-top: .75rem;
    overflow-y: auto;

    ::-webkit-scrollbar{
        width: 0;
        height: 0;
    }
`;

export const List = styled.ul`
    position: relative;
    width: 100%;
    display: flex;
    align-items: flex-start;
    flex-wrap: wrap;
    padding: 0 1rem;

    @media only screen and (min-width: 480px) and (max-width: 720px){
        height: 38.5rem;
    }

    @media only screen and (min-width: 320px) and (max-width: 480px){
        height: 38.5rem;
        flex-direction: column;
        flex-wrap: nowrap;
    }

`;

