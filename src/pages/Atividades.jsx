import { useState } from 'react'
import { useApp } from '../context/AppContext'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import Field from '../components/ui/Field'
import EmptyState from '../components/ui/EmptyState'
import { formatarData, hojeISO } from '../utils/datas'

const formVazio = { titulo: '', disciplinaId: '', entrega: '' }

function Atividades() {
  const { disciplinas, atividades, setAtividades } = useApp()
  const [form, setForm] = useState(formVazio)
  const [editandoId, setEditandoId] = useState(null)
  const [erro, setErro] = useState('')

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  function handleSubmit(e) {
    e.preventDefault()
    if (!form.titulo.trim() || !form.disciplinaId || !form.entrega) {
      setErro('Preencha título, disciplina e data de entrega.')
      return
    }
    const dados = { ...form, disciplinaId: Number(form.disciplinaId) }
    if (editandoId) {
      setAtividades(atividades.map((a) => (a.id === editandoId ? { ...a, ...dados } : a)))
    } else {
      setAtividades([...atividades, { ...dados, id: Date.now(), concluida: false }])
    }
    cancelar()
  }

  function editar(atividade) {
    setForm({
      titulo: atividade.titulo,
      disciplinaId: String(atividade.disciplinaId),
      entrega: atividade.entrega,
    })
    setEditandoId(atividade.id)
  }

  function cancelar() {
    setForm(formVazio)
    setEditandoId(null)
    setErro('')
  }

  function alternarConclusao(id) {
    setAtividades(atividades.map((a) => (a.id === id ? { ...a, concluida: !a.concluida } : a)))
  }

  function excluir(id) {
    if (window.confirm('Excluir esta atividade?')) {
      setAtividades(atividades.filter((a) => a.id !== id))
    }
  }

  const hoje = hojeISO()
  const ordenadas = [...atividades].sort((a, b) => {
    if (a.concluida !== b.concluida) return a.concluida ? 1 : -1
    return a.entrega.localeCompare(b.entrega)
  })

  return (
    <div className="page">
      <h1>Atividades</h1>

      <Card title={editandoId ? 'Editar atividade' : 'Nova atividade'}>
        {disciplinas.length === 0 ? (
          <EmptyState>Cadastre uma disciplina antes de registrar atividades.</EmptyState>
        ) : (
          <form onSubmit={handleSubmit} noValidate>
            <div className="form-grid">
              <Field label="Título" error={erro}>
                <input name="titulo" value={form.titulo} onChange={handleChange} />
              </Field>
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
              <Field label="Data de entrega">
                <input type="date" name="entrega" value={form.entrega} onChange={handleChange} />
              </Field>
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

      <Card title="Minhas atividades">
        {ordenadas.length === 0 ? (
          <EmptyState>Nenhuma atividade cadastrada.</EmptyState>
        ) : (
          <ul className="lista">
            {ordenadas.map((a) => {
              const d = disciplinas.find((x) => x.id === a.disciplinaId)
              const atrasada = !a.concluida && a.entrega < hoje
              const classe = a.concluida ? 'item--concluida' : atrasada ? 'item--atrasada' : ''
              return (
                <li key={a.id} className={`item ${classe}`} style={{ '--cor': d?.cor }}>
                  <div className="item__info">
                    <span className="item__titulo">
                      {a.titulo} {atrasada && <span className="badge badge--risco">Atrasada</span>}
                    </span>
                    <span className="item__detalhe">
                      {d?.nome} · entrega em {formatarData(a.entrega)}
                    </span>
                  </div>
                  <div className="item__acoes">
                    <Button
                      variant={a.concluida ? 'secondary' : 'success'}
                      onClick={() => alternarConclusao(a.id)}
                    >
                      {a.concluida ? 'Reabrir' : 'Concluir'}
                    </Button>
                    <Button variant="secondary" onClick={() => editar(a)}>
                      Editar
                    </Button>
                    <Button variant="danger" onClick={() => excluir(a.id)}>
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

export default Atividades
