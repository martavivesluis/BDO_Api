import { Sequelize } from "sequelize-typescript";
import { Stock } from "../models/stock";
import { Provider } from "../models/provider";
import { Product } from "../models/product";

const connection = new Sequelize(process.env.DATABASE_URL!, {
  dialect: "postgres",
  logging: false,
  models: [Provider, Product, Stock],
});

export default connection;
