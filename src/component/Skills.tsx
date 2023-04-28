import React from 'react';
import { forwardRef } from "react";
import { ContainerProps } from '../types/Props';
import { SlideScaleChange } from '../utils/SlideScaleChange';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { common } from '../styles/common';
import { Graph } from '../hooks/Chart';

const Scale = {
    y: {
        stacked: true,
    },
    x: {
        stacked: true,
    },
  };

const options = {
    indexAxis: 'y' as const,
    responsive: true,
    plugins: {
        legend: {
          position: 'right' as const,
        },
      title: {
        display: true,
        text: "frontend",
        color: "#fff"
      },
    },
    scales: Scale,
  };
  
  const data = {
    labels: ["HTML5", "CSS3", "JavaScript"],
    datasets: [
      {
        label: "実務経験年数",
        data: [1, 1, 1],
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "red",
      },
      {
        label: "個人開発年数",
        data: [1, 1, 0.5],
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "blue",
      },
    ],
  };

export const Skills = forwardRef<HTMLDivElement, ContainerProps>(({ id, isIntersecting } , ref) => {
    return(
        <div id={id} ref={ref} css={common.wrapper}>
            <SlideScaleChange isIntersecting={isIntersecting}>
                <div css={common.contentWrapper}>
                    <div className='contentWrapper'>
                        <Graph data={data} options={options} />
                    </div>
                </div>
            </SlideScaleChange>
        </div>
    )
});