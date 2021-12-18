export interface Todo {
  id: string
  name: string
  age: number
  createdAt: number
}

export type TodoCreateInput = Pick<Todo, 'name' | 'age'>
