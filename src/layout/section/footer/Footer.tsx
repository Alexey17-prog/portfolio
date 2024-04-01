import React from 'react';
import styled from "styled-components";
import {Icon} from "../../../components/icon/Icon";
import {FlexWrapper} from "../../../components/FlexWrapper";

export const Footer = () => {
    return (
        <StyledFooter>
            <FlexWrapper direction={'column'}>
                <Name>My social media links:</Name>
                <SocialList>
                    <SocialItem>
                        <SocialLink>
                            <Icon height={"30px"}  iconId={"linkedin"}/>
                        </SocialLink>
                    </SocialItem>
                    <SocialItem>
                        <SocialLink>
                            <Icon height={"30px"} width={"30px"} viewBox={"0 0 30px 30px"} iconId={"whatsapp"}/>
                        </SocialLink>
                    </SocialItem>
                    <SocialItem>
                        <SocialLink>
                            <Icon height={"30px"} width={"30px"} viewBox={"0 0 30px 30px"} iconId={"twitter"}/>
                        </SocialLink>
                    </SocialItem>
                    <SocialItem>
                        <SocialLink>
                            <Icon height={"30px"} width={"30px"} viewBox={"0 0 30px 30px"} iconId={"gmail"}/>
                        </SocialLink>
                    </SocialItem>
                </SocialList>
            </FlexWrapper>
            <FlexWrapper>
                <SocialLink>
                    <Name1>More projects I’ve worked on</Name1>
                    <Icon height={"30px"} width={"30px"} viewBox={"0 0 30px 30px"} iconId={"github"}/>
                    <Name>@john-doe on github</Name>
                </SocialLink>
            </FlexWrapper>
        </StyledFooter>
    );
};

const StyledFooter= styled.footer`
    background-color: #343D68;
    min-height: 30vh;
    display: flex;
    align-items: center;
    justify-content: space-around;
    gap: 65px;
    

`
const Name1= styled.h5`


`

const Name= styled.span`
    


`

const SocialList= styled.ul`





`

const SocialLink= styled.a`




`
const SocialItem =styled.li`
    display: inline-block;
    margin: 10px;
`