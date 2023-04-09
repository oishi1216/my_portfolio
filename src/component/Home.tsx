import React, { useEffect } from 'react';
import { forwardRef } from "react";
import { ContainerProps } from '../types/Props';
import { SlideScaleChange } from '../utils/SlideScaleChange';
import { Particle } from './Particle';
import { motion, useAnimationControls } from "framer-motion";

export const Home = forwardRef<HTMLDivElement, ContainerProps>(({ id, isIntersecting } , ref) => {
    const controls = useAnimationControls();
    const textAnimation = {
        init : {
            color: "transparent",
            textShadow: "0 0 100px #fff, 0 0 100px #fff",
            opacity: 0,
        },
    }

    useEffect(() => {
        controls.start(i => ({
            textShadow: ["0 0 90px #fff, 0 0 90px #fff", "0 0 3px #fff, 0 0 3px #fff", "0 0 0 #fff"],
            opacity: [0, 1, 1],
            transition: {
                ease: "linear",
                duration: 3,
                delay: i * 0.1
            },
        }))
    }, [])


    return(
        <div id={id} ref={ref} className='wrapper'>
            <SlideScaleChange isIntersecting={isIntersecting}>
                <div className='homeContainer'>
                    <Particle />
                    <div className='siteNameWrapper'>
                        <div className='siteName'>
                            <h1><motion.span custom={0} initial='init' animate={controls} variants={textAnimation}>JUNJI</motion.span> <motion.span custom={1} initial='init' animate={controls} variants={textAnimation}>OISHI</motion.span></h1>
                            <h2><motion.span custom={2} initial='init' animate={controls} variants={textAnimation}>Portfolio</motion.span> <motion.span custom={3} initial='init' animate={controls} variants={textAnimation}>Sites</motion.span></h2>
                        </div>
                    </div>
                </div>
            </SlideScaleChange>
        </div>
    )
});