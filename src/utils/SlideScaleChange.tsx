import React, { FC, ReactNode } from 'react';
import { animate, motion } from "framer-motion";

type Props = {
    children: ReactNode;
    currentTab: string;
}

export const SlideScaleChange: FC<Props> = ({ children, currentTab }) => {
    const scaleChange = {
        initial: {
            height: '80vh',
            width: '80vw'
        },
        animate: {
            height: 'calc(100vh - 4rem)',
            width: '100vw'
        }
    }

    return(
        <motion.div initial='initial' animate='animate' variants={scaleChange}>{ children }</motion.div>
    );
}