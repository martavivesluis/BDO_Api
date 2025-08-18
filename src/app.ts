import express from "express";
import router from "./routes/routes";
import connection from "./db/config";
import { server } from "./external-wms/server";
import swaggerUi from 'swagger-ui-express';
import { swaggerSpec } from "./swagger";



export async function startServer() {
  try {
    // Iniciamos el servidor de terceros
    server.listen();

    await connection.authenticate();
    console.log("Database connected");

    await connection.sync();

    const app = express();
    app.use(express.json());
    app.use("/", router);

    // Swagger UI
    app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

    app.listen(3000, () => {
      console.log("Server listening on port 3000");
    });

    return app;
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}

startServer();
