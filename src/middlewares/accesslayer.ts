import gameEngine from '@/games'

const isEnvProd = process.env.NODE_ENV === 'production'
const baseUrl = '/api'
const headers = {
  'Content-Type': 'application/json;charset=utf-8',
}

const getInitBody = (data: object) => ({
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

const functionCreator = (funcName: string) => {
  return !isEnvProd ? gameEngine[funcName] : (data: object) => fetch(
    `${baseUrl}/${funcName}`,
    getInitBody(data),
  ).then(handleResponse).catch(handleError)
}

// create and export all accessors based on the env
const functionMap: {[index: string]: any} = {}
const functionPool = [
  'createRole',
]

functionPool.forEach((funcName) => {
  functionMap[funcName] = functionCreator(funcName)
})

export default functionMap
