import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
  // JoinColumn,
  // ManyToMany,
  // JoinTable,
} from 'typeorm';
import { Brand } from './brand.entity';
import { ProductColor } from './product-color.entity';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  price: number;

  @ManyToOne(() => Brand, (brand) => brand.products)
  brand: Brand;

  @OneToMany(() => ProductColor, (color) => color.product)
  colors: ProductColor[];

  // @ManyToMany(() => ProductColor, { eager: true }) // Assuming eager loading for simplicity
  // @JoinTable()
  // colors: ProductColor[];

  // @ManyToOne(() => ProductColor, { eager: true }) // Assuming eager loading for simplicity
  // @JoinColumn({ name: 'colorId' }) // Assuming you have a foreign key column named 'colorId'
  // color: ProductColor;
}
