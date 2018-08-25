import {randomName} from './utils'

export interface IBaseRoleInput {
  name: string
}

export class BaseRole {
  private name!: string
  private coin = 0
  private gold = 0
  private lv = 1
  private exp = 0
  private str = 5
  private int = 5
  private agi = 5
  private dur = 5
  private restPoint = 0

  constructor({name}: IBaseRoleInput) {
    this.init(name)
  }

  private init(name = randomName()) {
    this.name = name
  }
}
