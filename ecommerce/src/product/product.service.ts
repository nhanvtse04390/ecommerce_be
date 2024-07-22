// src/product/product.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from '../entities/product.entity';

@Injectable()
export class ProductService {
    constructor(
        @InjectRepository(Product)
        private readonly productRepository: Repository<Product>,
    ) {}

    // Create
    async create(product: Partial<Product>): Promise<Product> {
        const newProduct = this.productRepository.create(product);
        return this.productRepository.save(newProduct);
    }

    // Read All
    async findAll(): Promise<Product[]> {
        return this.productRepository.find();
    }

    // Read One
    async findOne(id: number): Promise<Product> {
        return this.productRepository.findOneBy({ id });
    }

    // Update
    async update(id: number, updateProduct: Partial<Product>): Promise<Product> {
        await this.productRepository.update(id, updateProduct);
        return this.productRepository.findOneBy({ id });
    }

    // Delete
    async remove(id: number): Promise<void> {
        await this.productRepository.delete(id);
    }
}
