// product.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from '../../entities/product.entity';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
  ) {}

  async getAllProducts(
    page = 1,
    pageSize = 10,
  ): Promise<{ products: Product[]; page: number; pageSize: number }> {
    const skip = (page - 1) * pageSize;
    const products = await this.productRepository.find({
      skip,
      take: pageSize,
      relations: ['brand', 'colors.color'],
    });

    return { page, pageSize, products };
  }
}
