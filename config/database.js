module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'dpg-ceuqljha6gdjl6pqu94g-a.oregon-postgres.render.com'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'guitarla_ro5h'),
      user: env('DATABASE_USERNAME', 'root'),
      password: env('DATABASE_PASSWORD', 'dWO6CdQ7AzRTb7CNDwh9RUsPVm0JgLNo'),
      ssl: env.bool('DATABASE_SSL', true),
    },
  },
});
