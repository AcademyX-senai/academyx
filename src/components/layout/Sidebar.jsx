import { NavLink, useNavigate } from 'react-router-dom'
import { useApp } from '../../context/AppContext'
import Button from '../ui/Button'
import './Sidebar.css'

const links = [
  { to: '/', label: 'Painel' },
  { to: '/disciplinas', label: 'Disciplinas' },
  { to: '/grade', label: 'Grade de horários' },
  { to: '/provas', label: 'Provas' },
  { to: '/atividades', label: 'Atividades' },
  { to: '/presenca', label: 'Presença' },
  { to: '/frequencia', label: 'Frequência' },
  { to: '/avisos', label: 'Avisos' },
  { to: '/calendario', label: 'Calendário' },
  { to: '/perfil', label: 'Perfil' },
]

function Sidebar() {
  const { sair } = useApp()
  const navigate = useNavigate()

  function handleSair() {
    sair()
    navigate('/login')
  }

  return (
    <nav className="sidebar" aria-label="Navegação principal">
      <div className="sidebar__logo">AcademiX</div>
      <ul className="sidebar__lista">
        {links.map((link) => (
          <li key={link.to}>
            <NavLink to={link.to} end className="sidebar__link">
              {link.label}
            </NavLink>
          </li>
        ))}
      </ul>
      <div className="sidebar__sair">
        <Button variant="secondary" onClick={handleSair}>
          Sair
        </Button>
      </div>
    </nav>
  )
}

export default Sidebar
