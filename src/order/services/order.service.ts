import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Order } from '../../entities/order.entity';
import { CreateOrderDto } from '../dto/create-order.dto';

@Injectable()
export class OrderService {
  constructor(
    @InjectRepository(Order)
    private readonly orderRepository: Repository<Order>,
  ) {}

  async createOrder(createOrderDto: CreateOrderDto): Promise<Order> {
    const order = this.orderRepository.create(createOrderDto);
    return await this.orderRepository.save(order);
  }

  async getAllOrders(
    page = 1,
    pageSize = 10,
  ): Promise<{ orders: Order[]; page: number; pageSize: number }> {
    const skip = (page - 1) * pageSize;
    const orders = await this.orderRepository.find({
      skip,
      take: pageSize,
      order: { createdAt: 'DESC' },
      relations: ['product', 'color'], // Specify the name of the relationship to be populated
    });

    return { page, pageSize, orders };
  }
}
