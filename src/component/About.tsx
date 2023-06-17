import React from "react";
import { forwardRef } from "react";
import { ContainerProps } from "../types/Props";
import { SlideScaleChange } from "../hooks/useSlideScaleChange";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { common } from "../styles/common";
import portrait from "../assets/character_program_happy.png"

const aboutWrapper = css`
  padding: 2em 1.25em 1em;
  width: 80%;
  max-width: 1080px;
  margin: 0 auto;
`

const descriptionWrapper = css`
  display: flex;
  justify-content: center;
`

const textStyle = css`
  line-height: 1.5;
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

export const About = forwardRef<HTMLDivElement, ContainerProps>(
  ({ id, isIntersecting }, ref) => {
    return (
      <div id={id} ref={ref} css={common.wrapper}>
        <SlideScaleChange
          isIntersecting={isIntersecting}
        >
          <div css={common.contentWrapper}>
            <div css={aboutWrapper}>
              <div css={descriptionWrapper}>
                <div>
                  <p css={textStyle}>テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</p>
                  <ul>
                    <li>Github: <a href="https://github.com/oishi1216" css={linkStyle}>https://github.com/oishi1216</a></li>
                    <li>Qiita: <a href="https://qiita.com/oishi1216" css={linkStyle}>https://qiita.com/oishi1216</a></li>
                  </ul>
                </div>
                <img src={portrait} alt="自画像" css={imageStyle}/>
              </div>
            </div>
          </div>
        </SlideScaleChange>
      </div>
    );
  }
);
