import { useApp } from '../context/AppContext'
import Card from '../components/ui/Card'
import Field from '../components/ui/Field'
import EmptyState from '../components/ui/EmptyState'
import { calcularFrequencia, statusFrequencia } from '../utils/frequencia'
import './Frequencia.css'

const textoStatus = { ok: 'Em dia', alerta: 'Atenção', risco: 'Em risco' }

function Frequencia() {
  const { disciplinas, presencas, limiteFrequencia, setLimiteFrequencia } = useApp()

  function alterarLimite(e) {
    const valor = Number(e.target.value)
    if (valor >= 0 && valor <= 100) setLimiteFrequencia(valor)
  }

  return (
    <div className="page">
      <h1>Frequência por disciplina</h1>

      <Card>
        <div className="form-grid">
          <Field label="Frequência mínima (%)">
            <input
              type="number"
              min="0"
              max="100"
              value={limiteFrequencia}
              onChange={alterarLimite}
            />
          </Field>
        </div>
      </Card>

      {disciplinas.length === 0 ? (
        <EmptyState>Cadastre disciplinas e registre presenças para ver a frequência.</EmptyState>
      ) : (
        <div className="grid-cards">
          {disciplinas.map((d) => {
            const registros = presencas.filter((p) => p.disciplinaId === d.id)
            const faltas = registros.filter((p) => !p.presente).length
            const percentual = calcularFrequencia(presencas, d.id)
            const status = statusFrequencia(percentual, limiteFrequencia)
            return (
              <Card key={d.id} title={d.nome}>
                <p className="frequencia__percentual">{percentual}%</p>
                <div className="frequencia__barra">
                  <div
                    className={`frequencia__preenchimento frequencia__preenchimento--${status}`}
                    style={{ width: `${percentual}%` }}
                  />
                </div>
                <p className="item__detalhe">
                  {registros.length} {registros.length === 1 ? 'aula registrada' : 'aulas registradas'} ·{' '}
                  {faltas} {faltas === 1 ? 'falta' : 'faltas'}
                </p>
                <span className={`badge badge--${status}`}>{textoStatus[status]}</span>
              </Card>
            )
          })}
        </div>
      )}
    </div>
  )
}

export default Frequencia
