import styled from "styled-components";

export const Container = styled.footer`
    width: 100%;
    height: 10%;
    background-color: #121212;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${props => props.theme.colors.text.var_white};
    box-shadow: ${props => props.theme.colors.var_footer_shadow};


     
`;