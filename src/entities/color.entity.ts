// src/entities/product-color.entity.ts
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  // ManyToOne,
  OneToMany,
} from 'typeorm';
// import { Product } from './product.entity';

import { ProductColor } from './product-color.entity';

@Entity()
export class Color {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  color: string;

  //   @ManyToOne(() => Product, (product) => product.colors)
  //   product: Product;

  @OneToMany(() => ProductColor, (productColor) => productColor.color)
  productColors: ProductColor[];
}
