import React, { FC, ReactNode, useEffect } from 'react';
import { motion, useAnimation } from "framer-motion";

type Props = {
    children: ReactNode;
    currentTab: string;
}

export const SlideScaleChange: FC<Props> = ({ children, currentTab }) => {
    const control = useAnimation();
    const scaleChange = {
        reduction: {
            height: '80%',
            width: '80%'
        },
        enlargement: {
            height: '100%',
            width: '100%'
        }
    }

    useEffect(() => {
        console.log(currentTab)
        if(!currentTab) {
            control.start("reduction");
        } else {
            control.start("enlargement");
        }
    }, [currentTab])

    return(
        <motion.div initial='enlargement' animate={control} variants={scaleChange}>{ children }</motion.div>
    );
}