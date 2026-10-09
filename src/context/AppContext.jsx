import { createContext, useContext } from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage'
import {
  disciplinasExemplo,
  aulasExemplo,
  provasExemplo,
  atividadesExemplo,
  presencasExemplo,
  avisosExemplo,
  contasExemplo,
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
  const [contas, setContas] = useLocalStorage('academix:contas', contasExemplo)
  const [contaLogada, setContaLogada] = useLocalStorage('academix:sessao', null)

  // Retornam uma mensagem de erro, ou null quando deu certo.
  function cadastrar(email, senha) {
    if (contas.some((c) => c.email === email)) return 'E-mail já cadastrado.'
    const nova = { id: Date.now(), email, senha }
    setContas([...contas, nova])
    setContaLogada(nova)
    return null
  }

  function entrar(email, senha) {
    // A conta de demonstração sempre funciona, mesmo que o navegador já tenha contas salvas.
    const conta = [...contasExemplo, ...contas].find((c) => c.email === email && c.senha === senha)
    if (!conta) return 'E-mail ou senha incorretos.'
    setContaLogada(conta)
    return null
  }

  function sair() {
    setContaLogada(null)
  }

  const valor = {
    contas, setContas,
    contaLogada, setContaLogada,
    cadastrar, entrar, sair,
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
