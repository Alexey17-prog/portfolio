import React from 'react';
import styled from "styled-components";
import {theme} from "../../../styles/Theme";




export const HeaderMenu = (props: {menuItems: Array<string>}) => {
    return (
        <StyledHeaderMenu>
            <ul>
                {props.menuItems.map((Item, index)=>{
                    return <ListItem key={index}>
                        <Link href="">
                            {Item}
                            <Mask>
                                <span>{Item}</span>
                            </Mask>
                            <Mask>
                                <span>{Item}</span>
                            </Mask>
                        </Link>
                    </ListItem>
                })}
            </ul>
        </StyledHeaderMenu>
    );
};

const StyledHeaderMenu = styled.nav`
    ul {
        display: flex;
        justify-content: flex-end;
        gap: 30px;

    }
`


const Link =styled.a`
    font-family: 'Be Vietnam',sans-serif;
    font-size: 18px;
    font-weight: 400;
    //color: transparent;


`

const Mask=styled.span`
    position: absolute;
    top: 0;
    left: 0;
    display: inline-block;
    height: 50%;
    overflow-y: hidden;
    //outline: 1px solid red;
    color: ${theme.colors.accent};

    &+& {
        top: 50%;
        span {
            display: inline-block;
            transform: translateY(-50%);
        }
    }
`


const ListItem =styled.li`
    position: relative;
    
    &::before {
        content: "";
        display: inline-block;
        height: 3px;
        background-color:${theme.colors.accent};
        
        
        position: absolute;
        top: 50%;
        left: -10px;
        right: -10px;
        z-index: 1;
        
        transform: scale(0);
    }


    &:hover {
        &::before {
            transform: scale(1);
        }
        
        ${Mask} {
            transform: skewX(12deg) translateX(5px);
            color: ${theme.colors.font};

            & + ${Mask} {
            transform: skewX(12deg) translateX(-5px);
            
            }
        }
        
    }
`