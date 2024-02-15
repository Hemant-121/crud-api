const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema');
const dotenv = require('dotenv').config();
const app = express();

app.use('/', graphqlHTTP({
  schema,
  graphiql: true,
}));

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true,
}));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
