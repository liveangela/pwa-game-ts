import {IBaseRoleInput, BaseRole} from './BaseRole'

const map: {[index: string]: any} = {
  createRole(data: IBaseRoleInput) {
    return new BaseRole(data)
  },
}

export default map
