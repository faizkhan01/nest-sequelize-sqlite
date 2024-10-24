import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { TaskModule } from './task/task.module';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'sqlite',
      storage: './database.sqlite', // You can also specify a path to a file here like 'database.sqlite'
      autoLoadModels: true,
      synchronize: true,
    }),
    TaskModule,
  ],
})
export class AppModule {}
