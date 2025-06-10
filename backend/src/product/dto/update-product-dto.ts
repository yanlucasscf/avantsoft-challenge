import { Type } from "class-transformer";
import { IsNotEmpty, IsNumber, IsOptional, IsPositive, IsString } from "class-validator";

export class UpdateProductDto {
    @IsOptional()
    @IsString({ message: "O nome do produto deve ser uma string." })
    name?: string;

    @IsOptional()
    @IsString({ message: "O SKU do produto deve ser uma string." })
    sku?: string;

    @IsOptional()
    @Type(() => Number)
    @IsNumber({}, { message: "O preço do produto deve ser um número." })
    @IsPositive({ message: "O preço do produto deve ser um número positivo." })
    price?: number;
}
