import { makeExecutableSchema } from 'graphql-tools'
import { resolvers } from "./resolvers"

const typeDefs = `
  type Query {
    Users: [User]
  }

  type User {
    _id: ID
    names: String!
    surnames: String!
    age: Int
  }

  type Mutation {
    createUser(input: UserInput): User
    deleteUser(_id: ID): User
    updateUser(_id: ID, input: UserInput): User
  }

  input UserInput {
    names: String!
    surnames: String!
    age: Int
  }
`;

export default makeExecutableSchema({
  typeDefs: typeDefs,
  resolvers: resolvers
})