const successCB = (response: Response) => {
  if (response.status === 200) {
    return response.json()
  } else {
    throw new Error('Something went wrong on api server!')
  }
}

const errorCB = (error: Error) => {
  console.error(error)
}

export const createRoleFetch = (data: object) => {
  const body = JSON.stringify(data)
  const request = new Request('/createRole', {method: 'POST', body})
  // TODO: fetch no work, 404 error
  return fetch(request).then(successCB).catch(errorCB)
}