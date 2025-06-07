import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('product')
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255 })
  name: string;

  @Column({ type: 'numeric', precision: 15, scale: 2 })
  price: number;

  @Column({ type: 'varchar', length: 150, unique: true })
  sku: string;
}
