import { useState } from 'react'
import { useApp } from '../context/AppContext'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import Field from '../components/ui/Field'
import EmptyState from '../components/ui/EmptyState'
import { DIAS_SEMANA } from '../utils/datas'
import './Grade.css'

const diasUteis = [1, 2, 3, 4, 5, 6]

function Grade() {
  const { disciplinas, aulas, setAulas } = useApp()
  const [form, setForm] = useState({ disciplinaId: '', diaSemana: '1', horario: '' })
  const [erro, setErro] = useState('')

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  function handleSubmit(e) {
    e.preventDefault()
    if (!form.disciplinaId || !form.horario) {
      setErro('Escolha a disciplina e o horário.')
      return
    }
    const conflito = aulas.some(
      (a) => a.diaSemana === Number(form.diaSemana) && a.horario === form.horario,
    )
    if (conflito) {
      setErro('Já existe uma aula nesse dia e horário.')
      return
    }
    setAulas([
      ...aulas,
      {
        id: Date.now(),
        disciplinaId: Number(form.disciplinaId),
        diaSemana: Number(form.diaSemana),
        horario: form.horario,
      },
    ])
    setForm({ ...form, horario: '' })
    setErro('')
  }

  function excluir(id) {
    if (window.confirm('Remover esta aula da grade?')) {
      setAulas(aulas.filter((a) => a.id !== id))
    }
  }

  const buscarDisciplina = (id) => disciplinas.find((d) => d.id === id)

  return (
    <div className="page">
      <h1>Grade de horários</h1>

      <Card title="Nova aula">
        {disciplinas.length === 0 ? (
          <EmptyState>Cadastre uma disciplina antes de montar a grade.</EmptyState>
        ) : (
          <form onSubmit={handleSubmit} noValidate>
            <div className="form-grid">
              <Field label="Disciplina">
                <select name="disciplinaId" value={form.disciplinaId} onChange={handleChange}>
                  <option value="">Selecione</option>
                  {disciplinas.map((d) => (
                    <option key={d.id} value={d.id}>
                      {d.nome}
                    </option>
                  ))}
                </select>
              </Field>
              <Field label="Dia da semana">
                <select name="diaSemana" value={form.diaSemana} onChange={handleChange}>
                  {diasUteis.map((n) => (
                    <option key={n} value={n}>
                      {DIAS_SEMANA[n]}
                    </option>
                  ))}
                </select>
              </Field>
              <Field label="Horário" error={erro}>
                <input type="time" name="horario" value={form.horario} onChange={handleChange} />
              </Field>
            </div>
            <div className="form-acoes">
              <Button type="submit">Adicionar à grade</Button>
            </div>
          </form>
        )}
      </Card>

      <Card title="Semana">
        <div className="grade">
          {diasUteis.map((dia) => {
            const doDia = aulas
              .filter((a) => a.diaSemana === dia)
              .sort((a, b) => a.horario.localeCompare(b.horario))
            return (
              <div key={dia} className="grade__dia">
                <h3 className="grade__titulo">{DIAS_SEMANA[dia]}</h3>
                {doDia.length === 0 && <p className="item__detalhe">Sem aulas</p>}
                {doDia.map((aula) => {
                  const d = buscarDisciplina(aula.disciplinaId)
                  return (
                    <div key={aula.id} className="grade__aula" style={{ '--cor': d?.cor }}>
                      <strong>{aula.horario}</strong>
                      <span>{d?.nome}</span>
                      <button
                        className="grade__remover"
                        onClick={() => excluir(aula.id)}
                        aria-label={`Remover aula de ${d?.nome}`}
                      >
                        ×
                      </button>
                    </div>
                  )
                })}
              </div>
            )
          })}
        </div>
      </Card>
    </div>
  )
}

export default Grade
