import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useApp } from '../context/AppContext'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import Field from '../components/ui/Field'

function Perfil() {
  const { perfil, setPerfil } = useApp()
  const navigate = useNavigate()
  const [form, setForm] = useState({
    nome: perfil?.nome ?? '',
    curso: perfil?.curso ?? '',
    instituicao: perfil?.instituicao ?? '',
  })
  const [erros, setErros] = useState({})

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  function validar() {
    const novos = {}
    if (!form.nome.trim()) novos.nome = 'Informe seu nome.'
    if (!form.curso.trim() && !form.instituicao.trim()) {
      novos.curso = 'Informe o curso ou a instituição.'
    }
    return novos
  }

  function handleSubmit(e) {
    e.preventDefault()
    const novos = validar()
    setErros(novos)
    if (Object.keys(novos).length > 0) return
    setPerfil({
      nome: form.nome.trim(),
      curso: form.curso.trim(),
      instituicao: form.instituicao.trim(),
    })
    navigate('/')
  }

  return (
    <div className="page">
      <h1>Perfil do estudante</h1>

      <Card title={perfil ? 'Meus dados' : 'Primeiro acesso'}>
        <form onSubmit={handleSubmit} noValidate>
          <div className="form-grid">
            <Field label="Nome" error={erros.nome}>
              <input name="nome" value={form.nome} onChange={handleChange} />
            </Field>
            <Field label="Curso" error={erros.curso}>
              <input name="curso" value={form.curso} onChange={handleChange} />
            </Field>
            <Field label="Instituição">
              <input name="instituicao" value={form.instituicao} onChange={handleChange} />
            </Field>
          </div>
          <div className="form-acoes">
            <Button type="submit">Salvar perfil</Button>
          </div>
        </form>
      </Card>
    </div>
  )
}

export default Perfil
