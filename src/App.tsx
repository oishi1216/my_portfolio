import { Header } from './component/Header'
import './App.css'
import { FC, useEffect, useRef } from 'react'
import { Home } from './component/Home'
import { About } from './component/About'
import { Skills } from './component/Skills'
import { Works } from './component/Works'
import { Contact } from './component/Contact'

const App: FC = () => {

  const screenRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        screenRef.current!.onwheel = event => {
          console.log(event)
          event.preventDefault()

            let delta = (event.deltaY / Math.abs(event.deltaY)) * window.innerWidth
            if (delta > 0) {
                delta += screenRef.current!.scrollLeft
                delta = Math.floor(delta / window.innerWidth) * window.innerWidth
            } else {
                delta += screenRef.current!.scrollLeft
                delta = Math.ceil(delta / window.innerWidth) * window.innerWidth
            }
            screenRef.current!.scrollLeft = delta
        }
    }, [])

  return (
    <>
      <div ref={screenRef} className='screen'>
        <div className='container'>
          <Header />
          <Home />
          <About />
          <Skills />
          <Works />
          <Contact />
        </div>
      </div>
    </>
  )
}

export default App
