import { Route, Routes } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Dashboard from './pages/Dashboard'
import Perfil from './pages/Perfil'
import Disciplinas from './pages/Disciplinas'
import Grade from './pages/Grade'
import Provas from './pages/Provas'
import Atividades from './pages/Atividades'
import Presenca from './pages/Presenca'
import Frequencia from './pages/Frequencia'
import Avisos from './pages/Avisos'
import Calendario from './pages/Calendario'

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path="perfil" element={<Perfil />} />
        <Route path="disciplinas" element={<Disciplinas />} />
        <Route path="grade" element={<Grade />} />
        <Route path="provas" element={<Provas />} />
        <Route path="atividades" element={<Atividades />} />
        <Route path="presenca" element={<Presenca />} />
        <Route path="frequencia" element={<Frequencia />} />
        <Route path="avisos" element={<Avisos />} />
        <Route path="calendario" element={<Calendario />} />
      </Route>
    </Routes>
  )
}

export default App
