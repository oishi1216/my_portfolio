import React from 'react';
import { forwardRef } from "react";
import { ContainerProps } from '../types/Props';
import { SlideScaleChange } from '../utils/SlideScaleChange';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { common } from '../styles/common';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDesktop, faServer, faToolbox } from '@fortawesome/free-solid-svg-icons';

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
  justify-content: space-around;
  flex-wrap: wrap;
  margin: 0 auto;
  max-width: 1080px;
  padding: 20px 10px 10px;
`

const tableWrapper = css`
  flex-basis: 40%;
  min-width: 332px;
  border: 3px solid #333;
  color: #333;
  text-align: center;
`

const tableHeadline = css`
  font-size: 26px;
  padding: 24px
`

const icon = css`
  margin-right: 5px;
`

const table = css`
  margin: 0 auto;
  font-size: 18px;
  padding: 0 10px 18px;
`

const column = css`
  padding: 6px 12px;
`

const wrapTable = css`
  margin-top: 30px
`

export const Skills = forwardRef<HTMLDivElement, ContainerProps>(({ id, isIntersecting } , ref) => {
    return(
        <div id={id} ref={ref} css={common.wrapper}>
            <SlideScaleChange isIntersecting={isIntersecting}>
                <div css={common.contentWrapper}>
                    <div css={skillsContainer}>
                      <div css={tableWrapper}>
                        <h3 css={tableHeadline}>
                          <FontAwesomeIcon icon={faDesktop} css={icon}/>
                          フロントエンド
                        </h3>
                        <table css={table}>
                          <thead>
                            <tr>
                              <th css={column}>技術</th>
                              <th css={column}>実務経験</th>
                              <th css={column}>個人開発</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td css={column}>HTML5/CSS3</td>
                              <td css={column}>1年</td>
                              <td css={column}>6ヶ月</td>
                            </tr>
                            <tr>
                              <td css={column}>javascript</td>
                              <td css={column}>1年</td>
                              <td css={column}>6ヶ月</td>
                            </tr>
                            <tr>
                              <td css={column}>jQuery</td>
                              <td css={column}>1年</td>
                              <td css={column}>-</td>
                            </tr>
                            <tr>
                              <td css={column}>typescript</td>
                              <td css={column}>-</td>
                              <td css={column}>6ヶ月</td>
                            </tr>
                            <tr>
                              <td css={column}>React</td>
                              <td css={column}>-</td>
                              <td css={column}>6ヶ月</td>
                            </tr>
                            <tr>
                              <td css={column}>Vue</td>
                              <td css={column}>-</td>
                              <td css={column}>3ヶ月</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div css={tableWrapper}>
                        <h3 css={tableHeadline}>
                          <FontAwesomeIcon icon={faServer} css={icon}/>
                          サーバー
                        </h3>
                        <table css={table}>
                          <thead>
                            <tr>
                              <th css={column}>技術</th>
                              <th css={column}>実務経験</th>
                              <th css={column}>個人開発</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td css={column}>Firebase</td>
                              <td css={column}>-</td>
                              <td css={column}>1年</td>
                            </tr>
                            <tr>
                              <td css={column}>VPS</td>
                              <td css={column}>-</td>
                              <td css={column}>3ヶ月</td>
                            </tr>
                            <tr>
                              <td css={column}>Netlify</td>
                              <td css={column}>-</td>
                              <td css={column}>3ヶ月</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div css={[tableWrapper, wrapTable]}>
                        <h3 css={tableHeadline}>
                          <FontAwesomeIcon icon={faToolbox} css={icon}/>
                          その他
                        </h3>
                        <table css={table}>
                          <thead>
                            <tr>
                              <th css={column}>技術</th>
                              <th css={column}>実務経験</th>
                              <th css={column}>個人開発</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td css={column}>Firebase</td>
                              <td css={column}>-</td>
                              <td css={column}>1年</td>
                            </tr>
                            <tr>
                              <td css={column}>VPS</td>
                              <td css={column}>-</td>
                              <td css={column}>3ヶ月</td>
                            </tr>
                            <tr>
                              <td css={column}>Netlify</td>
                              <td css={column}>-</td>
                              <td css={column}>3ヶ月</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                </div>
            </SlideScaleChange>
        </div>
    )
});