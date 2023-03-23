import React from 'react';
import { Header } from './component/Header'
import './App.css'
import { FC, useEffect, useRef, useState } from 'react'
import { Home } from './component/Home'
import { About } from './component/About'
import { Skills } from './component/Skills'
import { Works } from './component/Works'
import { Contact } from './component/Contact'
import { useIntersectionObserver } from './hooks/useIntersectionObserver'

const App: FC = () => {
  const [ currentTab, setCurrentTab ] = useState<string>('home')

  const screenRef = useRef<HTMLDivElement>(null)
  const homeRef = useRef<HTMLDivElement>(null)
  const aboutRef = useRef<HTMLDivElement>(null)
  const skillsRef = useRef<HTMLDivElement>(null)
  const worksRef = useRef<HTMLDivElement>(null)
  const contactRef = useRef<HTMLDivElement>(null)

  const activeCurrentTab = (entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      console.log(entry)
      if (entry.isIntersecting) {
        setCurrentTab(entry.target.id)
      }
    })
  }

  useEffect(() => {
    screenRef.current!.onwheel = event => {
      event.preventDefault()
      let delta = (event.deltaY / Math.abs(event.deltaY)) * window.innerWidth
      if (delta > 0) {
          delta += Math.ceil(screenRef.current!.scrollLeft)
          delta = Math.floor (delta / window.innerWidth) * window.innerWidth
      } else {
          delta += screenRef.current!.scrollLeft
          delta = Math.ceil (delta / window.innerWidth) * window.innerWidth
      }
      screenRef.current!.scrollLeft = delta
    }
  }, [])

    useIntersectionObserver([homeRef, aboutRef, skillsRef, worksRef, contactRef], activeCurrentTab, { root: null, rootMargin: "0px", threshold: 1.0 });

  return (
    <>
      <div ref={screenRef} className='screen'>
        <div className='container'>
          <Header currentTab={currentTab} />
          <Home ref={homeRef} id='home' currentTab={currentTab} />
          <About ref={aboutRef} id='about' />
          <Skills ref={skillsRef} id='skills' />
          <Works ref={worksRef} id='works' />
          <Contact ref={contactRef} id='contact' />
        </div>
      </div>
    </>
  )
}

export default App
