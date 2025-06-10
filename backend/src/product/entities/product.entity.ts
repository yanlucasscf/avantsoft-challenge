import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("products")
export class Product {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: "varchar", length: 255 })
    name: string;

    @Column({ type: "numeric", precision: 15, scale: 2 })
    price: number;

    @Column({ type: "varchar", length: 150, unique: true })
    sku: string;

    @CreateDateColumn({ type: "timestamp" })
    createdAt: Date;

    @CreateDateColumn({ type: "timestamp" })
    updatedAt: Date;
}
