import React from "react";
import { forwardRef } from "react";
import { ContainerProps } from "../types/Props";
import { SlideScaleChange } from "../hooks/useSlideScaleChange";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { common } from "../styles/common";
import portrait from "../assets/character_program_happy.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faUser} from "@fortawesome/free-solid-svg-icons";

const aboutWrapperPC = css`
  padding: 2em 1.25em 1em;
  width: 80%;
  max-width: 1080px;
  margin: 0 auto;
`

const aboutWrapperSP = css`
  padding: 0 1em;
  width: 100%;
  margin: 0 auto;
`

const descriptionWrapperPC = css`
  display: flex;
  justify-content: center;
`

const textStyle = css`
  line-height: 1.5;
`

const imageWrapper = css`
  text-align: center;
`

const imageStyle = css`
  width: 15em;
`

const linkStyle = css`
  color: inherit;
  text-decoration: underline;

  &:hover {
    text-decoration: none;
  }
`

const ulStyle = css`
  margin-top: 1em;
`

export const About = forwardRef<HTMLDivElement, ContainerProps>(
  ({ id, isIntersecting, isDesktop }, ref) => {
    return (
      <div id={id} ref={ref} css={isDesktop ? common.wrapperPC : common.wrapperVariableSP}>
        <SlideScaleChange
          isIntersecting={isIntersecting}
        >
          <div css={isDesktop ? common.contentWrapperPC : common.contentWrapperSP}>
            <div css={isDesktop ? aboutWrapperPC : aboutWrapperSP}>
              <div css={isDesktop ? descriptionWrapperPC : ''}>
                {!isDesktop &&
                  <div>
                    <h2 css={common.headlineTitleSP}><FontAwesomeIcon icon={faUser} css={common.headlineIconSP} />About Me</h2>
                    <div css={imageWrapper}>
                      <img src={portrait} alt="自画像" css={imageStyle}/>
                    </div>
                  </div>
                }
                <div>
                  <p css={textStyle}>テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</p>
                  <ul css={ulStyle}>
                    <li>Github: <a href="https://github.com/oishi1216" css={linkStyle}>https://github.com/oishi1216</a></li>
                    <li>Qiita: <a href="https://qiita.com/oishi1216" css={linkStyle}>https://qiita.com/oishi1216</a></li>
                  </ul>
                </div>
                <div css={imageWrapper}>
                  {isDesktop && <img src={portrait} alt="自画像" css={imageStyle}/>}
                </div>
              </div>
            </div>
          </div>
        </SlideScaleChange>
      </div>
    );
  }
);
