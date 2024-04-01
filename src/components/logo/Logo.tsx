import React from 'react';
import photo from "../../assets/images/proj-1.jpg";
import styled from "styled-components";

export const Logo = () => {
    return (
        <StyledLogo>
            <img src={photo} alt=""/>
        </StyledLogo>
    );
};

const StyledLogo = styled.section`
    display: flex;
    width: 90px;
    height: 35px;
    

`