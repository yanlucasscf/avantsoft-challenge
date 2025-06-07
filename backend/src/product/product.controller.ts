import { Body, Controller, Post } from "@nestjs/common";
import { ProductService } from "./product.service";
import { CreateProductDto } from "./dto/create-product-dto";

@Controller("product")
export class ProductController {
    constructor(private readonly productService: ProductService) {}

    @Post()
    async createProduct(@Body() productData: CreateProductDto) {
        return this.productService.createProduct(productData);
    }
}
