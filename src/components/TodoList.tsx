import { useId } from 'react'
import { useSelector } from 'react-redux'

export function TodoList() {
  const todos = useSelector((store) => store.todo)
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
