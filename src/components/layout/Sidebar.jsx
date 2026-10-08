import { NavLink } from 'react-router-dom'
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
    </nav>
  )
}

export default Sidebar
