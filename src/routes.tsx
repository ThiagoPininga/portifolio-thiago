import { Routes, Route } from 'react-router-dom'

import MainPage from './pages/Main'
import HomePage from './pages/Main/home'
import SoftSkillsPage from './pages/Main/soft-skills'
import HardSkillsPage from './pages/Main/hard-skill'
import ProjetosPage from './pages/Main/projetos'
import ContatoPage from './pages/Main/contato'

export function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<MainPage />}>
        <Route path='/' element={<HomePage/>}/>
        <Route path='soft-skills' element={<SoftSkillsPage/>}/>
        <Route path='hard-skills' element={<HardSkillsPage/>}/>
        <Route path='projetos' element={<ProjetosPage/>}/>
        <Route path='contato' element={<ContatoPage/>}/>
      </Route>
    </Routes>

  )
}
