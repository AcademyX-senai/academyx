export function lerStorage(chave, valorPadrao) {
  try {
    const salvo = localStorage.getItem(chave)
    return salvo !== null ? JSON.parse(salvo) : valorPadrao
  } catch {
    return valorPadrao
  }
}

export function salvarStorage(chave, valor) {
  try {
    localStorage.setItem(chave, JSON.stringify(valor))
  } catch {
    // armazenamento cheio ou bloqueado: ignora para não quebrar a tela
  }
}
