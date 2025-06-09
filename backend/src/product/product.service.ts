import {
    ConflictException,
    Injectable,
    InternalServerErrorException,
    NotFoundException,
} from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Product } from "./entities/product.entity";
import { CreateProductDto } from "./dto/create-product-dto";
import { getFirstMissingAlphabetLetter } from "src/common/helpers/get-first-missing-letter";
import { UpdateProductDto } from "./dto/update-product-dto";

@Injectable()
export class ProductService {
    constructor(
        @InjectRepository(Product)
        private readonly productRepository: Repository<Product>,
    ) {}
    async createProduct(productData: CreateProductDto) {
        const { name, sku, price } = productData;
        const existingProduct = await this.findProductBySku(sku);
        if (existingProduct) {
            throw new ConflictException(`O produto com SKU ${sku} já existe.`);
        }
        try {
            const newProduct = this.productRepository.create({
                name,
                sku,
                price,
            });
            return this.productRepository.save(newProduct);
        } catch (error) {
            throw new InternalServerErrorException("Erro inesperado ao criar o produto.");
        }
    }

    async findProductBySku(sku: string) {
        return this.productRepository.findOne({
            where: { sku },
        });
    }

    async getAllProductsWithMissingLetter() {
        const products = await this.productRepository.find({ order: { name: "ASC" } });

        if (products.length > 0) {
            return products.map(product => ({
                ...product,
                firstMissingAlphabetLetter: getFirstMissingAlphabetLetter(product.name),
            }));
        }
        return [];
    }

    async getProductById(id: number) {
        const product = await this.productRepository.findOne({
            where: { id },
        });
        if (!product) {
            throw new NotFoundException("Produto não encontrado.");
        }
        return {
            ...product,
            firstMissingAlphabetLetter: getFirstMissingAlphabetLetter(product.name),
        };
    }

    async checkIfSkuAlreadyRegistered(sku: string) {
        const productWithSku = await this.findProductBySku(sku);

        if (productWithSku) {
            throw new ConflictException(
                `Esse produto já está vinculado ao produto: ${productWithSku.name},`,
            );
        }
    }

    async updateProduct(id: number, updateData: UpdateProductDto) {
        const product = await this.getProductById(id);

        if (updateData.sku && updateData.sku !== product.sku) {
            await this.checkIfSkuAlreadyRegistered(updateData.sku);
        }

        try {
            await this.productRepository.update(id, {
                ...updateData,
                updatedAt: new Date(),
            });

            const updatedProduct = await this.getProductById(id);

            return {
                ...updatedProduct,
                firstMissingAlphabetLetter: getFirstMissingAlphabetLetter(updatedProduct.name),
            };
        } catch (error) {
            throw new InternalServerErrorException("Erro ao atualizar o produto");
        }
    }

    async deleteProduct(id: number) {
        const product = await this.getProductById(id);
        if (!product) {
            throw new NotFoundException("Produto não encontrado.");
        }
        try {
            await this.productRepository.delete(id);
        } catch (error) {
            throw new InternalServerErrorException("Erro ao excluir o produto.");
        }
    }
}
