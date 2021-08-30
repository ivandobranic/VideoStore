import { column, BaseModel, beforeCreate } from '@ioc:Adonis/Lucid/Orm'
import { v4 as uuidv4 } from 'uuid'
import { DateTime } from 'luxon'

export default class VideoCategory extends BaseModel {
  public static selfAssignPrimaryKey = true

  @column({ isPrimary: true })
  public id: string

  @column()
  public name: string

  @column.dateTime({ autoCreate: true })
  public dateCreated: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public dateUpdated: DateTime

  @beforeCreate()
  public static assignUuid(videoCategory: VideoCategory) {
    videoCategory.id = uuidv4()
  }
}
