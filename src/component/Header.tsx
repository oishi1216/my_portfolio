import React from 'react';
import { FC, useState } from "react";

type Props = {
    currentTab: string
}

export const Header: FC<Props> = ({ currentTab }) => {
    const [clicked, setClicked] = useState<number>(10);
    const onClickClassToggle = (index: number) => {
        setClicked(index)
    };

    const navLists: { text: string; link: string; }[] = [
        { text: 'Home', link: '#home' },
        { text: 'About', link: '#about' },
        { text: 'Skills', link: '#skills' },
        { text: 'Works', link: '#works' },
        { text: 'Contact', link: '#contact' },
    ]
    return(
        <header className="header">
            <nav>
                <ul className="headerNavWrapper">
                    {navLists.map((item, index) => {
                        return <li key={index}><a onClick={() => onClickClassToggle(index)} href={item.link} className={clicked === index ? 'active': ''}>{item.text}</a></li>
                    })}
                </ul>
            </nav>
        </header>
    )
}