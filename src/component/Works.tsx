import React, { useState } from "react";
import { forwardRef } from "react";
import { WorksProps } from "../types/Props";
import { SlideScaleChange } from "../hooks/useSlideScaleChange";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { common } from "../styles/common";
import { motion } from "framer-motion";
import { Modal } from "../hooks/useModal";
import { Carousel } from "../hooks/useCarousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark, faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { worksData, modalsData } from "../data/PortfolioData"

const worksWrapperPC = css`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 0 auto;
  max-width: 1080px;
  padding: 1.25em;
`;

const worksWrapperSP = css`
  margin: 0 auto;
  padding: 1.25em;
`;

const workWrapper = css`
  text-align: center;
`;

const workImg = css`
  cursor: pointer;
  width: 18.75em;
  box-shadow: 0 0.3em 0.9em 0 rgba(0, 0, 0, 0.25);
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
  background-color: #f2f0e9;
  padding: 0 0.5em;
  z-index: 2;
`;

const modalContainerPC = css`
  display: flex;
  justify-content: space-between;
`;

const modalCloseBtnPC = css`
  position: absolute;
  top: 0;
  right: 0.5em;
  font-size: 1.5em;
  cursor: pointer;
  color: #333;
  z-index: 1;
`;

const modalCloseBtnSP = css`
  position: absolute;
  top: 0;
  right: 0.3em;
  font-size: 2.2em;
  color: #333;
  z-index: 1;
`;

const modalTextAreaPC = css`
  width: 35%;
`;

const modalTextAreaSP = css`
  width: 100%;
`

const modalImageAreaPC = css`
  width: 55%;
  text-align: center;
`;

const modalImageAreaSP = css`
  width: 100%;
  padding: 1em 0;
  text-align: center;
`;

const headlineIconStyle = css`
  font-size: .9em;
  margin-right: 0.3em;
`

const marginTop = css`
  margin-top: .5em;
`

export const Works = forwardRef<HTMLDivElement, WorksProps>(
  ({ id, isIntersecting, isDesktop, openModals, setopenModals }, ref) => {
    const onClickChangeModal = (index: number) => {
      const modalInfoArr = openModals.map((modal, idx) => {
        return idx === index ? !modal : modal;
      })

      setopenModals(modalInfoArr)
    };

    return (
      <div id={id} ref={ref} css={isDesktop ? common.wrapperPC : common.wrapperSP}>
        <SlideScaleChange isIntersecting={isIntersecting}>
          <div css={isDesktop ? common.contentWrapperPC : common.contentWrapperSP}>
            <div css={isDesktop ? worksWrapperPC : worksWrapperSP}>
              {!isDesktop &&
                <h2 css={common.headlineTitleSP}><FontAwesomeIcon icon={faBriefcase} css={headlineIconStyle} />Works</h2>
              }
              {worksData.map((data, index) => {
                return(
                  <div key={data.id} css={data.id === 1 && !isDesktop ? [workWrapper, marginTop] : workWrapper}>
                    <motion.img
                      whileHover={{ scale: 1.1 }}
                      css={workImg}
                      src={data.img}
                      alt={data.alt}
                      onClick={() => onClickChangeModal(index)}
                    />
                    <div css={workTitle}>{data.title}</div>
                  </div>
                )
              })}
            </div>
            {modalsData.map((modal, index) => {
              return (
                <Modal key={modal.id} index={index} openModals={openModals} onClose={() => onClickChangeModal(index)}>
                  <div css={isDesktop ? modalCloseBtnPC : modalCloseBtnSP} onClick={() => onClickChangeModal(index)}>
                    <FontAwesomeIcon icon={faCircleXmark} />
                  </div>
                  <div css={isDesktop ? modalContainerPC : ''}>
                    <div css={isDesktop ? modalTextAreaPC : modalTextAreaSP}>
                      <div>
                        <div css={modalTitleWrapper}>
                          <h4 css={modalTitle}>
                            <span css={modalTitleText}>{modal.siteTitle}</span>
                          </h4>
                        </div>
                        <p>{modal.siteDescription}</p>
                      </div>
                      <div>
                        <div css={[modalTitleWrapper, marginTop]}>
                          <h4 css={modalTitle}>
                            <span css={modalTitleText}>使用言語など</span>
                          </h4>
                        </div>
                        <p>{modal.languageDescription}</p>
                      </div>
                    </div>
                    <div css={isDesktop ? modalImageAreaPC : modalImageAreaSP}>
                      <Carousel carouselItems={modal.Images}/>
                    </div>
                  </div>
                </Modal>
              )
            })}
          </div>
        </SlideScaleChange>
      </div>
    );
  }
);
