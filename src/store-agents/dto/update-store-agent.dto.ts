import { PartialType } from '@nestjs/mapped-types';
import { CreateStoreAgentDto } from './create-store-agent.dto';

export class UpdateStoreAgentDto extends PartialType(CreateStoreAgentDto) {}
