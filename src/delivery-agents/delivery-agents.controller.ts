import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DeliveryAgentsService } from './delivery-agents.service';
import { CreateDeliveryAgentDto } from './dto/create-delivery-agent.dto';
import { UpdateDeliveryAgentDto } from './dto/update-delivery-agent.dto';

@Controller('delivery-agents')
export class DeliveryAgentsController {
  constructor(private readonly deliveryAgentsService: DeliveryAgentsService) {}

  @Post()
  create(@Body() createDeliveryAgentDto: CreateDeliveryAgentDto) {
    return this.deliveryAgentsService.create(createDeliveryAgentDto);
  }

  @Get()
  findAll() {
    return this.deliveryAgentsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.deliveryAgentsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDeliveryAgentDto: UpdateDeliveryAgentDto) {
    return this.deliveryAgentsService.update(+id, updateDeliveryAgentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.deliveryAgentsService.remove(+id);
  }
}
