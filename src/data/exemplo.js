export const disciplinasExemplo = [
  { id: 1, nome: 'Matemática', professor: 'Carla Mendes', sala: '101', cor: '#3882f6' },
  { id: 2, nome: 'Programação Web', professor: 'Rafael Lima', sala: 'Lab 2', cor: '#16a34a' },
  { id: 3, nome: 'Banco de Dados', professor: 'Ana Souza', sala: '204', cor: '#f59e0b' },
]

export const aulasExemplo = [
  { id: 1, disciplinaId: 1, diaSemana: 1, horario: '08:00' },
  { id: 2, disciplinaId: 2, diaSemana: 2, horario: '10:00' },
  { id: 3, disciplinaId: 3, diaSemana: 3, horario: '08:00' },
]

export const provasExemplo = [
  { id: 1, disciplinaId: 1, data: '2026-11-10', horario: '08:00', conteudo: 'Funções e limites' },
]

export const atividadesExemplo = [
  { id: 1, disciplinaId: 2, titulo: 'Projeto de landing page', entrega: '2026-11-05', concluida: false },
]

export const presencasExemplo = []

export const avisosExemplo = [
  { id: 1, titulo: 'Semana de provas', texto: 'As provas começam na próxima semana.', data: '2026-10-30', lido: false },
]
