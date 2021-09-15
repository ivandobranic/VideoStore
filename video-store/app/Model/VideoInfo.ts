import { column, BaseModel, beforeCreate } from '@ioc:Adonis/Lucid/Orm'
import { v4 as uuidv4 } from 'uuid'
import { DateTime } from 'luxon'

export default class VideoInfo extends BaseModel {
  public static selfAssignPrimaryKey = true

  @column({ isPrimary: true })
  public id: string

  @column()
  public rating: number

  @column()
  public genreId: string

  @column()
  public format: string

  @column()
  public duration: string

  @column()
  public dateReleased: DateTime

  @column.dateTime({ autoCreate: true })
  public dateCreated: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public dateUpdated: DateTime

  @beforeCreate()
  public static assignUuid(videoInfo: VideoInfo) {
    videoInfo.id = uuidv4()
  }
}
