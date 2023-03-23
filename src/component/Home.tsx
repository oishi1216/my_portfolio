import React from 'react';
import { forwardRef } from "react";
import { SlideScaleChange } from '../utils/SlideScaleChange';

type Props = {
    id: string;
    currentTab: string;
}

export const Home = forwardRef<HTMLDivElement, Props>(({ id, currentTab } , ref) => {
    return(
        <div id={id} ref={ref} className='wrapper'>
            <SlideScaleChange currentTab={currentTab}>
                <div className='homeContainer'>

                </div>
            </SlideScaleChange>
        </div>
    )
});