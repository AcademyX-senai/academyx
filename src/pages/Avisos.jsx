import { useState } from 'react'
import { useApp } from '../context/AppContext'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import Field from '../components/ui/Field'
import EmptyState from '../components/ui/EmptyState'
import { formatarData, hojeISO } from '../utils/datas'

function Avisos() {
  const { avisos, setAvisos } = useApp()
  const [form, setForm] = useState({ titulo: '', texto: '', data: hojeISO() })
  const [erro, setErro] = useState('')

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  function handleSubmit(e) {
    e.preventDefault()
    if (!form.titulo.trim() || !form.texto.trim()) {
      setErro('Informe o título e o texto do aviso.')
      return
    }
    setAvisos([...avisos, { ...form, id: Date.now(), lido: false }])
    setForm({ titulo: '', texto: '', data: hojeISO() })
    setErro('')
  }

  function alternarLido(id) {
    setAvisos(avisos.map((a) => (a.id === id ? { ...a, lido: !a.lido } : a)))
  }

  function excluir(id) {
    if (window.confirm('Excluir este aviso?')) {
      setAvisos(avisos.filter((a) => a.id !== id))
    }
  }

  const ordenados = [...avisos].sort((a, b) => {
    if (a.lido !== b.lido) return a.lido ? 1 : -1
    return b.data.localeCompare(a.data)
  })

  return (
    <div className="page">
      <h1>Avisos</h1>

      <Card title="Novo aviso">
        <form onSubmit={handleSubmit} noValidate>
          <div className="form-grid">
            <Field label="Título" error={erro}>
              <input name="titulo" value={form.titulo} onChange={handleChange} />
            </Field>
            <Field label="Data">
              <input type="date" name="data" value={form.data} onChange={handleChange} />
            </Field>
            <div className="form-grid__largo">
              <Field label="Texto">
                <textarea name="texto" rows="3" value={form.texto} onChange={handleChange} />
              </Field>
            </div>
          </div>
          <div className="form-acoes">
            <Button type="submit">Adicionar aviso</Button>
          </div>
        </form>
      </Card>

      <Card title="Meus avisos">
        {ordenados.length === 0 ? (
          <EmptyState>Nenhum aviso cadastrado.</EmptyState>
        ) : (
          <ul className="lista">
            {ordenados.map((a) => (
              <li key={a.id} className={`item ${a.lido ? 'item--concluida' : 'item--destaque'}`}>
                <div className="item__info">
                  <span className="item__titulo">
                    {a.titulo} {!a.lido && <span className="badge badge--alerta">Novo</span>}
                  </span>
                  <span className="item__detalhe">{formatarData(a.data)}</span>
                  <span>{a.texto}</span>
                </div>
                <div className="item__acoes">
                  <Button variant="secondary" onClick={() => alternarLido(a.id)}>
                    {a.lido ? 'Marcar como não lido' : 'Marcar como lido'}
                  </Button>
                  <Button variant="danger" onClick={() => excluir(a.id)}>
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

export default Avisos
