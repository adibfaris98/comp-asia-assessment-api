// src/entities/product.entity.ts
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  // ManyToOne,
  // OneToMany,
} from 'typeorm';
// import { Brand } from './brand.entity';
// import { ProductColor } from './product-color.entity';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  // @ManyToOne(() => Brand, (brand) => brand.products)
  // brand: Brand;

  // @OneToMany(() => ProductColor, (productColor) => productColor.product)
  // colors: ProductColor[];
}
