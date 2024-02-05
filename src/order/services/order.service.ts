import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { OrderEntity } from '../models/order.entity';
import { CreateOrderDto } from '../dto/create-order.dto';

@Injectable()
export class OrderService {
  constructor(
    @InjectRepository(OrderEntity)
    private readonly orderRepository: Repository<OrderEntity>,
  ) {}

  async createOrder(createOrderDto: CreateOrderDto): Promise<OrderEntity> {
    const order = this.orderRepository.create(createOrderDto);
    return await this.orderRepository.save(order);
  }

  async getAllOrders(
    page = 1,
    perPage = 10,
  ): Promise<{ orders: OrderEntity[]; page: number; perPage: number }> {
    const skip = (page - 1) * perPage;
    const orders = await this.orderRepository.find({
      skip,
      take: perPage,
      order: { createdAt: 'DESC' },
    });

    return { page, perPage, orders };
  }
}
