import React from 'react';
import styled from "styled-components";


type ProjPropsType = {
    text: string
    src: string

}
export const Proj = (props: ProjPropsType) => {
    return (
        <StyledProj>
            <Image src ={props.src} alt=""/>
            <Text>{props.text}</Text>
            <Button>Learn More</Button>
        </StyledProj>
    );
};

const StyledProj = styled.div`
    
    
    
`
const  Image = styled.img`
    width: 372px;
    height: 276px;
    object-fit: cover;
    
    
    

`

const  Text = styled.h3`

`

const  Button = styled.button`
 
`
