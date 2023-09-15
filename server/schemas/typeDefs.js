const { gql } = require("apollo-server");

const typeDefs = `
type User {
  _id: ID!
  firstName: String!
  lastName: String!
  email: String!
  projects: [Project]
}

type Auth {
  token: ID!
  user: User
}

type Project {
  _id: ID!
  title: String
  repoURL: String
  deployedURL: String
  description: String
  timelines: [Timeline]
  wireframes: [Wireframe]
}


type Timeline {
  _id: ID!
  date: String
  goal: String
}

type Wireframe {
  id: ID!
  projectId: String
  title: String
  imageUrl: String
  note: String
}

  type Query {
    users: [User]
    user: User
    projects: [Project]!
    project(projectId: ID!): Project
    wireframes: [Wireframe]
    timelines: [Timeline]!
   
  }

  type Mutation {
    addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    updateUserPassword(email: String!, currentPassword: String!, newPassword: String!): User

    createProject(title: String!): User
    updateProject(projectId: ID!, title: String!): Project
    deleteProject(projectId: ID!): User

    createWireframe(projectId: ID!, title: String!, imageUrl: String, note: String): Wireframe
    updateWireframe(wireframeId: ID!, title: String!, imageUrl: String, note: String): Wireframe
    deleteWireframe(projectId: ID!, wireframeId: ID!): Project

    createTimeline(projectId: ID!, date: String!, goal: String!): Timeline
    updateTimeline(timelineId: ID!, date: String, goal: String): Timeline
    deleteTimeline(projectId: ID!, timelineId: ID!): Project

    createInfo(projectId: ID!, repoURL: String, deployedURL: String, description: String): Project
    updateInfo(projectId: ID!, repoURL: String, deployedURL: String, description: String): Project
    deleteInfo(projectId: ID!): Project
  }
`;

module.exports = typeDefs;