import React, { memo } from 'react';
import { FC } from "react";
import { motion } from "framer-motion";
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

type Props = {
    currentTab: string,
    isIntersecting: boolean;
}

const header = css`
    display: flex;
    position: fixed;
    z-index: 1;
    justify-content: center;
    width: 100%;
    height: 4rem;
    background-color: #F2F0E9;
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

const listStyle = css`
    text-align: center;
    line-height: 3;
    height: 4rem;
    width: calc(100% / 5);
`

const linkStyle = css`
    display: block;
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
    &:hover {
        background-color: rgba(0, 0, 0, 0.1);
    }
`

const headerText = css`
    position: relative;
    z-index: 2;
`

export const Header: FC<Props> = memo(({ currentTab, isIntersecting }) => {
    const tabChange = {
        inactive: {
            y: '100%',
            transition: {
                duration: .2,
            },
        },
        active: {
            y: '-94%',
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

    const navLists: { text: string; link: string; class: string }[] = [
        { text: 'Home', link: '#home', class: 'home' },
        { text: 'About', link: '#about', class: 'about' },
        { text: 'Skills', link: '#skills', class: 'skills' },
        { text: 'Works', link: '#works', class: 'works' },
        { text: 'Contact', link: '#contact', class: 'contact' },
    ]
    return(
        <header css={header}>
            <nav css={nav}>
                <ul css={headerNavWrapper}>
                    {navLists.map((item, index) => {
                        return (
                            <li key={index} css={listStyle}>
                                <a href={item.link} css={linkStyle}>
                                    <motion.span
                                        css={headerText}
                                        style={ currentTab === item.class ? { color: "#fff" } : { color: "#555" }}
                                        animate={!isIntersecting ? "inactive" : currentTab === item.class ? "active" : "inactive"}
                                        variants={colorChange}
                                        >{item.text}
                                    </motion.span>
                                    <motion.span
                                        style={ currentTab === item.class ? { display: "inline-block", backgroundColor: "#333", width: "100%", height: "100%", y: "-94%",} : { display: "inline-block", backgroundColor: "#333", width: "100%", height: "100%", y: "100%"}}
                                        animate={!isIntersecting ? "inactive" : currentTab === item.class ? "active" : "inactive"}
                                        variants={tabChange}
                                    ></motion.span>
                                </a>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </header>
    )
})