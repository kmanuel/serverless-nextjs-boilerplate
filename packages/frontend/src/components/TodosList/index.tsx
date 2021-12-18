import axios from 'axios'
import React from 'react'
import { Todo } from 'shared/Todo'
import useSWR, { mutate } from 'swr'
import { fetcher } from '../../lib/fetcher'

interface TodosListProps {}

interface TodoProps {
  todo: Todo
}

const TodoListItem = ({ todo }: TodoProps) => {
  const handleDelete = async () => {
    const todoId = todo.id
    await axios.delete(`/todos/${todoId}`)
    mutate(`/todos`)
  }

  return (
    <div style={{ display: 'flex', gap: '5px' }}>
      <div>{todo.createdAt}</div>
      <button onClick={handleDelete}>Delete</button>
    </div>
  )
}

const TodosList = (props: TodosListProps) => {
  const { data } = useSWR(`/todos`, fetcher)

  const handleDelete = async (todoId: string) => {
    await axios.delete(`/todos/${todoId}`)
    mutate(`/todos`)
  }

  return (
    <div>
      <div>TodosList</div>
      <div>
        {data?.Items.map((i: any) => (
          <TodoListItem key={i.id} todo={i} />
        ))}
      </div>
    </div>
  )
}
export default TodosList
