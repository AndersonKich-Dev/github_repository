import styled from "styled-components";

export const Container = styled.header`
    position: relative;
    width: 100%;
    height: 15%;
    padding: 0 1.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: ${props => props.theme.colors.var_header_shadow};

    h1 {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 3rem;
        color: ${props => props.theme.colors.text.var_green_50};
        text-shadow: ${props => props.theme.colors.text.var_shadow};
        transition: all .5s linear;
        cursor: pointer;
        
        :hover {
            color: ${props => props.theme.colors.text.var_red};
       
        }
    }
`;

export const AvatarContainer = styled.div`
    min-width: 3rem;
    height: 2.5rem;
    border-radius: 2.5rem;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    box-shadow: ${props => props.theme.colors.button.var_shadow};

    p {
        margin: 0 2rem;
        font-size: .875rem;
        color: ${props => props.theme.colors.text.var_green_100};
    }

    div {
        width: 2.5rem;
        height: 2.5rem;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: ${props => props.theme.colors.button.var_shadow};  

        img {
            width: 2.3rem;
            height: 2.3rem;
            border-radius: 50%;
        }
    }


    @media only screen and (min-width: 320px) and (max-width: 720px){
        justify-content: center;

        p {
            display: none;
        }
    }
`;


