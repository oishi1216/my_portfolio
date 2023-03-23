import React from 'react';
import { forwardRef } from "react";
import { SlideScaleChange } from '../utils/SlideScaleChange';

type Props = {
    id: string;
    isIntersecting: boolean;
}

export const Home = forwardRef<HTMLDivElement, Props>(({ id, isIntersecting } , ref) => {
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