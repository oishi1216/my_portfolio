import React, { useEffect } from 'react';
import { forwardRef } from "react";
import { ContainerProps } from '../types/Props';
import { SlideScaleChange } from '../utils/SlideScaleChange';
import { motion, useAnimation } from "framer-motion";
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { common } from '../styles/common';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDesktop, faServer, faToolbox } from '@fortawesome/free-solid-svg-icons';

const skillsContainer = css`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin: 0 auto;
  max-width: 1080px;
  padding: 1.25em .625em .625em;
`

const tableWrapper = css`
  flex-basis: 40%;
  min-width: 20.75em;
  border: .1875em solid #333;
  color: #333;
  text-align: center;
`

const tableHeadline = css`
  font-size: 1.625em;
  padding: 1em;
`

const icon = css`
  margin-right: .3125em;
`

const table = css`
  margin: 0 auto;
  font-size: 1.125em;
  padding: 0 .625em 1em;
`

const column = css`
  padding: .375rem .75em;
`

const wrapTable = css`
  margin-top: 1.875em;
`

export const Skills = forwardRef<HTMLDivElement, ContainerProps>(({ id, isIntersecting } , ref) => {
  const control = useAnimation();
  const fontSizeChange = {
    reduction: {
      fontSize: '12.8px',
    },
    enlargement: {
        fontSize: '16px',
    }
  }

  useEffect(() => {
    if(!isIntersecting) {
        control.start("reduction");
    } else {
        control.start("enlargement");
    }
}, [isIntersecting])

  return(
    <div id={id} ref={ref} css={common.wrapper}>
      <SlideScaleChange isIntersecting={isIntersecting}>
        <div css={common.contentWrapper}>
          <motion.div animate={control} variants={fontSizeChange} css={skillsContainer}>
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
                    <td css={column}>Git/Github/GitLab</td>
                    <td css={column}>1年</td>
                    <td css={column}>1年</td>
                  </tr>
                  <tr>
                    <td css={column}>unity</td>
                    <td css={column}>-</td>
                    <td css={column}>1年</td>
                  </tr>
                  <tr>
                    <td css={column}>c#</td>
                    <td css={column}>-</td>
                    <td css={column}>1年</td>
                  </tr>
                  <tr>
                    <td css={column}>Slack</td>
                    <td css={column}>1年</td>
                    <td css={column}>-</td>
                  </tr>
                  <tr>
                    <td css={column}>GAS</td>
                    <td css={column}>-</td>
                    <td css={column}>2ヶ月</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </SlideScaleChange>
    </div>
  )
});