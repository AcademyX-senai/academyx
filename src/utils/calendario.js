import { diaDaSemana } from './datas'

// Junta aulas, provas e atividades de um dia em uma lista única de eventos.
export function eventosDoDia(dataISO, { disciplinas, aulas, provas, atividades }, filtroDisciplinaId) {
  const cor = (id) => disciplinas.find((d) => d.id === id)?.cor
  const nome = (id) => disciplinas.find((d) => d.id === id)?.nome ?? ''

  const eventos = [
    ...aulas
      .filter((a) => a.diaSemana === diaDaSemana(dataISO))
      .map((a) => ({
        id: `aula-${a.id}`,
        tipo: 'aula',
        disciplinaId: a.disciplinaId,
        titulo: nome(a.disciplinaId),
        horario: a.horario,
        cor: cor(a.disciplinaId),
      })),
    ...provas
      .filter((p) => p.data === dataISO)
      .map((p) => ({
        id: `prova-${p.id}`,
        tipo: 'prova',
        disciplinaId: p.disciplinaId,
        titulo: `Prova: ${nome(p.disciplinaId)}`,
        horario: p.horario,
        cor: cor(p.disciplinaId),
      })),
    ...atividades
      .filter((a) => a.entrega === dataISO)
      .map((a) => ({
        id: `atividade-${a.id}`,
        tipo: 'atividade',
        disciplinaId: a.disciplinaId,
        titulo: `Entrega: ${a.titulo}`,
        horario: '',
        cor: cor(a.disciplinaId),
      })),
  ]

  return eventos
    .filter((e) => !filtroDisciplinaId || e.disciplinaId === filtroDisciplinaId)
    .sort((a, b) => a.horario.localeCompare(b.horario))
}
