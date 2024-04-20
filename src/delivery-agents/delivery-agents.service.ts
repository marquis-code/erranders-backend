import { Injectable } from '@nestjs/common';
import { CreateDeliveryAgentDto } from './dto/create-delivery-agent.dto';
import { UpdateDeliveryAgentDto } from './dto/update-delivery-agent.dto';

@Injectable()
export class DeliveryAgentsService {
  create(createDeliveryAgentDto: CreateDeliveryAgentDto) {
    return 'This action adds a new deliveryAgent';
  }

  findAll() {
    return `This action returns all deliveryAgents`;
  }

  findOne(id: number) {
    return `This action returns a #${id} deliveryAgent`;
  }

  update(id: number, updateDeliveryAgentDto: UpdateDeliveryAgentDto) {
    return `This action updates a #${id} deliveryAgent`;
  }

  remove(id: number) {
    return `This action removes a #${id} deliveryAgent`;
  }
}
