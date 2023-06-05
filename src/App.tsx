import React from "react";
import { Header } from "./component/Header";
import "./App.css";
import { FC, useEffect, useRef, useState } from "react";
import { Home } from "./component/Home";
import { About } from "./component/About";
import { Skills } from "./component/Skills";
import { Works } from "./component/Works";
import { Contact } from "./component/Contact";
import { useIntersectionObserver } from "./hooks/useIntersectionObserver";
/** @jsxImportSource @emotion/react */
import { Global, css } from "@emotion/react";
import { common } from "./styles/common";
import { style } from "./styles/global";

const App: FC = () => {
  const [currentTab, setCurrentTab] = useState<string>("home");
  const [isIntersecting, setIsIntersecting] = useState<boolean>(true);
  const [openModals, setopenModals] = useState<Array<boolean>>([false]);

  const screenRef = useRef<HTMLDivElement>(null);
  const homeRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const worksRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const activeCurrentTab = (entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      setIsIntersecting(entry.isIntersecting);
      if (entry.isIntersecting) {
        setCurrentTab(entry.target.id);
      }
    });
  };

  useEffect(() => {
    screenRef.current!.onwheel = (event) => {
      if (openModals) {
        event.preventDefault();
      } else {
        event.preventDefault();
        let delta = (event.deltaY / Math.abs(event.deltaY)) * window.innerWidth;
        if (delta > 0) {
          delta += Math.ceil(screenRef.current!.scrollLeft);
          delta = Math.floor(delta / window.innerWidth) * window.innerWidth;
        } else {
          delta += Math.floor(screenRef.current!.scrollLeft);
          delta = Math.ceil(delta / window.innerWidth) * window.innerWidth;
        }
        screenRef.current!.scrollLeft = delta;
      }
    };
  }, [openModals]);

  useIntersectionObserver(
    [contactRef, worksRef, skillsRef, aboutRef, homeRef],
    activeCurrentTab,
    { root: null, rootMargin: "0px", threshold: 0.98 }
  );

  return (
    <>
      <Global styles={style} />
      <div ref={screenRef} css={common.screen}>
        <div css={common.container}>
          <Header
            currentTab={currentTab}
            isIntersecting={isIntersecting}
          />
          <Home
            ref={homeRef}
            id="home"
            isIntersecting={isIntersecting}
          />
          <About
            ref={aboutRef}
            id="about"
            isIntersecting={isIntersecting}
          />
          <Skills
            ref={skillsRef}
            id="skills"
            isIntersecting={isIntersecting}
          />
          <Works
            ref={worksRef}
            id="works"
            isIntersecting={isIntersecting}
            openModals={openModals}
            setopenModals={setopenModals}
          />
          <Contact
            ref={contactRef}
            id="contact"
            isIntersecting={isIntersecting}
          />
        </div>
      </div>
    </>
  );
};

export default App;
