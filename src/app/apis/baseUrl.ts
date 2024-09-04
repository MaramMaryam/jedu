import axios from 'axios'

export const baseUrl = process.env.NEXT_PUBLIC_BASE_API_URL;


let Headers = {
  'Content-Type': 'application/json',
//   Authorization: 'Bearer {token}',
  // 'Accept-Language': ,
}

export let baseInstance = axios.create({
  baseURL: baseUrl,
  headers: {
    'Content-Type': 'application/json',
    // Authorization: `Bearer ${token}`,
    // 'Accept-Language': `${lang}`
  },
})

console.log('baseURL:', baseUrl)
