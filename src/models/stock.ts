import {
  Table,
  Column,
  Model,
  ForeignKey,
  BelongsTo,
  PrimaryKey,
  AutoIncrement,
  AllowNull,
  Unique,
} from "sequelize-typescript";
import { Product } from "./product";
import { u } from "msw/lib/core/HttpResponse-CKZrrwKE";

@Table({
  tableName: "stocks",
  timestamps: true,
  indexes: [
    {
      unique: true,
      fields: ["productId", "location"],
    },
  ],
})
export class Stock extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column
  id!: number;

  @ForeignKey(() => Product)
  @Unique
  @AllowNull(false)
  @Column
  productId!: number;

  @BelongsTo(() => Product)
  product!: Product;

  @AllowNull(false)
  @Column
  quantity!: number;

  @AllowNull(false)
  @Column
  location!: string;

  
}
