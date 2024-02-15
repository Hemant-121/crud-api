
# GraphQL API for User CRUD Operations

This project implements a GraphQL API for performing CRUD operations on user data. It allows users to Create, Read, Update, and Delete (CRUD) user records. The API is built using Node.js, Express, and GraphQL.

## Project Structure

- `schema.js` : Defines the GraphQL schema, including types and operations.
- `resolvers.js` : Implements resolver functions for handling CRUD operations.
- `server.js` : Sets up the Express server and connects it with the GraphQL schema.

## Getting Started

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/your-username/your-graphql-project.git
   cd crup-api
    ```

## run this command to install the packages

```bash
npm install
```

## run this command to install the packages

```bash
npm start
```

## type this address in your browser
```bash
localhost:5000
```





# GraphQL Queries and Mutations


### Query to Retrieve All Users

```base
query {
  users {
    id
    name
    age
    email
  }
}
```

### Mutation to Create a New User

```base
mutation {
  addUser(name: "New User", age: 25, email: "example@gmail.com") {
    id
    name
    age
    email
  }
}
```

### Mutation to update the existing user

```base
mutation {
  updateUser(id: "0", name: "updated name", age: 25, email: "example@gmail.com") {
    id
    name
    age
    email
  }
}
```

### Mutation to Delete a User

```base
mutation {
  deleteUser(id: "3") {
    id
    name
    age
    email
  }
}
```
