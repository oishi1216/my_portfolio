import { Header } from './component/Header'
import './App.css'
import { FC } from 'react'
import { Home } from './component/Home'
import { About } from './component/About'
import { Skills } from './component/Skills'
import { Works } from './component/Works'
import { Contact } from './component/Contact'

const App: FC = () => {
  return (
    <>
      <Header />
      <Home />
      <About />
      <Skills />
      <Works />
      <Contact />
    </>
  )
}

export default App
