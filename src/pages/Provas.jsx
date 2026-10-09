import { useState } from 'react'
import { useApp } from '../context/AppContext'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import Field from '../components/ui/Field'
import EmptyState from '../components/ui/EmptyState'
import { formatarData, hojeISO } from '../utils/datas'

const formVazio = { disciplinaId: '', data: '', horario: '', conteudo: '' }

function Provas() {
  const { disciplinas, provas, setProvas } = useApp()
  const [form, setForm] = useState(formVazio)
  const [editandoId, setEditandoId] = useState(null)
  const [erro, setErro] = useState('')

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  function handleSubmit(e) {
    e.preventDefault()
    if (!form.disciplinaId || !form.data) {
      setErro('Escolha a disciplina e a data da prova.')
      return
    }
    const dados = { ...form, disciplinaId: Number(form.disciplinaId) }
    if (editandoId) {
      setProvas(provas.map((p) => (p.id === editandoId ? { ...p, ...dados } : p)))
    } else {
      setProvas([...provas, { ...dados, id: Date.now() }])
    }
    cancelar()
  }

  function editar(prova) {
    setForm({
      disciplinaId: String(prova.disciplinaId),
      data: prova.data,
      horario: prova.horario,
      conteudo: prova.conteudo,
    })
    setEditandoId(prova.id)
  }

  function cancelar() {
    setForm(formVazio)
    setEditandoId(null)
    setErro('')
  }

  function excluir(id) {
    if (window.confirm('Excluir esta prova?')) {
      setProvas(provas.filter((p) => p.id !== id))
    }
  }

  const hoje = hojeISO()
  const ordenadas = [...provas].sort((a, b) => a.data.localeCompare(b.data))

  return (
    <div className="page">
      <h1>Provas</h1>

      <Card title={editandoId ? 'Editar prova' : 'Nova prova'}>
        {disciplinas.length === 0 ? (
          <EmptyState>Cadastre uma disciplina antes de registrar provas.</EmptyState>
        ) : (
          <form onSubmit={handleSubmit} noValidate>
            <div className="form-grid">
              <Field label="Disciplina" error={erro}>
                <select name="disciplinaId" value={form.disciplinaId} onChange={handleChange}>
                  <option value="">Selecione</option>
                  {disciplinas.map((d) => (
                    <option key={d.id} value={d.id}>
                      {d.nome}
                    </option>
                  ))}
                </select>
              </Field>
              <Field label="Data">
                <input type="date" name="data" value={form.data} onChange={handleChange} />
              </Field>
              <Field label="Horário">
                <input type="time" name="horario" value={form.horario} onChange={handleChange} />
              </Field>
              <div className="form-grid__largo">
                <Field label="Conteúdo">
                  <textarea name="conteudo" rows="2" value={form.conteudo} onChange={handleChange} />
                </Field>
              </div>
            </div>
            <div className="form-acoes">
              <Button type="submit">{editandoId ? 'Salvar alterações' : 'Adicionar'}</Button>
              {editandoId && (
                <Button variant="secondary" onClick={cancelar}>
                  Cancelar
                </Button>
              )}
            </div>
          </form>
        )}
      </Card>

      <Card title="Próximas provas">
        {ordenadas.length === 0 ? (
          <EmptyState>Nenhuma prova cadastrada.</EmptyState>
        ) : (
          <ul className="lista">
            {ordenadas.map((p) => {
              const d = disciplinas.find((x) => x.id === p.disciplinaId)
              const passada = p.data < hoje
              return (
                <li
                  key={p.id}
                  className={`item ${passada ? 'item--passada' : ''}`}
                  style={{ '--cor': d?.cor }}
                >
                  <div className="item__info">
                    <span className="item__titulo">
                      {d?.nome} {passada && <span className="badge">Realizada</span>}
                    </span>
                    <span className="item__detalhe">
                      {formatarData(p.data)} {p.horario && `às ${p.horario}`}
                    </span>
                    {p.conteudo && <span className="item__detalhe">{p.conteudo}</span>}
                  </div>
                  <div className="item__acoes">
                    <Button variant="secondary" onClick={() => editar(p)}>
                      Editar
                    </Button>
                    <Button variant="danger" onClick={() => excluir(p.id)}>
                      Excluir
                    </Button>
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

export default Provas
