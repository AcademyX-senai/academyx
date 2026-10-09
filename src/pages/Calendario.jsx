import { useState } from 'react'
import { useApp } from '../context/AppContext'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import Field from '../components/ui/Field'
import { DIAS_SEMANA, deISO, hojeISO, paraISO, somarDias } from '../utils/datas'
import { eventosDoDia } from '../utils/calendario'
import './Calendario.css'

const MESES = [
  'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
  'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro',
]

const ROTULO_TIPO = { aula: 'Aula', prova: 'Prova', atividade: 'Atividade' }

function Calendario() {
  const dados = useApp()
  const [visao, setVisao] = useState('semana')
  const [referencia, setReferencia] = useState(hojeISO())
  const [filtro, setFiltro] = useState('')

  const filtroId = filtro ? Number(filtro) : null
  const hoje = hojeISO()
  const refData = deISO(referencia)

  function dias() {
    if (visao === 'semana') {
      const inicio = somarDias(referencia, -refData.getDay())
      return Array.from({ length: 7 }, (_, i) => somarDias(inicio, i))
    }
    const primeiro = new Date(refData.getFullYear(), refData.getMonth(), 1)
    const total = new Date(refData.getFullYear(), refData.getMonth() + 1, 0).getDate()
    const vazios = Array.from({ length: primeiro.getDay() }, () => null)
    const doMes = Array.from({ length: total }, (_, i) =>
      paraISO(new Date(refData.getFullYear(), refData.getMonth(), i + 1)),
    )
    return [...vazios, ...doMes]
  }

  function mover(direcao) {
    if (visao === 'semana') {
      setReferencia(somarDias(referencia, direcao * 7))
    } else {
      setReferencia(paraISO(new Date(refData.getFullYear(), refData.getMonth() + direcao, 1)))
    }
  }

  const titulo =
    visao === 'semana'
      ? `Semana de ${somarDias(referencia, -refData.getDay()).split('-').reverse().slice(0, 2).join('/')}`
      : `${MESES[refData.getMonth()]} de ${refData.getFullYear()}`

  return (
    <div className="page">
      <h1>Calendário</h1>

      <Card>
        <div className="form-grid">
          <Field label="Visão">
            <select value={visao} onChange={(e) => setVisao(e.target.value)}>
              <option value="semana">Semanal</option>
              <option value="mes">Mensal</option>
            </select>
          </Field>
          <Field label="Disciplina">
            <select value={filtro} onChange={(e) => setFiltro(e.target.value)}>
              <option value="">Todas</option>
              {dados.disciplinas.map((d) => (
                <option key={d.id} value={d.id}>
                  {d.nome}
                </option>
              ))}
            </select>
          </Field>
        </div>
        <div className="calendario__navegacao">
          <Button variant="secondary" onClick={() => mover(-1)}>
            Anterior
          </Button>
          <strong>{titulo}</strong>
          <Button variant="secondary" onClick={() => mover(1)}>
            Próximo
          </Button>
        </div>
      </Card>

      <Card>
        <div className="calendario__legenda">
          <span className="badge">Aula</span>
          <span className="badge badge--alerta">Prova</span>
          <span className="badge badge--risco">Atividade</span>
        </div>
        <div className={`calendario calendario--${visao}`}>
          {visao === 'mes' &&
            DIAS_SEMANA.map((d) => (
              <div key={d} className="calendario__cabecalho">
                {d.slice(0, 3)}
              </div>
            ))}
          {dias().map((dia, i) =>
            dia === null ? (
              <div key={`vazio-${i}`} />
            ) : (
              <div
                key={dia}
                className={`calendario__dia ${dia === hoje ? 'calendario__dia--hoje' : ''}`}
              >
                <span className="calendario__numero">
                  {visao === 'semana' && `${DIAS_SEMANA[deISO(dia).getDay()].slice(0, 3)} `}
                  {Number(dia.slice(8))}
                </span>
                {eventosDoDia(dia, dados, filtroId).map((e) => (
                  <span
                    key={e.id}
                    className={`calendario__evento calendario__evento--${e.tipo}`}
                    style={{ '--cor': e.cor }}
                    title={`${ROTULO_TIPO[e.tipo]}: ${e.titulo}`}
                  >
                    {e.horario} {e.titulo}
                  </span>
                ))}
              </div>
            ),
          )}
        </div>
      </Card>
    </div>
  )
}

export default Calendario
