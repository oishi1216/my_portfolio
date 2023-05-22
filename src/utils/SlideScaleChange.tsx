import React, { FC, ReactNode, useEffect } from 'react';
import { motion, useAnimation } from "framer-motion";

type Props = {
    children: ReactNode;
    isIntersecting: boolean;
}

export const SlideScaleChange: FC<Props> = ({ children, isIntersecting }) => {
    const control = useAnimation();
    const scaleChange = {
        reduction: {
            height: '80%',
            width: '80%',
            fontSize: "1.4vh",
        },
        enlargement: {
            height: '100%',
            width: '100%',
            fontSize: "2vh",
        }
    }

    useEffect(() => {
        if(!isIntersecting) {
            control.start("reduction");
        } else {
            control.start("enlargement");
        }
    }, [isIntersecting])

    return(
        <motion.div initial='enlargement' animate={control} variants={scaleChange}>{ children }</motion.div>
    );
}