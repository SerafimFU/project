import { Module } from '@nestjs/common'
import { DatabaseModule } from '../database.module'
import { avatarsProviders } from './avatars.providers'
import { AvatarsService } from './avatars.service'

@Module({
  imports: [DatabaseModule],
  providers: [
    ...avatarsProviders,
    AvatarsService,
  ],
  exports: [AvatarsService],
})
export class AvatarsModule {}