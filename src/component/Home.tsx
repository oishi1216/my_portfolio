import React from 'react';
import { forwardRef } from "react";
import { ContainerProps } from '../types/Props';
import { SlideScaleChange } from '../utils/SlideScaleChange';

export const Home = forwardRef<HTMLDivElement, ContainerProps>(({ id, isIntersecting } , ref) => {
    console.log(isIntersecting)
    return(
        <div id={id} ref={ref} className='wrapper'>
            <SlideScaleChange isIntersecting={isIntersecting}>
                <div className='homeContainer'>

                </div>
            </SlideScaleChange>
        </div>
    )
});