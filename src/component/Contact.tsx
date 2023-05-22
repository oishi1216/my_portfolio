import React from "react";
import { forwardRef } from "react";
import { ContainerProps } from "../types/Props";
import { SlideScaleChange } from "../utils/SlideScaleChange";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { common } from "../styles/common";

export const Contact = forwardRef<HTMLDivElement, ContainerProps>(
  ({ id, isIntersecting }, ref) => {
    return (
      <div id={id} ref={ref} css={common.wrapper}>
        <SlideScaleChange
          isIntersecting={isIntersecting}
        >
          <div css={common.contentWrapper}></div>
        </SlideScaleChange>
      </div>
    );
  }
);
