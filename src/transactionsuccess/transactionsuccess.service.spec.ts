import { Test, TestingModule } from '@nestjs/testing';
import { TransactionsuccessService } from './transactionsuccess.service';

describe('TransactionsuccessService', () => {
  let service: TransactionsuccessService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TransactionsuccessService],
    }).compile();

    service = module.get<TransactionsuccessService>(TransactionsuccessService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
