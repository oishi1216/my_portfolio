import React, { memo } from 'react';
import { FC, useState } from "react";

type Props = {
    currentTab: string
}

export const Header: FC<Props> = memo(({ currentTab }) => {

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
                        return <li key={index}><a href={item.link} className={currentTab === item.class ? 'active': ''}>{item.text}</a></li>
                    })}
                </ul>
            </nav>
        </header>
    )
})