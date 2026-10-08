export const DIAS_SEMANA = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']

export function formatarData(dataISO) {
  const [ano, mes, dia] = dataISO.split('-')
  return `${dia}/${mes}/${ano}`
}

export function hojeISO() {
  return new Date().toISOString().slice(0, 10)
}

export function diasAte(dataISO) {
  const hoje = new Date(hojeISO())
  const alvo = new Date(dataISO)
  return Math.round((alvo - hoje) / (1000 * 60 * 60 * 24))
}
