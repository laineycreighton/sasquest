const typeDefs = `
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
    projects: [Project]!
    project(projectId: ID!): Project
  }

  type Mutation {
    createWireframe(title: String!, imageUrl: String, note: String): Project
    updateWireframe(id: ID!, projectId: ID!, title: String!, imageUrl: String, note: String): Project
    deleteWireframe(id: ID!): Project

    createInfo(projectId: ID!, repoURL: String, deployedURL: String, description: String): Project
    updateInfo(projectId: ID!, repoURL: String, deployedURL: String, description: String): Project
    deleteInfo(projectId: ID!, infoId: ID!): Project
  }
`;

module.exports = typeDefs;
