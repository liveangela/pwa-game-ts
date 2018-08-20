const baseUrl = '/api'

const headers = {
  'Content-Type': 'application/json;charset=utf-8',
}

const getInit = (data: object) => ({
  headers,
  method: 'POST',
  body: JSON.stringify(data),
})

const handleResponse = (response: Response) => {
  if (response.ok) {
    return response.json() // is a promise
  } else {
    return Promise.reject({
      status: response.status,
      statusText: response.statusText,
    })
  }
}

const handleError = (error: Error) => console.error(error)

export const createRoleFetch = (data: object) => fetch(
  `${baseUrl}/createRole`,
  getInit(data),
).then(handleResponse).catch(handleError)
