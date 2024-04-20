import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { StoreAgentsService } from './store-agents.service';
import { CreateStoreAgentDto } from './dto/create-store-agent.dto';
import { UpdateStoreAgentDto } from './dto/update-store-agent.dto';

@Controller('store-agents')
export class StoreAgentsController {
  constructor(private readonly storeAgentsService: StoreAgentsService) {}

  @Post()
  create(@Body() createStoreAgentDto: CreateStoreAgentDto) {
    return this.storeAgentsService.create(createStoreAgentDto);
  }

  @Get()
  findAll() {
    return this.storeAgentsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.storeAgentsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateStoreAgentDto: UpdateStoreAgentDto) {
    return this.storeAgentsService.update(+id, updateStoreAgentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.storeAgentsService.remove(+id);
  }
}
