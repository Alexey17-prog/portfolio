import React from 'react';
import {Icon, IconPropsType} from "../../../../components/icon/Icon";
import {SectionTitle} from "../../../../components/SectionTitle";
import styled from "styled-components";

type SkillPropsType ={
    iconId: string
    title: string
}
export const Skill = (props: SkillPropsType & IconPropsType) => {
    return (
        <StyledSkill>
            <Icon iconId={props.iconId} viewBox={props.viewBox} height={props.height} width={props.width}/>
            <SkillTitle>{props.title}</SkillTitle>
        </StyledSkill>
    );
};

const StyledSkill = styled.div`
    
    
`

const SkillTitle = styled.h3`
    
`



