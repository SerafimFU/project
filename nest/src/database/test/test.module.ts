import { Module } from '@nestjs/common'
import { DatabaseModule } from '../database.module'
import { testProviders } from './test.providers'
import { TestService } from './test.service'

@Module({
  imports: [DatabaseModule],
  providers: [
    ...testProviders,
    TestService,
  ],
  exports: [TestService],
})
export class TestModule {}