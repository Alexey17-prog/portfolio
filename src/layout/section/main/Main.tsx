import React from 'react';
import styled from "styled-components";
import photo from "./../../../assets/images/photo.jpg"
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Container} from "../../../components/Container";

export const Main = () => {
    return (
        <StyledMain>
            <Container>
                <FlexWrapper align={"center"} justify={"space-between"}>
                    <StyledContainer>
                        <Hello>Hi👋, I’m a</Hello>
                        <MainTitle>Software Developer</MainTitle>
                        <Name>I’m <b>John Doe</b>, a developer dedicated to making the world a better place one line of code at a
                            time.
                        </Name>
                        <Button>Hire me</Button>
                    </StyledContainer>
                    <Photo src={photo} alt=""/>
                </FlexWrapper>
            </Container>
        </StyledMain>
    );
};

const StyledMain = styled.div`
    min-height: 80vh;
    padding-top: 147px;
    
    



`
const StyledContainer =styled.div`
    padding-top: 123px;
    width: 1245px;
    height: 495px;
   
 

`

const Photo = styled.img`
    width: 344px;
    height: 389px;
    
    
  
`

const MainTitle = styled.h1`
    color: #343D68;
    font-family: 'Be Vietnam',sans-serif;
    font-size: 48px;
    font-weight: 600;
    
   
    

`

const Name = styled.h2`
    color: #000000B3;
    font-family: 'Be Vietnam',sans-serif;
    font-size: 18px;
    font-weight: 400;
    line-height: 26px;
    padding-top: 30px;
`

const Hello =styled.span`
    color: #343D68;
    font-family: 'Be Vietnam',sans-serif;
    font-size: 48px;
    font-weight: 600;
    line-height: 117.6%;
    
   


`

const Button =styled.button`
    text-align: center;
    margin-top: 30px;
    width: 98px;
    height: 42px;
    border-radius: 4px;
    background-color: #E84949;
    color: white;
    font-family: 'Be Vietnam',sans-serif;
    font-size: 18px;
    line-height: 26px;
    
   
    
    

`

