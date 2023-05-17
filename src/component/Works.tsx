import React, { useState } from 'react';
import { forwardRef } from "react";
import { ContainerProps } from '../types/Props';
import { SlideScaleChange } from '../utils/SlideScaleChange';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { common } from '../styles/common';
import portfolio from '../assets/portfolio.png';
import { motion } from "framer-motion";
import { Modal } from '../hooks/Modal';

const worksWrapper = css`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin: 0 auto;
    max-width: 1080px;
    padding: 1.25em .625em .625em;
`

const workWrapper = css`
    text-align: center;
`

const workImg = css`
    cursor: pointer;
    width: 18.75em;
    box-shadow: 0px 5px 15px 0px rgba(0, 0, 0, 0.25);
`

const workTitle = css`
    margin-top: 14px;
`

export const Works = forwardRef<HTMLDivElement, ContainerProps>(({ id, isIntersecting } , ref) => {
    const [ openModal, setOpenModal ] = useState([false, false, false, false])
    const [isVisible, setIsVisible] = useState(false);

    const onClickChangeModal = () => {
        console.log("a");
        setIsVisible(true)
    }

    return(
        <div id={id} ref={ref} css={common.wrapper}>
            <SlideScaleChange isIntersecting={isIntersecting}>
                <div css={common.contentWrapper}>
                    <div css={worksWrapper}>
                        <div css={workWrapper}>
                            <motion.img whileHover={{scale: 1.1}} css={workImg} src={portfolio} alt="ポートフォリオサイト" onClick={onClickChangeModal}/>
                            <div css={workTitle}>Portfolio Sites</div>
                        </div>
                    </div>
                    <Modal isVisible={isVisible} onClose={() => setIsVisible(false)}>
                        <div>Modal</div>
                    </Modal>
                </div>
            </SlideScaleChange>
        </div>
    )
});