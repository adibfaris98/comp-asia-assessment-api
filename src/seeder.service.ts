// seeder.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Category } from './entities/category.entity';
import { User } from './entities/user.entity';
// import { BrandEntity } from '../brand/brand.entity';
// import { ProductEntity } from '../product/product.entity';
// import { ProductColorEntity } from '../product-color/product-color.entity';
// import { ColorEntity } from '../color/color.entity';

@Injectable()
export class SeederService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    // @InjectRepository(Category)
    // private readonly categoryRepository: Repository<Category>,
    // @InjectRepository(BrandEntity)
    // private readonly brandRepository: Repository<BrandEntity>,
    // @InjectRepository(ProductEntity)
    // private readonly productRepository: Repository<ProductEntity>,
    // @InjectRepository(ProductColorEntity)
    // private readonly productColorRepository: Repository<ProductColorEntity>,
    // @InjectRepository(ColorEntity)
    // private readonly colorRepository: Repository<ColorEntity>,
  ) {}

  async seed() {
    await this.seedUsers();
    // await this.seedCategories();
    // await this.seedBrands();
    // await this.seedProducts();
    // await this.seedColors();
    // await this.seedProductColors();
  }

  private async seedUsers() {
    const usersData = [
      { username: 'user1', password: 'password1', role: 'CUSTOMER' },
      { username: 'user2', password: 'password2', role: 'ADMIN' },
      // Add more user data as needed
    ];

    for (const userData of usersData) {
      const user = this.userRepository.create(userData);
      await this.userRepository.save(user);
    }
  }

  private async seedCategories() {
    // const categoriesData = ['Smartphones', 'Tablets'];
    // for (const categoryName of categoriesData) {
    //   const category = this.categoryRepository.create({ name: categoryName });
    //   await this.categoryRepository.save(category);
    // }
  }

  private async seedBrands() {
    // Your logic to seed brands
  }

  private async seedProducts() {
    // Your logic to seed products
  }

  private async seedColors() {
    // Your logic to seed colors
  }

  private async seedProductColors() {
    // Your logic to associate products with colors
  }
}
