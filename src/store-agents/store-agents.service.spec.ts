import { Test, TestingModule } from '@nestjs/testing';
import { StoreAgentsService } from './store-agents.service';

describe('StoreAgentsService', () => {
  let service: StoreAgentsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StoreAgentsService],
    }).compile();

    service = module.get<StoreAgentsService>(StoreAgentsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
