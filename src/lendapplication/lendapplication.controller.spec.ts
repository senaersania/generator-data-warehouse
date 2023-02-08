import { Test, TestingModule } from '@nestjs/testing';
import { LendapplicationController } from './lendapplication.controller';
import { LendapplicationService } from './lendapplication.service';

describe('LendapplicationController', () => {
  let controller: LendapplicationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LendapplicationController],
      providers: [LendapplicationService],
    }).compile();

    controller = module.get<LendapplicationController>(LendapplicationController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
