import React from 'react';
import styled from "styled-components";
import {Logo} from "../../components/logo/Logo";
import {Container} from "../../components/Container";
import {HeaderMenu} from "./headerMenu/HeaderMenu";


const items = ["Skills","Projects","Contact me"]

export const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <Logo/>
                <HeaderMenu menuItems={items}/>
            </Container>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
    padding: 20px 0;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 99999;
    
    
    
`