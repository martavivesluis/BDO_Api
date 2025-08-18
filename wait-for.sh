echo "⏳ Esperando a que PostgreSQL esté disponible en db:5432..."

# Espera a que PostgreSQL esté listo
until pg_isready -h db -p 5432 -U postgres > /dev/null 2>&1; do
  echo "⏳ Esperando a que PostgreSQL esté disponible en db:5432..."
  sleep 1
done

echo "✅ PostgreSQL está listo. Arrancando app..."

exec "$@"
