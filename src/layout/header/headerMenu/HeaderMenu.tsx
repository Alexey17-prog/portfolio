import React from 'react';
import styled from "styled-components";




export const HeaderMenu = (props: {menuItems: Array<string>}) => {
    return (
        <StyledHeaderMenu>
            <ul>
                {props.menuItems.map((Item, index)=>{
                    return <ListItem key={index}>
                        <Link href="">{Item}</Link>
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

const ListItem =styled.li`
`

const Link =styled.a`
    
`
