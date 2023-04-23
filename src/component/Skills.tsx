import React from 'react';
import { forwardRef } from "react";
import { ContainerProps } from '../types/Props';
import { SlideScaleChange } from '../utils/SlideScaleChange';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { common } from '../styles/common';

const skillsContainer = css`
    width: 100%;
    height: 100%;
    background-color: coral;
`

export const Skills = forwardRef<HTMLDivElement, ContainerProps>(({ id, isIntersecting } , ref) => {
    return(
        <div id={id} ref={ref} css={common.wrapper}>
            <SlideScaleChange isIntersecting={isIntersecting}>
                <div css={skillsContainer}>
                    <div className='contentWrapper'></div>
                </div>
            </SlideScaleChange>
        </div>
    )
});