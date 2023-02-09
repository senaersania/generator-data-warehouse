import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { User } from './users/entities/user.entity';
import { UsersModule } from './users/users.module';
import { OjkLendApplicationModule } from './ojk-lend-application/ojk-lend-application.module';
import { OjkLoanApplicationModule } from './ojk-loan-application/ojk-loan-application.module';
import { OjkTransactionSuccessModule } from './ojk-transaction-success/ojk-transaction-success.module';
import { PdlUserAuthorizeModule } from './pdl-user-authorize/pdl-user-authorize.module';
import { RegBorrowerModule } from './reg-borrower/reg-borrower.module';
import { RegUserModule } from './reg-user/reg-user.module';
import { OjkLendApplication } from './ojk-lend-application/entities/ojk-lend-application.entity';
import { OjkLoanApplication } from './ojk-loan-application/entities/ojk-loan-application.entity';
import { OjkTransactionSuccess } from './ojk-transaction-success/entities/ojk-transaction-success.entity';
import { PdlUserAuthorize } from './pdl-user-authorize/entities/pdl-user-authorize.entity';
import { RegBorrower } from './reg-borrower/entities/reg-borrower.entity';
import { RegUser } from './reg-user/entities/reg-user.entity';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'password123',
      database: 'nestjs',
      entities: [
        User, 
        OjkLendApplication,
        OjkLoanApplication,
        OjkTransactionSuccess,
        PdlUserAuthorize,
        RegBorrower,
        RegUser
      ],
      synchronize: true, // production env : set to false
    }),
    UsersModule,
    OjkLendApplicationModule,
    OjkLoanApplicationModule,
    OjkTransactionSuccessModule,
    PdlUserAuthorizeModule,
    RegBorrowerModule,
    RegUserModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
