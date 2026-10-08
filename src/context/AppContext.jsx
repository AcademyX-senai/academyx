import { createContext, useContext } from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage'
import {
  disciplinasExemplo,
  aulasExemplo,
  provasExemplo,
  atividadesExemplo,
  presencasExemplo,
  avisosExemplo,
} from '../data/exemplo'
import { LIMITE_PADRAO } from '../utils/frequencia'

const AppContext = createContext(null)

export function AppProvider({ children }) {
  const [perfil, setPerfil] = useLocalStorage('academix:perfil', null)
  const [disciplinas, setDisciplinas] = useLocalStorage('academix:disciplinas', disciplinasExemplo)
  const [aulas, setAulas] = useLocalStorage('academix:aulas', aulasExemplo)
  const [provas, setProvas] = useLocalStorage('academix:provas', provasExemplo)
  const [atividades, setAtividades] = useLocalStorage('academix:atividades', atividadesExemplo)
  const [presencas, setPresencas] = useLocalStorage('academix:presencas', presencasExemplo)
  const [avisos, setAvisos] = useLocalStorage('academix:avisos', avisosExemplo)
  const [limiteFrequencia, setLimiteFrequencia] = useLocalStorage('academix:limite', LIMITE_PADRAO)

  const valor = {
    perfil, setPerfil,
    disciplinas, setDisciplinas,
    aulas, setAulas,
    provas, setProvas,
    atividades, setAtividades,
    presencas, setPresencas,
    avisos, setAvisos,
    limiteFrequencia, setLimiteFrequencia,
  }

  return <AppContext.Provider value={valor}>{children}</AppContext.Provider>
}

export function useApp() {
  const contexto = useContext(AppContext)
  if (!contexto) throw new Error('useApp precisa estar dentro de AppProvider')
  return contexto
}
