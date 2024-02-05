// export class CreateOrderDto {
//   userId: number;
//   productId: number;
//   colorId: number;
// }
// src/dto/create-product.dto.ts
import {
  IsString,
  IsNumber,
  IsNotEmpty,
  IsArray,
  ArrayMinSize,
} from 'class-validator';

export class CreateProductDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNumber()
  @IsNotEmpty()
  price: number;

  @IsArray()
  @ArrayMinSize(1, { message: 'At least one color must be specified' })
  colors: number[]; // Array of color IDs
}
