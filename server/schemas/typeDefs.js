//---------------------------------------- Refactor the code ----------------------------------------//

const typeDefs = `
{******* User typeDef ********}
  type User {
    _id: ID!
    firstName: String!
    lastName: String!
    email: String!
    password: String!
    projects: [Project]
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(email: String!): User
  }

  type Mutation {
    addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth

  
  }
`;

module.exports = typeDefs;
