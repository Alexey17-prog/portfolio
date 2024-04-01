import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {Proj} from "./Proj";
import Made1 from './../../../assets/images/proj-2.jpg'
import Made2 from './../../../assets/images/proj-3.jpg'
import Made3 from './../../../assets/images/proj-4.jpg'
import {FlexWrapper} from "../../../components/FlexWrapper";

export const Projects = () => {
    return (
        <StyledProjects>
                <SectionTitle>Projects</SectionTitle>
                <SectionTitle>A select number of projects</SectionTitle>
            <FlexWrapper>
                <Proj text={"Made a social media manager template using HTML 5, CSS and JS."}
                      src={Made1}/>
                <Proj text={"Made a simple card page using HTML 5 and  CSS 3"}
                      src={Made2}/>
                <Proj text={"Made a simple card page using HTML 5 and  CSS 3"}
                      src={Made3}/>
            </FlexWrapper>
        </StyledProjects>
    );
};

const StyledProjects = styled.section`
    min-height: 100vh;
    
`

