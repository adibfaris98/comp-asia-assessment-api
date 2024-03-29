import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderModule } from './order/order.module';
import { UserModule } from './user/user.module';
import { ProductModule } from './product/product.module';
import { join } from 'path';
// import { BrandModule } from './brand/brand.module';
// import { CategoryModule } from './category/category.module';
// import { SeederService } from './seeder.service';
@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT, 10),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      entities: [join(__dirname, '**', '*.entity.{ts,js}')],
      synchronize: true,
    }),
    OrderModule,
    UserModule,
    ProductModule,
    // BrandModule,
    // CategoryModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
