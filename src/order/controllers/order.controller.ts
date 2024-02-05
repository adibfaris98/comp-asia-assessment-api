import { Body, Controller, Post, Get, Query } from '@nestjs/common';
import { OrderService } from '../services/order.service';
import { CreateOrderDto } from '../dto/create-order.dto';
import { OrderEntity } from '../models/order.entity';

@Controller('orders')
export class OrderController {
  constructor(private orderService: OrderService) {}

  @Post()
  async createOrder(@Body() createOrderDto: CreateOrderDto) {
    return this.orderService.createOrder(createOrderDto);
  }

  @Get()
  async getAllOrders(
    @Query('page') page = 1,
    @Query('perPage') perPage = 10,
  ): Promise<{ orders: OrderEntity[]; page: number; perPage: number }> {
    return this.orderService.getAllOrders(page, perPage);
  }
}
