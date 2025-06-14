import { Module } from "@nestjs/common";
import { Product } from "./entities/product.entity";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ProductController } from "./product.controller";
import { ProductService } from "./product.service";

@Module({
    imports: [TypeOrmModule.forFeature([Product])],
    controllers: [ProductController],
    providers: [ProductService],
    exports: [],
})
export class ProductModule {}
