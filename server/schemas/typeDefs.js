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

type Project {
  _id: ID
  title: String!
  info: [Info]
  timelines: [Timeline]
  wireframes: [Wireframe]
}

type Info {
  _id: ID
  repoURL: String
  deployedURL: String
  description: String
}

type Wireframe{
  id: ID!
  projectId: ID
  title : String!
  imageUrl: String 
  note: String
}

  type Query {
    users: [User]
    user(email: String!): User
    
    projects: [Project]!
    project(projectId: ID!): Project
  }

  type Mutation {
    addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth

    createWireframe(title: String!, imageUrl: String, note: String): Project
    updateWireframe(id: ID!, projectId: ID!, title: String!, imageUrl: String, note: String): Project
    deleteWireframe(id: ID!): Project

    createInfo(projectId: ID!, repoURL: String, deployedURL: String, description: String): Project
    updateInfo(projectId: ID!, repoURL: String, deployedURL: String, description: String): Project
    deleteInfo(projectId: ID!, infoId: ID!): Project
  }
`;

module.exports = typeDefs;
