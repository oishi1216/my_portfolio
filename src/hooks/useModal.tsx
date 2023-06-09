import { AnimatePresence, motion } from "framer-motion";
import { FC } from "react";
import { ModalProps } from "../types/Props";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const modalContainer = css`
  position: fixed;
  z-index: 10;
`

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
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-width: 70%;
  padding: 2em 1.5em;
  background: #f2f0e9;
  border-radius: 5px;
  z-index: 11;
`;

export const Modal: FC<ModalProps> = ({ index, openModals, onClose, children }) => {
  return (
    <AnimatePresence>
      {openModals[index] && (
        <motion.div
          key="modal"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          css={modalContainer}
        >
          <div css={overlay} onClick={onClose} />
          <div css={modalWrapper}>{children}</div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
