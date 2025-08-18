import { error, timeStamp } from 'console';
import path from 'path';
import swaggerJSDoc from 'swagger-jsdoc';

export const swaggerSpec = swaggerJSDoc({
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Warehouse API',
      version: '1.0.0',
      description: 'Documentación de la API con Swagger',
    },
    components: {
      schemas: {
        GetProductResponse: {
          type: 'object',
          properties: {
            sku: {
              type: 'string',
              example: 'ABC-1234',
            },
            quantity: {
              type: 'integer',
              example: 100,
            },
            location: {
              type: 'string',
              example: 'Warehouse-A',
            },
            lastUpdated: {
              type: 'string',
              format: 'date-time',
              example: '2025-08-17T12:34:56.789Z',
            },
          },
        },
        ErrorResponse: {
          type: 'object',
          properties: {
            message: {
              type: 'string',
              example: 'Product not found',
            },
          },
        },
        GetInventorySyncResponse: {
          type: 'object',
          properties: {
            synced: {
              type: 'integer',
              example: 5,
            },
            errors: {
              type: 'array',
              items: {
                type: 'string',
                example: 'Error processing provider mock-ws',
              },
            },
            timestamp:{
              type: 'string',
              format: 'date-time',
              example: '2025-08-17T12:34:56.789Z',
            }
          },
        },
      },
    },
  },
  apis: [path.join(__dirname, './routes/routes.js')],
});

