export const DIAS_SEMANA = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']

export function paraISO(data) {
  const ano = data.getFullYear()
  const mes = String(data.getMonth() + 1).padStart(2, '0')
  const dia = String(data.getDate()).padStart(2, '0')
  return `${ano}-${mes}-${dia}`
}

export function deISO(dataISO) {
  return new Date(`${dataISO}T00:00:00`)
}

export function formatarData(dataISO) {
  const [ano, mes, dia] = dataISO.split('-')
  return `${dia}/${mes}/${ano}`
}

export function hojeISO() {
  return paraISO(new Date())
}

export function diaDaSemana(dataISO) {
  return deISO(dataISO).getDay()
}

export function somarDias(dataISO, dias) {
  const data = deISO(dataISO)
  data.setDate(data.getDate() + dias)
  return paraISO(data)
}

export function diasAte(dataISO) {
  const diferenca = deISO(dataISO) - deISO(hojeISO())
  return Math.round(diferenca / (1000 * 60 * 60 * 24))
}
