const { gql } = require('apollo-server');

const typeDefs = gql`
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

type Timeline {
  _id: ID
  date: String
  goal: String
}

type Wireframe {
  id: ID!
  projectId: ID
  title: String!
  imageUrl: String
  note: String
}

  type Query {
    users: [User]
    user(userId: ID!): User

    projects: [Project]!
    project(projectId: ID!): Project
  }

  type Mutation {
    addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    updateUserPassword(currentPassword: String!, newPassword: String!): User

    createProject(userId: ID!, title: String!): Project
    updateProject(userId: ID!, title: String!): Project
    deleteProject(userId: ID!): Project

    createWireframe(projectId: ID!, title: String!, imageUrl: String, note: String): Project
    updateWireframe(projectId: ID!, title: String!, imageUrl: String, note: String): Project
    deleteWireframe(projectId: ID!): Project

    createTimeline(projectId: ID!, date: String, goal: String): Project
    updateTimeline(projectId: ID!, date: String, goal: String): Project
    deleteTimeline(projectId: ID!): Project

    createInfo(projectId: ID!, repoURL: String, deployedURL: String, description: String): Project
    updateInfo(projectId: ID!, repoURL: String, deployedURL: String, description: String): Project
    deleteInfo(projectId: ID!): Project
  }
`;

module.exports = typeDefs;
