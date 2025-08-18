import { Table, Column, Model, HasMany, PrimaryKey, AutoIncrement, AllowNull, Unique } from "sequelize-typescript";
import { Product } from "./product";

@Table({
  tableName: "providers",
  timestamps: true,
})
export class Provider extends Model {
  
  @PrimaryKey
  @AutoIncrement
  @Column
  id!: number;

  @AllowNull(false)
  @Unique
  @Column
  name!: string;

  @HasMany(() => Product)
  products!: Product[];
}
