import { ChangeEvent, FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'

import { add } from '../store'

export function AddTodo() {
  const [newTodo, setNewTodo] = useState('')
  const dispatch = useDispatch()

  function handleAddTodo(event: FormEvent) {
    event.preventDefault()

    dispatch(add({ newTodo }))
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
