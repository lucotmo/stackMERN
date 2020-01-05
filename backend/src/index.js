require('dotenv').config();

import express from 'express';
import graphqlHTTP from 'express-graphql';
import schema from './schema'

import { connect } from "./database"

const app = express();
connect()

app.get('/', (req, res) => {
  res.json({
    message: 'Hello world, stack MERN Backend'
  })
})

app.use('/graphql', graphqlHTTP({
  graphiql: true,
  schema: schema,
  context: {
    messageId: 'test'
  }
}));

app.listen(process.env.PORT || 3000, () => console.log(`Server on port ${process.env.PORT || 4000}`))
