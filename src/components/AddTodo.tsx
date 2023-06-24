import { ChangeEvent, FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'

import { add } from '../store'

export function AddTodo() {
  const [newTodo, setNewTodo] = useState('')
  const dispatch = useDispatch()

  function handleAddTodo(event: FormEvent) {
    event.preventDefault()

    const parsedContent = newTodo.trim()
    const isValidContent = parsedContent.length >= 1

    if (isValidContent) {
      setNewTodo('')
      return dispatch(add({ newTodo: parsedContent }))
    }

    alert('Adicione conteudo para adicionar um to-do.')
    setNewTodo('')
  }

  function onChangeNewTodo(event: ChangeEvent<HTMLInputElement>) {
    setNewTodo(event.target.value)
  }

  return (
    <form onSubmit={handleAddTodo}>
      <input
        type="text"
        placeholder="Novo to-do"
        value={newTodo}
        onChange={onChangeNewTodo}
      />
      <button type="submit">Adicionar</button>
    </form>
  )
}
