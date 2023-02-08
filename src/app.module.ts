import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { User } from './users/entities/user.entity';
import { UsersModule } from './users/users.module';
import { ReguserModule } from './reguser/reguser.module';
import { RegUser } from './reguser/entities/reguser.entity';
import { LendapplicationModule } from './lendapplication/lendapplication.module';
import { TransactionsuccessModule } from './transactionsuccess/transactionsuccess.module';
import { LendApplication } from './lendapplication/entities/lendapplication.entity';
import { TransactionSuccess } from './transactionsuccess/entities/transactionsuccess.entity';


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
        RegUser,
        LendApplication,
        TransactionSuccess
      ],
      synchronize: true,
    }),
    UsersModule,
    ReguserModule,
    LendapplicationModule,
    TransactionsuccessModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
