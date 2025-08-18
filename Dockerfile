# Etapa 1: build
FROM node:20 AS builder

# Etapa 1: build
FROM node:20 AS builder

WORKDIR /app

# Copiar dependencias e instalar
COPY package*.json ./
RUN npm install

# Copiar todo y compilar
COPY . .
RUN npm run build

# Etapa 2: runtime
FROM node:20

WORKDIR /app

# Copiar solo lo necesario desde el builder
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/dist ./dist

# Copiar archivos necesarios para migraciones/seeders si es necesario
COPY --from=builder /app/migrations ./migrations
COPY --from=builder /app/seeders ./seeders
COPY --from=builder /app/config ./config

# Utilidades para espera y conexión a base de datos
RUN apt-get update && apt-get install -y netcat-openbsd postgresql-client
COPY wait-for.sh ./wait-for.sh
RUN chmod +x wait-for.sh

EXPOSE 3000

# Ejecutar script de espera + migraciones + seeders + app
CMD ["./wait-for.sh", "node", "dist/app.js", "&&", "npx", "sequelize", "db:migrate", "&&", "npx", "sequelize", "db:seed:all"]


