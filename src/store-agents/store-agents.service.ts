import { Injectable } from '@nestjs/common';
import { CreateStoreAgentDto } from './dto/create-store-agent.dto';
import { UpdateStoreAgentDto } from './dto/update-store-agent.dto';

@Injectable()
export class StoreAgentsService {
  create(createStoreAgentDto: CreateStoreAgentDto) {
    return 'This action adds a new storeAgent';
  }

  findAll() {
    return `This action returns all storeAgents`;
  }

  findOne(id: number) {
    return `This action returns a #${id} storeAgent`;
  }

  update(id: number, updateStoreAgentDto: UpdateStoreAgentDto) {
    return `This action updates a #${id} storeAgent`;
  }

  remove(id: number) {
    return `This action removes a #${id} storeAgent`;
  }
}
