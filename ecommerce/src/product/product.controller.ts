// src/product/product.controller.ts
import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { ProductService } from './product.service';
import { Product } from '../entities/product.entity';

@Controller('products')
export class ProductController {
    constructor(private readonly productService: ProductService) {}

    @Post()
    async create(@Body() product: Partial<Product>): Promise<Product> {
        return this.productService.create(product);
    }

    @Get()
    async findAll(): Promise<Product[]> {
        return this.productService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: number): Promise<Product> {
        return this.productService.findOne(id);
    }

    @Put(':id')
    async update(@Param('id') id: number, @Body() updateProduct: Partial<Product>): Promise<Product> {
        return this.productService.update(id, updateProduct);
    }

    @Delete(':id')
    async remove(@Param('id') id: number): Promise<void> {
        return this.productService.remove(id);
    }
}
