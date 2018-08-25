import {IBaseRoleInput, BaseRole} from './BaseRole'

const map: {
  [index: string]: any,
} = {
  createRole(data: IBaseRoleInput) {
    return new Promise((resolve, reject) => {
      try {
        resolve(new BaseRole(data))
      } catch (e) {
        reject(e)
      }
    })
  },
}

export default map
