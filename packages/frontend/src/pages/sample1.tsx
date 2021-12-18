import axios from 'axios'
import React from 'react'
import useSWR, { mutate } from 'swr'
import TodosList from '../components/TodosList'
import { fetcher } from '../lib/fetcher'

interface Sample1PageProps {}

const Sample1Page = (props: Sample1PageProps) => {
  const { data } = useSWR(`/hi`, fetcher)

  const handlePost = async () => {
    await axios.post(`/todos`, {
      firstName: 'Manuel',
      age: 33,
    })
    mutate('/todos')
  }

  return (
    <div>
      Sample1Page
      <button onClick={handlePost}>post</button>
      <div>Feteched message: {data?.message}</div>
      <TodosList />
    </div>
  )
}
export default Sample1Page
