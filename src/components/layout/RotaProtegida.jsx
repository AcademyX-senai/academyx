import { Navigate, Outlet } from 'react-router-dom'
import { useApp } from '../../context/AppContext'

function RotaProtegida() {
  const { contaLogada } = useApp()
  return contaLogada ? <Outlet /> : <Navigate to="/login" replace />
}

export default RotaProtegida
