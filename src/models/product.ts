import {
  Table,
  Column,
  Model,
  BelongsTo,
  ForeignKey,
  PrimaryKey,
  AutoIncrement,
  AllowNull,
  Unique,
  HasMany,
  HasOne
} from "sequelize-typescript";
import { Provider } from "./provider";
import { Stock } from "./stock";

@Table({
  tableName: "products",
  timestamps: true,
})
export class Product extends Model {
  
  @PrimaryKey
  @AutoIncrement
  @Column
  id!: number;

  @AllowNull(false)
  @Unique
  @Column
  sku!: string;

  @ForeignKey(() => Provider)
  @AllowNull(false)
  @Column
  providerId!: number;

  @BelongsTo(() => Provider)
  provider!: Provider;

  @HasOne(() => Stock)
  stock!: Stock;
}
