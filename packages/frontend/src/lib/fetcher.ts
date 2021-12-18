import axios from 'axios'

axios.defaults.baseURL = process.env.NEXT_PUBLIC_SERVICE_ENDPOINT

export const fetcher = (url: string) => axios.get(url).then((res) => res.data)
