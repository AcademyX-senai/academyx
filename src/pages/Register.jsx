import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useApp } from '../context/AppContext'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import Field from '../components/ui/Field'
import './Auth.css'

function Register() {
  const { cadastrar } = useApp()
  const navigate = useNavigate()
  const [form, setForm] = useState({ email: '', senha: '', confirmacao: '' })
  const [erros, setErros] = useState({})

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  function validar() {
    const novos = {}
    if (!form.email.includes('@')) novos.email = 'Informe um e-mail válido.'
    if (form.senha.length < 6) novos.senha = 'A senha deve ter pelo menos 6 caracteres.'
    if (form.confirmacao !== form.senha) novos.confirmacao = 'As senhas não coincidem.'
    return novos
  }

  function handleSubmit(e) {
    e.preventDefault()
    const novos = validar()
    if (Object.keys(novos).length > 0) {
      setErros(novos)
      return
    }
    const mensagem = cadastrar(form.email.trim(), form.senha)
    if (mensagem) {
      setErros({ email: mensagem })
      return
    }
    navigate('/perfil')
  }

  return (
    <div className="auth">
      <Card title="Criar conta" className="auth__card">
        <form onSubmit={handleSubmit} noValidate className="auth__form">
          <Field label="E-mail" error={erros.email}>
            <input type="email" name="email" value={form.email} onChange={handleChange} />
          </Field>
          <Field label="Senha" error={erros.senha}>
            <input type="password" name="senha" value={form.senha} onChange={handleChange} />
          </Field>
          <Field label="Confirmar senha" error={erros.confirmacao}>
            <input
              type="password"
              name="confirmacao"
              value={form.confirmacao}
              onChange={handleChange}
            />
          </Field>
          <Button type="submit">Criar conta</Button>
        </form>
        <p className="auth__rodape">
          Já tem conta? <Link to="/login">Entrar</Link>
        </p>
      </Card>
    </div>
  )
}

export default Register
