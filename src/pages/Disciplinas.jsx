import { useState } from 'react'
import { useApp } from '../context/AppContext'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import Field from '../components/ui/Field'
import EmptyState from '../components/ui/EmptyState'

const formVazio = { nome: '', professor: '', sala: '', cor: '#3882f6' }

function Disciplinas() {
  const { disciplinas, setDisciplinas, setAulas, setProvas, setAtividades, setPresencas } = useApp()
  const [form, setForm] = useState(formVazio)
  const [editandoId, setEditandoId] = useState(null)
  const [erro, setErro] = useState('')

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  function handleSubmit(e) {
    e.preventDefault()
    if (!form.nome.trim()) {
      setErro('Informe o nome da disciplina.')
      return
    }
    if (editandoId) {
      setDisciplinas(disciplinas.map((d) => (d.id === editandoId ? { ...d, ...form } : d)))
    } else {
      setDisciplinas([...disciplinas, { ...form, id: Date.now() }])
    }
    cancelar()
  }

  function editar(disciplina) {
    setForm({
      nome: disciplina.nome,
      professor: disciplina.professor,
      sala: disciplina.sala,
      cor: disciplina.cor,
    })
    setEditandoId(disciplina.id)
  }

  function cancelar() {
    setForm(formVazio)
    setEditandoId(null)
    setErro('')
  }

  function excluir(disciplina) {
    const ok = window.confirm(
      `Excluir "${disciplina.nome}"? As aulas, provas, atividades e presenças dela também serão removidas.`,
    )
    if (!ok) return
    const daOutra = (item) => item.disciplinaId !== disciplina.id
    setDisciplinas(disciplinas.filter((d) => d.id !== disciplina.id))
    setAulas((lista) => lista.filter(daOutra))
    setProvas((lista) => lista.filter(daOutra))
    setAtividades((lista) => lista.filter(daOutra))
    setPresencas((lista) => lista.filter(daOutra))
  }

  return (
    <div className="page">
      <h1>Disciplinas</h1>

      <Card title={editandoId ? 'Editar disciplina' : 'Nova disciplina'}>
        <form onSubmit={handleSubmit} noValidate>
          <div className="form-grid">
            <Field label="Nome" error={erro}>
              <input name="nome" value={form.nome} onChange={handleChange} />
            </Field>
            <Field label="Professor">
              <input name="professor" value={form.professor} onChange={handleChange} />
            </Field>
            <Field label="Sala">
              <input name="sala" value={form.sala} onChange={handleChange} />
            </Field>
            <Field label="Cor">
              <input type="color" name="cor" value={form.cor} onChange={handleChange} />
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
      </Card>

      <Card title="Minhas disciplinas">
        {disciplinas.length === 0 ? (
          <EmptyState>Nenhuma disciplina cadastrada. Use o formulário acima para começar.</EmptyState>
        ) : (
          <ul className="lista">
            {disciplinas.map((d) => (
              <li key={d.id} className="item" style={{ '--cor': d.cor }}>
                <div className="item__info">
                  <span className="item__titulo">{d.nome}</span>
                  <span className="item__detalhe">
                    {d.professor || 'Sem professor'} · Sala {d.sala || '—'}
                  </span>
                </div>
                <div className="item__acoes">
                  <Button variant="secondary" onClick={() => editar(d)}>
                    Editar
                  </Button>
                  <Button variant="danger" onClick={() => excluir(d)}>
                    Excluir
                  </Button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </Card>
    </div>
  )
}

export default Disciplinas
