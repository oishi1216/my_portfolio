import React, { memo, useState } from 'react';
import { FC } from "react";
import { motion, useAnimation } from "framer-motion";
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { HeaderProps } from '../types/Props';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

const headerPC = css`
    display: flex;
    position: fixed;
    z-index: 0;
    justify-content: center;
    width: 100%;
    height: 4rem;
    background-color: #F2F0E9;
`

const headerSP = css`
    display: flex;
    position: fixed;
    z-index: 1;
    align-items: center;
    justify-content: end;
    width: 100%;
    height: 4rem;
    padding: 0.5rem 1rem;
    background-color: #F2F0E9;
    border-bottom: 1px solid #333;
`

const nav = css`
    display: flex;
    justify-content: center;
    width: 100%;
`

const headerNavWrapper = css`
    display: flex;
    justify-content: space-between;
    width: 100%;
    max-width: 1080px;
`

const listStylePC = css`
    text-align: center;
    align-items: center;
    line-height: 4;
    height: 4rem;
    width: calc(100% / 5);
`

const listStyleSP = css`
    align-items: center;
    line-height: 4;
    height: 4rem;
    width: 100%;
    border-bottom: 1px solid #333;
`

const linkStylePC = css`
    display: block;
    vertical-align: middle;
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
    &:hover {
        background-color: rgba(0, 0, 0, 0.1);
    }
`

const linkStyleSP = css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    width: 100%;
    height: 100%;
    padding: 0 1rem;
`

const headerText = css`
    position: relative;
    z-index: 2;
`

const hambergarStyle = css`
    display: flex;
    flex-direction: column;
    row-gap: 0.4rem;
    height: auto;
`

const hambergarMenuStyle =css`
    position: fixed;
    z-index: 1;
    margin-top: 4rem;
    width: 100%;
    background-color: #F2F0E9;
    overflow: hidden;
`

export const Header: FC<HeaderProps> = memo(({ currentTab, isIntersecting, isDesktop }) => {
    const [accordionFlag, setAccordionFlag] = useState<boolean>(false);
    const control = useAnimation();

    const onClickHamburger = () => {
        if (accordionFlag) {
            control.start("close");
        } else {
            control.start("open");
        }
        setAccordionFlag(!accordionFlag);
    }

    const tabChange = {
        inactive: {
            y: '100%',
            transition: {
                duration: .2,
            },
        },
        active: {
            y: '-100%',
            transition: {
                duration: .2,
            },
        }
    }

    const colorChange = {
        inactive: {
            color: '#555',
        },
        active: {
            color: '#fff',
        }
    }

    const top = {
        open: {
            rotate: 45,
            y: '.75rem'
        },
        close: {
            rotate: 0,
            y: 0
        }
    }

    const center = {
        open: {
            opacity: 0,
        },
        close: {
            opacity: 1,
        }
    }

    const bottom = {
        open: {
            rotate: -45,
            y: '-.75rem'
        },
        close: {
            rotate: 0,
            y: 0
        }
    }

    const accordionControl = {
        open: {
            height: 'auto',
        },
        close: {
            height: '0',
        }
    }

    const navLists: { text: string; link: string; class: string }[] = [
        { text: 'Home', link: '#home', class: 'home' },
        { text: 'About', link: '#about', class: 'about' },
        { text: 'Skills', link: '#skills', class: 'skills' },
        { text: 'Works', link: '#works', class: 'works' },
        { text: 'Contact', link: '#contact', class: 'contact' },
    ]
    return(
        <>
            <header css={isDesktop ? headerPC : headerSP}>
                {
                    isDesktop ?
                        <nav css={nav}>
                            <ul css={headerNavWrapper}>
                                {navLists.map((item, index) => {
                                    return (
                                        <li key={index} css={listStylePC}>
                                            <a href={item.link} css={linkStylePC}>
                                                <motion.span
                                                    css={headerText}
                                                    style={ currentTab === item.class ? { color: "#fff" } : { color: "#555" }}
                                                    animate={!isIntersecting ? "inactive" : currentTab === item.class ? "active" : "inactive"}
                                                    variants={colorChange}
                                                    >{item.text}
                                                </motion.span>
                                                <motion.span
                                                    style={ currentTab === item.class ? { display: "inline-block", backgroundColor: "#333", width: "100%", height: "100%", y: "-100%",} : { display: "inline-block", backgroundColor: "#333", width: "100%", height: "100%", y: "100%"}}
                                                    animate={!isIntersecting ? "inactive" : currentTab === item.class ? "active" : "inactive"}
                                                    variants={tabChange}
                                                ></motion.span>
                                            </a>
                                        </li>
                                    )
                                })}
                            </ul>
                        </nav>
                    :
                        <div>
                            <button css={hambergarStyle} onClick={onClickHamburger}>
                                <motion.span style={{display: "inline-block", border: ".2rem solid #333", borderRadius: "4px", width: "2.5rem"}} animate={control} variants={top}></motion.span>
                                <motion.span style={{display: "inline-block", border: ".2rem solid #333", borderRadius: "4px", width: "2.5rem"}} animate={control} variants={center}></motion.span>
                                <motion.span style={{display: "inline-block", border: ".2rem solid #333", borderRadius: "4px", width: "2.5rem"}} animate={control} variants={bottom}></motion.span>
                            </button>
                        </div>
                }
            </header>
            { !isDesktop &&
                <motion.ul
                    initial='close'
                    animate={control}
                    transition={{ duration: .3 }}
                    variants={accordionControl}
                    css={hambergarMenuStyle}
                >
                    {navLists.map((item, index) => {
                        return (
                            <li key={index} css={listStyleSP}>
                                <a href={item.link} css={linkStyleSP} onClick={onClickHamburger}>
                                    <span css={headerText}>{item.text}</span>
                                    <FontAwesomeIcon icon={faChevronRight} />
                                </a>
                            </li>
                        )
                    })}
                </motion.ul>
            }
        </>
    )
})