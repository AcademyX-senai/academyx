import { useEffect, useState } from 'react'
import { lerStorage, salvarStorage } from '../services/storage'

export function useLocalStorage(chave, valorInicial) {
  const [valor, setValor] = useState(() => lerStorage(chave, valorInicial))

  useEffect(() => {
    salvarStorage(chave, valor)
  }, [chave, valor])

  return [valor, setValor]
}
