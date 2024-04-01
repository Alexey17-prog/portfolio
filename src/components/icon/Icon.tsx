import React from 'react';
import iconsSprite from './../../assets/images/icons-sprite.svg'

export type IconPropsType = {
    iconId: string
    width?: string
    height?: string
    viewBox?: string

}
export const Icon = (props:IconPropsType) => {
    return (
        <svg width= {props.width || "44"} height={props.height ||"44"} viewBox={props.viewBox} fill="none" xmlns="http://www.w3.org/2000/svg">
            <use xlinkHref={`${iconsSprite}#${props.iconId}`}/>
        </svg>
        );
};
