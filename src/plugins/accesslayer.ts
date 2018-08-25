import Vue from 'vue'
import gameEngine from '@/games'

// #region [vars and methods]
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
  return response.ok ? response.json() : Promise.reject({
    status: response.status,
    statusText: response.statusText,
  })
}

const handleError = (error: Error) => console.error(error)

const functionCreator = (funcName: string) => {
  return isEnvProd ? (data: object) => fetch(
    `${baseUrl}/${funcName}`,
    getInitBody(data),
  ).then(handleResponse).catch(handleError) : (data: object) => {
    return new Promise((resolve, reject) => {
      try {
        resolve(gameEngine[funcName](data))
      } catch (e) {
        reject(e)
      }
    })
  }
}
// #endregion

// #region [create and export all accessors based on the env]
const functionMap: {[index: string]: any} = {}
const functionPool = [
  'createRole',
]

functionPool.forEach((funcName) => {
  functionMap[funcName] = functionCreator(funcName)
})
// #endregion

// #region [vue plugin]
declare module 'vue/types/vue' {
  interface Vue {
    $accesslayer: any
  }
}
const AccessPlugin = (vue: typeof Vue) => {
  vue.prototype.$accesslayer = functionMap
}
Vue.use(AccessPlugin)
// #endregion
