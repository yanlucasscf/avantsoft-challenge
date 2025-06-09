import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from "@nestjs/common";
import { ProductService } from "./product.service";
import { CreateProductDto } from "./dto/create-product-dto";
import { UpdateProductDto } from "./dto/update-product-dto";

@Controller("products")
export class ProductController {
    constructor(private readonly productService: ProductService) {}

    @Post()
    async createProduct(@Body() productData: CreateProductDto) {
        return this.productService.createProduct(productData);
    }

    @Get()
    async getAllProducts() {
        return this.productService.getAllProductsWithMissingLetter();
    }

    @Get("/:id")
    async getProductById(@Param("id", ParseIntPipe) id: number) {
        return this.productService.getProductById(id);
    }

    @Put("/:id")
    async updateProduct(
        @Param("id", ParseIntPipe) id: number,
        @Body() updateData: UpdateProductDto,
    ) {
        return this.productService.updateProduct(id, updateData);
    }

    @Delete("/:id")
    async deleteProduct(@Param("id", ParseIntPipe) id: number) {
        return this.productService.deleteProduct(id);
    }
}
