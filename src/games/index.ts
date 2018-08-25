import {IBaseRoleInput, BaseRole} from './BaseRole'

const engine: {[index: string]: any} = {}
const map: {
  [index: string]: any,
} = {
  createRole(data: IBaseRoleInput) {
    return new BaseRole(data)
  },
}

// wrap all func in Promise
Object.keys(map).forEach((funcName) => {
  const funcBody = map[funcName]
  engine[funcName] = (data: any) => {
    return new Promise((resolve, reject) => {
      try {
        resolve(funcBody(data))
      } catch (e) {
        reject(e)
      }
    })
  }
})

export default engine
