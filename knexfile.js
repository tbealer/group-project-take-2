module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/cwatch'
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }

};