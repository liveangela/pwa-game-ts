const headers = {
  'Content-Type': 'application/json',
}

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

const handleError = (error: Error) => {
  console.error(error)
}

export const createRoleFetch = (data: object) => {
  const request = new Request('/createRole', {
    headers,
    method: 'POST',
    body: JSON.stringify(data),
  })
  // TODO: fetch no work, 404 error
  return fetch(request).then(handleResponse).catch(handleError)
}
