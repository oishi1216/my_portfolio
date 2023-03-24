import React from 'react';
import { forwardRef } from "react";
import { ContainerProps } from '../types/Props';
import { SlideScaleChange } from '../utils/SlideScaleChange';

export const About = forwardRef<HTMLDivElement, ContainerProps>(({ id, isIntersecting } , ref) => {
    return(
        <div id={id} ref={ref} className='wrapper'>
            <SlideScaleChange isIntersecting={isIntersecting}>
                <div className='aboutContainer'>

                </div>
            </SlideScaleChange>
        </div>
    )
});