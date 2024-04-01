import React from 'react';
import styled from "styled-components";
import photo from "./../../../assets/images/photo.jpg"
import {FlexWrapper} from "../../../components/FlexWrapper";

export const Main = () => {
    return (
        <StyledMain>
            <FlexWrapper direction={'column'} justify={"center"}>
                <StyledContainer>
                    <Hello>Hi👋, I’m a</Hello>
                    <MainTitle>Software Developer</MainTitle>
                    <Name>I’m John Doe, a developer dedicated to making the world a better place one line of code at a
                        time.
                    </Name>
                    <Button>Hire me</Button>
                </StyledContainer>
            </FlexWrapper>
            <FlexWrapper justify={"center"}>
                <Photo src={photo} alt=""/>
            </FlexWrapper>
        </StyledMain>
    );
};

const StyledMain = styled.div`
    display: flex;
    justify-content: space-around;
    min-height: 100vh;



`
const StyledContainer =styled.div`
    width: 553px;
    height: 250px;
   
 

`

const Photo = styled.img`
    width: 411px;
    height: 495px;
    margin: auto;
`

const MainTitle = styled.h1`
    

`

const Name = styled.h2`
    

`

const Hello =styled.span`
   


`

const Button =styled.button`
 
  
    

`

