import { AnimatePresence, motion } from "framer-motion";
import { FC } from "react";
import { ModalProps } from "../types/Props";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const overlay = css`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 10;
`;

const modalWrapper = css`
  position: relative;
  padding: 1em;
  margin: 3em;
  background: #f2f0e9;
  z-index: 11;
`;

export const Modal: FC<ModalProps> = ({ openModal, onClose, children }) => {
  return (
    <AnimatePresence>
      {openModal && (
        <motion.div
          key="modal"
          initial={{ opacity: 0, zIndex: 2, position: "relative" }}
          animate={{ opacity: 1, zIndex: 2, position: "relative" }}
          exit={{ opacity: 0 }}
        >
          <div css={overlay} onClick={onClose} />
          <div css={modalWrapper}>{children}</div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
