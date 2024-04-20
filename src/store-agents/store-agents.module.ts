import { Module } from '@nestjs/common';
import { StoreAgentsService } from './store-agents.service';
import { StoreAgentsController } from './store-agents.controller';

@Module({
  controllers: [StoreAgentsController],
  providers: [StoreAgentsService],
})
export class StoreAgentsModule {}
