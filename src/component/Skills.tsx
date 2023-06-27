import React, { useEffect } from "react";
import { forwardRef } from "react";
import { ContainerProps } from "../types/Props";
import { SlideScaleChange } from "../hooks/useSlideScaleChange";
import { motion, useAnimation } from "framer-motion";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { common } from "../styles/common";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDesktop,
  faServer,
  faToolbox,
  faCode,
} from "@fortawesome/free-solid-svg-icons";

const skillsContainerPC = css`
  display: flex;
  justify-content: space-around;
  margin: 0 auto;
  max-width: 1080px;
  padding: 1.25em .5em .5em;
`;

const skillsContainerSP = css`
  margin: 0 auto;
  padding: 0 .5em;
`

const tableWrapper = css`
  flex-basis: 23em;
  min-width: 20.75em;
  border: 0.1875em solid #333;
  color: #333;
  text-align: center;
`;

const tableFirstMarginSP = css`
  margin-top: .5em;
`

const tableMarginSP = css`
  margin-top: 1.25em;
`

const tableHeadline = css`
  font-size: 1.4em;
  padding: 0.5em;
`;

const icon = css`
  margin-right: 0.3125em;
`;

const table = css`
  margin: 0 auto;
  font-size: 1em;
  padding: 0 .625em .625em;
`;

const column = css`
  padding: 0.375rem 0.575em;
`;

export const Skills = forwardRef<HTMLDivElement, ContainerProps>(
  ({ id, isIntersecting, isDesktop }, ref) => {

    return (
      <div id={id} ref={ref} css={isDesktop ? common.wrapperPC : common.wrapperVariableSP}>
        <SlideScaleChange
          isIntersecting={isIntersecting}
        >
          <div css={isDesktop ? common.contentWrapperPC : common.contentWrapperSP}>
            <div css={isDesktop ? skillsContainerPC : skillsContainerSP}>
              {!isDesktop &&
                <h2 css={common.headlineTitleSP}><FontAwesomeIcon icon={faCode} css={common.headlineIconSP} />Skills</h2>
              }
              <div css={ isDesktop ? tableWrapper : [tableWrapper, tableFirstMarginSP] }>
                <h3 css={tableHeadline}>
                  <FontAwesomeIcon icon={faDesktop} css={icon} />
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
              <div css={ isDesktop ? tableWrapper : [tableWrapper, tableMarginSP] }>
                <h3 css={tableHeadline}>
                  <FontAwesomeIcon icon={faServer} css={icon} />
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
            </div>
            <div css={isDesktop ? skillsContainerPC : skillsContainerSP}>
              <div css={ isDesktop ? tableWrapper : [tableWrapper, tableMarginSP]}>
                <h3 css={tableHeadline}>
                  <FontAwesomeIcon icon={faToolbox} css={icon} />
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
            </div>
          </div>
        </SlideScaleChange>
      </div>
    );
  }
);
