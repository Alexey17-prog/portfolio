import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {Button} from "../../../components/Button";
import {Skill} from "../skills/skill/Skill";
import {FlexWrapper} from "../../../components/FlexWrapper";

export const Contact = () => {
    return (
        <StyledContact>
            <SectionTitle>Contact me</SectionTitle>
            <FlexWrapper justify={"space-around"}>
                <Skill iconId={"man"} title={""} width={'563'} height={'412'} viewBox={'0 0 511 414'}/>
                <StyledForm>
                    <Field placeholder={"Enter email address"}/>
                    <FieldTextarea placeholder={"Enter message..."} as={"textarea"}/>
                    <ButtonContact type={"submit"}>Send Message</ButtonContact>
                </StyledForm>
            </FlexWrapper>
        </StyledContact>

    );
};



const StyledContact = styled.section`
    background-color: #d2c494;

`

const StyledForm = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    gap: 43px;
`

const Field = styled.input`
    width: 613px;
    height: 53px;
    
`
const FieldTextarea = styled.textarea`
    width: 613px;
    height: 158px;
    resize: none;
`
const ButtonContact = styled(Button)`
    width: 214px;
    height: 50px;
    
    align-self: center;
`