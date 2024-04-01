import React from 'react';
import styled from "styled-components";




export const Menu = (props: {menuItems: Array<string>}) => {
    return (
        <StyledMenu>
            <ul>
                {props.menuItems.map((Item, index)=>{
                    return <li key={index}>
                        <a href="">{Item}</a>
                    </li>
                })}
            </ul>
        </StyledMenu>
    );
};

const StyledMenu = styled.nav`
    ul {
        display: flex;
        justify-content: flex-end;
        gap: 30px;
        
    }
`
