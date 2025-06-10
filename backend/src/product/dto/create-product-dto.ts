import { Type } from "class-transformer";
import { IsNotEmpty, IsNumber, IsPositive, IsString } from "class-validator";

export class CreateProductDto {
    @IsNotEmpty({ message: "O nome do produto é obrigatório." })
    @IsString({ message: "O nome do produto deve ser uma string." })
    name: string;

    @IsNotEmpty({ message: "O SKU do produto é obrigatório." })
    @IsString({ message: "O SKU do produto deve ser uma string." })
    sku: string;

    @IsNotEmpty({ message: "O preço do produto é obrigatório." })
    @Type(() => Number)
    @IsNumber({}, { message: "O preço do produto deve ser um número." })
    @IsPositive({ message: "O preço do produto deve ser um número positivo." })
    price: number;
}
