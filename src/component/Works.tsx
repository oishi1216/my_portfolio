import React, { useState } from "react";
import { forwardRef } from "react";
import { WorksProps } from "../types/Props";
import { SlideScaleChange } from "../utils/SlideScaleChange";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { common } from "../styles/common";
import portfolio from "../assets/portfolio.png";
import { motion } from "framer-motion";
import { Modal } from "../hooks/Modal";

const worksWrapper = css`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 0 auto;
  max-width: 1080px;
  padding: 1.25em;
`;

const workWrapper = css`
  text-align: center;
`;

const workImg = css`
  cursor: pointer;
  width: 18.75em;
  box-shadow: 0 .3em .9em 0 rgba(0, 0, 0, 0.25);
`;

const workTitle = css`
  margin-top: 0.8em;
`;

const modalTitleWrapper = css`
  text-align: center;
`;

const modalTitle = css`
  position: relative;
  &:before {
    content: "";
    display: block;
    border-top: solid .001em; #000;
    width: 100%;
    position: absolute;
    top: 50%;
    z-index: 1;
  }
`;

const modalTitleText = css`
    position: relative;
    color: #333;
    font-size: 1.5em;
    background-color: #F2F0E9;
    padding: 0 .5em;
    z-index: 2;
`

const modalTextArea = css`
  width: 35%;
`;

const modalImageArea = css`
  width: 65%;
`;

export const Works = forwardRef<HTMLDivElement, WorksProps>(
  (
    { id, isIntersecting, openModal, setOpenModal },
    ref
  ) => {
    const onClickChangeModal = () => {
      setOpenModal(true);
    };

    return (
      <div id={id} ref={ref} css={common.wrapper}>
        <SlideScaleChange
          isIntersecting={isIntersecting}
        >
          <div css={common.contentWrapper}>
            <div css={worksWrapper}>
              <div css={workWrapper}>
                <motion.img
                  whileHover={{ scale: 1.1 }}
                  css={workImg}
                  src={portfolio}
                  alt="ポートフォリオサイト"
                  onClick={onClickChangeModal}
                />
                <div css={workTitle}>Portfolio Sites</div>
              </div>
            </div>
            <Modal openModal={openModal} onClose={() => setOpenModal(false)}>
              <div>
                <div css={modalTextArea}>
                  <div>
                    <div css={modalTitleWrapper}>
                      <h4 css={modalTitle}><span css={modalTitleText}>Portfolio Sites</span></h4>
                    </div>
                    <p>このページです。ReactとTypeScriptで作成しております。HOMEの雪のアニメーションはparticles.jsを使用し、それ以外のアニメーションはframer-motionで実装しています。</p>
                  </div>
                  <div>
                    <div css={modalTitleWrapper}>
                      <h4 css={modalTitle}><span css={modalTitleText}>使用言語など</span></h4>
                    </div>
                    <p>HTML/CSS, React, TypeScript, emotion, framer-motion, particles.js</p>
                  </div>
                </div>
                <div css={modalImageArea}></div>
              </div>
            </Modal>
          </div>
        </SlideScaleChange>
      </div>
    );
  }
);
