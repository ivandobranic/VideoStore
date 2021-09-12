import { column, BaseModel, beforeCreate } from '@ioc:Adonis/Lucid/Orm'
import { v4 as uuidv4 } from 'uuid'
import { DateTime } from 'luxon'
import Hash from '@ioc:Adonis/Core/Hash'

export default class User extends BaseModel {
  public static selfAssignPrimaryKey = true

  @column({ isPrimary: true })
  public id: string

  @column()
  public email: string

  @column()
  public password: string

  @column()
  public firstName: string

  @column()
  public lastName: string

  @column.dateTime({ autoCreate: true })
  public dateCreated: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public dateUpdated: DateTime

  @beforeCreate()
  public static assignUuid(user: User) {
    user.id = uuidv4()
  }
  @beforeCreate()
  public static async hashPassword(user: User) {
    if (user.$dirty.password) {
      user.password = await Hash.make(user.password)
    }
  }
}
