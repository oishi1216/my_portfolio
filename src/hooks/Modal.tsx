import { AnimatePresence, motion } from "framer-motion";
import { FC } from "react";
import { ModalProps } from "../types/Props";
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const overlay = css`
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: 10;
`

const modalWrapper = css`
    position: absolute;
    left: 50%;
    right: 50%;
    width: 200px;
    height: 200px;
    border-radius: 8px;
    padding: 10px;
    background: #F2F0E9;
    z-index: 11;
    transform: translateX(-50%);
`

export const Modal: FC<ModalProps> = ({ openModal, onClose, children }) => {
    return (
        <AnimatePresence>
            {openModal && (
                <motion.div
                    key="modal"
                    initial={{ opacity: 0, zIndex: 2, position: "relative"}}
                    animate={{ opacity: 1, zIndex: 2, position: "relative"}}
                    exit={{ opacity: 0 }}
                >
                    <div css={overlay} onClick={onClose} />
                    <div css={modalWrapper}>{children}</div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};