import { Module } from '@nestjs/common'
import { DatabaseModule } from '../database.module'
import { groupsProviders } from './groups.providers'
import { GroupsService } from './groups.service'

@Module({
  imports: [DatabaseModule],
  providers: [
    ...groupsProviders,
    GroupsService,
  ],
  exports: [GroupsService],
})
export class GroupsModule {}