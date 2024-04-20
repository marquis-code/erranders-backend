import { Test, TestingModule } from '@nestjs/testing';
import { StoreAgentsController } from './store-agents.controller';
import { StoreAgentsService } from './store-agents.service';

describe('StoreAgentsController', () => {
  let controller: StoreAgentsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StoreAgentsController],
      providers: [StoreAgentsService],
    }).compile();

    controller = module.get<StoreAgentsController>(StoreAgentsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
