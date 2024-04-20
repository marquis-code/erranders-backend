import { Test, TestingModule } from '@nestjs/testing';
import { DeliveryAgentsController } from './delivery-agents.controller';
import { DeliveryAgentsService } from './delivery-agents.service';

describe('DeliveryAgentsController', () => {
  let controller: DeliveryAgentsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DeliveryAgentsController],
      providers: [DeliveryAgentsService],
    }).compile();

    controller = module.get<DeliveryAgentsController>(DeliveryAgentsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
