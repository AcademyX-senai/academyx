export const LIMITE_PADRAO = 75

export function calcularFrequencia(presencas, disciplinaId) {
  const registros = presencas.filter((p) => p.disciplinaId === disciplinaId)
  if (registros.length === 0) return 100
  const presentes = registros.filter((p) => p.presente).length
  return Math.round((presentes / registros.length) * 100)
}

export function statusFrequencia(percentual, limite = LIMITE_PADRAO) {
  if (percentual < limite) return 'risco'
  if (percentual < limite + 10) return 'alerta'
  return 'ok'
}
