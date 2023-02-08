import { Test, TestingModule } from '@nestjs/testing';
import { TransactionsuccessController } from './transactionsuccess.controller';
import { TransactionsuccessService } from './transactionsuccess.service';

describe('TransactionsuccessController', () => {
  let controller: TransactionsuccessController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TransactionsuccessController],
      providers: [TransactionsuccessService],
    }).compile();

    controller = module.get<TransactionsuccessController>(TransactionsuccessController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
