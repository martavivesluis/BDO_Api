import { Router } from "express";

import { getProduct, getInventorySync } from "../controllers/api";

const router = Router();

/**
 * @swagger
 * /product/{sku}:
 *   get:
 *     summary: Get a product by SKU
 *     tags:
 *       - Inventory
 *     parameters:
 *       - in: path
 *         name: sku
 *         description: SKU of the product to retrieve
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Product and stock found
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/GetProductResponse'
 *       404:
 *         description: Product not found or Stock not found
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */
router.get("/product/:sku", getProduct);

/**
 * @swagger
 * /inventory/sync:
 *   post:
 *     summary: Synchronize inventory from third-party provider
 *     tags:
 *       - Inventory
 *     responses:
 *       200:
 *         description: Synchronization successfull
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/GetInventorySyncResponse'
 */

router.post("/inventory/sync", getInventorySync);

export default router;
