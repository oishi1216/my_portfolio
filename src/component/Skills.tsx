import React from 'react';
import { forwardRef } from "react";
import { ContainerProps } from '../types/Props';
import { SlideScaleChange } from '../utils/SlideScaleChange';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { common } from '../styles/common';

const Scale = {
    y: {
        stacked: true,
    },
    x: {
        stacked: true,
    },
  };

const skillsContainer = css`
  display: flex;
  max-width: 1080px;
  padding: 10px 10px;
`

const tableWrapper = css`
  border: 3px solid #333;
  color: #333;
`

const tableH3 = css`
  text-align: center;
`

const table = css`
  margin: 0 auto;
`

export const Skills = forwardRef<HTMLDivElement, ContainerProps>(({ id, isIntersecting } , ref) => {
    return(
        <div id={id} ref={ref} css={common.wrapper}>
            <SlideScaleChange isIntersecting={isIntersecting}>
                <div css={common.contentWrapper}>
                    <div css={skillsContainer}>
                      <div css={tableWrapper}>
                        <h3 css={tableH3}>フロントエンド</h3>
                        <table css={table}>
                          <thead>
                            <tr>
                              <th>技術</th>
                              <th>実務経験</th>
                              <th>個人開発</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>HTML5/CSS3</td>
                              <td>1年</td>
                              <td></td>
                            </tr>
                            <tr>
                              <td>javascript</td>
                              <td></td>
                              <td></td>
                            </tr>
                            <tr>
                              <td>jQuery</td>
                              <td></td>
                              <td></td>
                            </tr>
                            <tr>
                              <td>typescript</td>
                              <td></td>
                              <td></td>
                            </tr>
                            <tr>
                              <td>React</td>
                              <td></td>
                              <td></td>
                            </tr>
                            <tr>
                              <td>Vue</td>
                              <td></td>
                              <td></td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div>

                      </div>
                    </div>
                </div>
            </SlideScaleChange>
        </div>
    )
});