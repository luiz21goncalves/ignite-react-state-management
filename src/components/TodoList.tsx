import { useId } from 'react'

import { useAppSelector } from '../store'

export function TodoList() {
  const todos = useAppSelector((store) => store.todo)
  const id = useId()

  return (
    <ul>
      {todos.map((todo, index) => {
        const key = `${id}-${todo}-${index}`

        return <li key={key}>{todo}</li>
      })}
    </ul>
  )
}
