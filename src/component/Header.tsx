import React, { memo } from 'react';
import { FC } from "react";
import { motion } from "framer-motion";

type Props = {
    currentTab: string,
    isIntersecting: boolean;
}

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
        <header className="header">
            <nav>
                <ul className="headerNavWrapper">
                    {navLists.map((item, index) => {
                        return (
                            <li key={index}>
                                <a href={item.link}>
                                    <motion.span
                                        className='headerText'
                                        style={ currentTab === item.class ? { color: "#fff", zIndex: 2 } : { color: "#555", zIndex: 2 }}
                                        animate={!isIntersecting ? currentTab === item.class ? "inactive" : "" : currentTab === item.class ? "active" : ""}
                                        variants={colorChange}
                                        >{item.text}
                                    </motion.span>
                                    <motion.span
                                        style={ currentTab === item.class ? { display: "inline-block", backgroundColor: "royalblue", width: "100%", height: "100%", y: "-94%",} : { display: "inline-block", backgroundColor: "royalblue", width: "100%", height: "100%", y: "100%"}}
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