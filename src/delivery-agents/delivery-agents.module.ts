import { Module } from '@nestjs/common';
import { DeliveryAgentsService } from './delivery-agents.service';
import { DeliveryAgentsController } from './delivery-agents.controller';

@Module({
  controllers: [DeliveryAgentsController],
  providers: [DeliveryAgentsService],
})
export class DeliveryAgentsModule {}
