import React, { useEffect } from "react";
import { forwardRef } from "react";
import { ContainerProps } from "../types/Props";
import { SlideScaleChange } from "../utils/SlideScaleChange";
import { Particle } from "../hooks/Particle";
import { motion, useAnimationControls } from "framer-motion";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { common } from "../styles/common";

const siteNameWrapper = css`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const siteName = css`
  text-align: center;
  color: #333;
  font-family: "Capriola";
`;

export const Home = forwardRef<HTMLDivElement, ContainerProps>(
  ({ id, isIntersecting }, ref) => {
    const controls = useAnimationControls();
    const textAnimation = {
      init: {
        color: "transparent",
        textShadow: "0 0 100px #333, 0 0 100px #333",
        opacity: 0,
      },
    };

    useEffect(() => {
      controls.start((i) => ({
        textShadow: [
          "0 0 90px #333, 0 0 90px #333",
          "0 0 3px #333, 0 0 3px #333",
          "0 0 0 #333",
        ],
        opacity: [0, 1, 1],
        transition: {
          ease: "linear",
          duration: 3,
          delay: i * 0.1,
        },
      }));
    }, []);

    return (
      <div id={id} ref={ref} css={common.wrapper}>
        <SlideScaleChange
          isIntersecting={isIntersecting}
        >
          <div css={common.contentWrapper}>
            <Particle />
            <div css={siteNameWrapper}>
              <div css={siteName}>
                <h1
                  css={css`
                    font-size: 3rem;
                  `}
                >
                  <motion.span
                    custom={0}
                    initial="init"
                    animate={controls}
                    variants={textAnimation}
                  >
                    JUNJI
                  </motion.span>{" "}
                  <motion.span
                    custom={1}
                    initial="init"
                    animate={controls}
                    variants={textAnimation}
                  >
                    OISHI
                  </motion.span>
                </h1>
                <h2
                  css={css`
                    font-size: 2rem;
                  `}
                >
                  <motion.span
                    custom={2}
                    initial="init"
                    animate={controls}
                    variants={textAnimation}
                  >
                    Portfolio
                  </motion.span>{" "}
                  <motion.span
                    custom={3}
                    initial="init"
                    animate={controls}
                    variants={textAnimation}
                  >
                    Sites
                  </motion.span>
                </h2>
              </div>
            </div>
          </div>
        </SlideScaleChange>
      </div>
    );
  }
);
