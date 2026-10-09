import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useApp } from '../context/AppContext'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import Field from '../components/ui/Field'
import './Auth.css'

function Login() {
  const { entrar } = useApp()
  const navigate = useNavigate()
  const [form, setForm] = useState({ email: '', senha: '' })
  const [erro, setErro] = useState('')

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  function handleSubmit(e) {
    e.preventDefault()
    if (!form.email.trim() || !form.senha) {
      setErro('Informe e-mail e senha.')
      return
    }
    const mensagem = entrar(form.email.trim(), form.senha)
    if (mensagem) {
      setErro(mensagem)
      return
    }
    navigate('/')
  }

  return (
    <div className="auth">
      <Card title="Entrar no AcademiX" className="auth__card">
        <form onSubmit={handleSubmit} noValidate className="auth__form">
          <Field label="E-mail">
            <input type="email" name="email" value={form.email} onChange={handleChange} />
          </Field>
          <Field label="Senha" error={erro}>
            <input type="password" name="senha" value={form.senha} onChange={handleChange} />
          </Field>
          <Button type="submit">Entrar</Button>
        </form>
        <p className="auth__rodape">
          Não tem conta? <Link to="/register">Criar conta</Link>
        </p>
      </Card>
    </div>
  )
}

export default Login
