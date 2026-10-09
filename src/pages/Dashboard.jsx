import { Link } from 'react-router-dom'
import { useApp } from '../context/AppContext'
import Card from '../components/ui/Card'
import EmptyState from '../components/ui/EmptyState'
import { DIAS_SEMANA, diaDaSemana, formatarData, hojeISO } from '../utils/datas'
import { calcularFrequencia, statusFrequencia } from '../utils/frequencia'

function Dashboard() {
  const { perfil, disciplinas, aulas, provas, atividades, presencas, avisos, limiteFrequencia } =
    useApp()

  const hoje = hojeISO()
  const nome = (id) => disciplinas.find((d) => d.id === id)
  const cor = (id) => nome(id)?.cor

  const aulasHoje = aulas
    .filter((a) => a.diaSemana === diaDaSemana(hoje))
    .sort((a, b) => a.horario.localeCompare(b.horario))

  const proximasProvas = provas
    .filter((p) => p.data >= hoje)
    .sort((a, b) => a.data.localeCompare(b.data))
    .slice(0, 3)

  const pendentes = atividades
    .filter((a) => !a.concluida)
    .sort((a, b) => a.entrega.localeCompare(b.entrega))
    .slice(0, 4)

  const avisosNaoLidos = avisos.filter((a) => !a.lido).slice(0, 3)

  const alertas = disciplinas
    .map((d) => {
      const percentual = calcularFrequencia(presencas, d.id)
      return { disciplina: d, percentual, status: statusFrequencia(percentual, limiteFrequencia) }
    })
    .filter((f) => f.status !== 'ok')

  const semDados = disciplinas.length === 0

  return (
    <div className="page">
      <div>
        <h1>Olá{perfil?.nome ? `, ${perfil.nome}` : ''}!</h1>
        <p className="page__subtitulo">
          {DIAS_SEMANA[diaDaSemana(hoje)]}, {formatarData(hoje)}
        </p>
      </div>

      {semDados && (
        <EmptyState>
          Comece cadastrando suas disciplinas em <Link to="/disciplinas">Disciplinas</Link>.
        </EmptyState>
      )}

      {alertas.length > 0 && (
        <Card title="Alertas de frequência">
          <ul className="lista">
            {alertas.map(({ disciplina, percentual, status }) => (
              <li key={disciplina.id} className="item" style={{ '--cor': disciplina.cor }}>
                <span className="item__titulo">{disciplina.nome}</span>
                <span className={`badge badge--${status}`}>{percentual}% de frequência</span>
              </li>
            ))}
          </ul>
        </Card>
      )}

      <div className="grid-cards">
        <Card title="Aulas de hoje">
          {aulasHoje.length === 0 ? (
            <EmptyState>Sem aulas hoje.</EmptyState>
          ) : (
            <ul className="lista">
              {aulasHoje.map((a) => (
                <li key={a.id} className="item" style={{ '--cor': cor(a.disciplinaId) }}>
                  <span className="item__titulo">{nome(a.disciplinaId)?.nome}</span>
                  <span className="item__detalhe">{a.horario}</span>
                </li>
              ))}
            </ul>
          )}
          <Link className="link-ver-mais" to="/grade">
            Ver grade completa
          </Link>
        </Card>

        <Card title="Próximas provas">
          {proximasProvas.length === 0 ? (
            <EmptyState>Nenhuma prova marcada.</EmptyState>
          ) : (
            <ul className="lista">
              {proximasProvas.map((p) => (
                <li key={p.id} className="item" style={{ '--cor': cor(p.disciplinaId) }}>
                  <span className="item__titulo">{nome(p.disciplinaId)?.nome}</span>
                  <span className="item__detalhe">{formatarData(p.data)}</span>
                </li>
              ))}
            </ul>
          )}
          <Link className="link-ver-mais" to="/provas">
            Ver todas as provas
          </Link>
        </Card>

        <Card title="Atividades pendentes">
          {pendentes.length === 0 ? (
            <EmptyState>Tudo em dia por aqui.</EmptyState>
          ) : (
            <ul className="lista">
              {pendentes.map((a) => (
                <li
                  key={a.id}
                  className={`item ${a.entrega < hoje ? 'item--atrasada' : ''}`}
                  style={{ '--cor': cor(a.disciplinaId) }}
                >
                  <span className="item__titulo">{a.titulo}</span>
                  <span className="item__detalhe">{formatarData(a.entrega)}</span>
                </li>
              ))}
            </ul>
          )}
          <Link className="link-ver-mais" to="/atividades">
            Ver todas as atividades
          </Link>
        </Card>

        <Card title="Avisos recentes">
          {avisosNaoLidos.length === 0 ? (
            <EmptyState>Nenhum aviso novo.</EmptyState>
          ) : (
            <ul className="lista">
              {avisosNaoLidos.map((a) => (
                <li key={a.id} className="item item--destaque">
                  <span className="item__titulo">{a.titulo}</span>
                  <span className="item__detalhe">{formatarData(a.data)}</span>
                </li>
              ))}
            </ul>
          )}
          <Link className="link-ver-mais" to="/avisos">
            Ver todos os avisos
          </Link>
        </Card>
      </div>
    </div>
  )
}

export default Dashboard
