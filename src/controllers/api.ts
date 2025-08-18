import { Request, Response, NextFunction } from "express";
import { Product } from "../models/product";
import { Stock } from "../models/stock";
import { Provider } from "../models/provider";

import originalFetch from 'isomorphic-fetch';
import fetchRetry from 'fetch-retry';
import { GetInventorySyncResponse} from "../types/inventory";
import { GetProductResponse } from "../types/product";


export async function getProduct(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  // No agrego validacion de patrón alfanumerico ya que los valores de sku de ejemplo son con -
  const { sku } = req.params;

  try {
    const product = await Product.findOne({
      where: { sku },
      include: [
        {
          model: Stock,
          as: "stock",
        },
      ],
    });

    if (!product) {
      res.status(404).json({ message: "Product not found" });
      return; // Importante para no seguir ejecutando
    }

    if (!product.stock) {
      res.status(404).json({ message: "Stock not found" });
      return;
    }

    const result: GetProductResponse = {
      sku,
      quantity: product.stock.quantity,
      location: product.stock.location,
      lastUpdated: product.stock.updatedAt,
    };

    res.json(result);
  } catch (error) {
    next(error);
  }
}

const fetch = fetchRetry(originalFetch);

export async function getInventorySync(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const response = await fetch("https://external-wms/api/inventory", {
      retries: 3,
      retryDelay: 1000,
    });

    if (!response.ok) {
      throw new Error(`Fetch failed with status ${response.status}`);
    }

    const data = await response.json();

    const errors: string[] = [];
    let synced = 0;
    const timestamp = new Date().toISOString();

    for (const element of data) {
      try {
        const [provider] = await Provider.findOrCreate({
          where: { name: element.provider },
        });

        for (const stock of element.stocks) {
          const [product] = await Product.findOrCreate({
            where: { sku: stock.sku, providerId: provider.id },
          });

          await Stock.upsert({
            productId: product.id,
            quantity: stock.quantity,
            location: stock.location,
          });

          synced++;
        }
      } catch (err) {
        errors.push(`Error processing provider ${element.provider}`);
      }
    }

    const result: GetInventorySyncResponse = { synced, errors, timestamp };

    res.json(result);

  } catch (err) {
    next(err);
  }
}
