import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../../components/FlexWrapper";
import {Icon} from "../../../../components/icon/Icon";
import {SectionTitle} from "../../../../components/SectionTitle";
import {Skill} from "./Skill";
import photo from "./../../../../assets/images/JS.png"

export  const Skills = () => {
    return (
        <StyledSkills>
            <SectionTitle>Skills</SectionTitle>
            <FlexWrapper justify={"space-around"}>
                <StyleSkill>
                    <SkillsText>I have a vast experience in the following web technologies:</SkillsText>
                    <SkillsBox>
                        <Skill iconId={"html5"} title={"HTML 5"} width={'43.7'} height={'43.7'} viewBox={"0 0 44 44"}/>
                        <Skill iconId={"css3"} title={"CSS3"} width={'52.17'} height={'52.17'} viewBox={"0 0 53 53"}/>
                        <div><img src={photo} alt={''} width={"44.49"} height={"49.56"}/><p>JavaScript</p></div>
                        <Skill iconId={"bootstrap"} title={"Bootstrap"} width={"39.13"} height={"39.13"}/>
                    </SkillsBox>
                </StyleSkill>
                <Skill iconId={"vector1"} title={""} width={"511"} height={"414"} viewBox={"0 0 511 414"}/>
            </FlexWrapper>
        </StyledSkills>
    );
};


const StyledSkills =styled.section`
    background-color: #c4c591;
    

    
`


const StyleSkill = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
   

`
 const SkillsBox =styled.div`
     display: flex;
     gap: 42px;
     
 `


const SkillsText = styled.p`
    
`

