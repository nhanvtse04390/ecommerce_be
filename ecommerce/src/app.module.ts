import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { YourEntity } from './your-entity.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: '127.0.0.1',
      port: 5432,
      username: 'user',
      password: '123@123a',
      database: 'ecommerce',
      entities: [YourEntity],
      synchronize: true, // Chỉ nên bật trong môi trường phát triển
    }),
    TypeOrmModule.forFeature([YourEntity]),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
