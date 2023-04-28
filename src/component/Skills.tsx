import React from 'react';
import { forwardRef } from "react";
import { ContainerProps } from '../types/Props';
import { SlideScaleChange } from '../utils/SlideScaleChange';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { common } from '../styles/common';
import { Graph } from '../hooks/Chart';

const skillsContainer = css`
    width: 100%;
    height: 100%;
    background-color: coral;
`
const Scale = {
    y: {
      min: 0,
      max: 100,
      title: {
        display: true,
        text: "weight",
        color: "#FF4500",
        rotate: "vertical",
        font: {
          size: 20,
        },
      },
      ticks: {
        stepSize: 10,
      },
    },
    x: {
      title: {
        display: true,
        text: "month",
        color: "rgb(255,69,0)",
        font: {
          size: 20,
        },
      },
    },
  };

const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "graph",
      },
    },
    scales: Scale,
  };
  
  const data = {
    labels: ["January", "February", "March"],
    datasets: [
      {
        label: "Aさん",
        data: [55, 50, 60],
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "yellow",
      },
    ],
  };

export const Skills = forwardRef<HTMLDivElement, ContainerProps>(({ id, isIntersecting } , ref) => {
    return(
        <div id={id} ref={ref} css={common.wrapper}>
            <SlideScaleChange isIntersecting={isIntersecting}>
                <div css={skillsContainer}>
                    <div className='contentWrapper'>
                        <Graph data={data} options={options} />
                    </div>
                </div>
            </SlideScaleChange>
        </div>
    )
});