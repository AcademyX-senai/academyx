import { useState } from 'react'
import { useApp } from '../context/AppContext'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import Field from '../components/ui/Field'
import EmptyState from '../components/ui/EmptyState'
import { DIAS_SEMANA, diaDaSemana, hojeISO } from '../utils/datas'

function Presenca() {
  const { disciplinas, aulas, presencas, setPresencas } = useApp()
  const [data, setData] = useState(hojeISO())

  const aulasDoDia = aulas
    .filter((a) => a.diaSemana === diaDaSemana(data))
    .sort((a, b) => a.horario.localeCompare(b.horario))

  const buscarRegistro = (aulaId) => presencas.find((p) => p.aulaId === aulaId && p.data === data)

  function registrar(aula, presente) {
    const semEste = presencas.filter((p) => !(p.aulaId === aula.id && p.data === data))
    setPresencas([
      ...semEste,
      { id: Date.now(), aulaId: aula.id, disciplinaId: aula.disciplinaId, data, presente },
    ])
  }

  function limpar(aulaId) {
    setPresencas(presencas.filter((p) => !(p.aulaId === aulaId && p.data === data)))
  }

  return (
    <div className="page">
      <h1>Registro de presença</h1>

      <Card>
        <div className="form-grid">
          <Field label="Data">
            <input type="date" value={data} onChange={(e) => setData(e.target.value)} />
          </Field>
          <p className="page__subtitulo">{data && DIAS_SEMANA[diaDaSemana(data)]}</p>
        </div>
      </Card>

      <Card title="Aulas do dia">
        {aulasDoDia.length === 0 ? (
          <EmptyState>Nenhuma aula cadastrada para este dia da semana.</EmptyState>
        ) : (
          <ul className="lista">
            {aulasDoDia.map((aula) => {
              const d = disciplinas.find((x) => x.id === aula.disciplinaId)
              const registro = buscarRegistro(aula.id)
              return (
                <li key={aula.id} className="item" style={{ '--cor': d?.cor }}>
                  <div className="item__info">
                    <span className="item__titulo">{d?.nome}</span>
                    <span className="item__detalhe">
                      {aula.horario}{' '}
                      {registro && (
                        <span className={`badge ${registro.presente ? 'badge--ok' : 'badge--risco'}`}>
                          {registro.presente ? 'Presente' : 'Faltou'}
                        </span>
                      )}
                    </span>
                  </div>
                  <div className="item__acoes">
                    <Button
                      variant={registro?.presente === true ? 'success' : 'secondary'}
                      onClick={() => registrar(aula, true)}
                    >
                      Presença
                    </Button>
                    <Button
                      variant={registro?.presente === false ? 'danger' : 'secondary'}
                      onClick={() => registrar(aula, false)}
                    >
                      Falta
                    </Button>
                    {registro && (
                      <Button variant="secondary" onClick={() => limpar(aula.id)}>
                        Limpar
                      </Button>
                    )}
                  </div>
                </li>
              )
            })}
          </ul>
        )}
      </Card>
    </div>
  )
}

export default Presenca
