// src/entities/product-color.entity.ts
import {
  Entity,
  PrimaryGeneratedColumn,
  // Column,
  ManyToOne,
} from 'typeorm';
import { Product } from './product.entity';
import { Color } from './color.entity';

@Entity()
export class ProductColor {
  @PrimaryGeneratedColumn()
  id: number;

  //   @Column()
  //   name: string;

  // @ManyToOne(() => Product, (product) => product.colors)
  // product: Product;

  // @ManyToOne(() => Color, (color) => color.productColors)
  // color: Color;

  @ManyToOne(() => Product)
  product: Product;

  @ManyToOne(() => Color, (color) => color.color)
  color: Color;
}
