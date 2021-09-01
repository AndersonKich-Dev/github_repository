import styled from "styled-components";

export const Container = styled.footer`
    width: 100%;
    height: 10%;
    background-color: #121212;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding-right: 3rem;
    color: ${props => props.theme.colors.text.var_white};
    box-shadow: ${props => props.theme.colors.var_footer_shadow};

    svg {
        margin: 0 .5rem;
    }

    @media only screen and (min-width: 320px) and (max-width: 720px){
       justify-content: center;
       padding: 0;
       
    }   
`;