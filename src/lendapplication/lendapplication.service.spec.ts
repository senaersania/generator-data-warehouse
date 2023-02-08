import { Test, TestingModule } from '@nestjs/testing';
import { LendapplicationService } from './lendapplication.service';

describe('LendapplicationService', () => {
  let service: LendapplicationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LendapplicationService],
    }).compile();

    service = module.get<LendapplicationService>(LendapplicationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
