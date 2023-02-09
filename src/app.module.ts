import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { User } from './users/entities/user.entity';
import { UsersModule } from './users/users.module';
import { ReguserModule } from './reguser/reguser.module';
import { RegUser } from './reguser/entities/reguser.entity';
import { OjktransactionsuccessModule } from './ojktransactionsuccess/ojktransactionsuccess.module';
import { OjklendapplicationModule } from './ojklendapplication/ojklendapplication.module';
import { OjkLendApplication } from './ojklendapplication/entities/ojklendapplication.entity';
import { OjkTransactionSuccess } from './ojktransactionsuccess/entities/ojktransactionsuccess.entity';


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
        OjkTransactionSuccess,
        OjkLendApplication
      ],
      synchronize: true,
    }),
    UsersModule,
    ReguserModule,
    OjktransactionsuccessModule,
    OjklendapplicationModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
