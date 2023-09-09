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
    createWireframe(title: String!, imageUrl: String, note: String): Wireframe
    updateWireframe(id: ID!, title: String!, imageUrl: String, note: String): Wireframe
    deleteWireframe(id: ID!): Wireframe

    createInfo(projectId: ID!, repoURL: String, deployedURL: String, description: String): Project
    updateInfo(projectId: ID!, repoURL: String, deployedURL: String, description: String): Project
    deleteInfo(projectId: ID!, infoId: ID!): Project
  }
`;

module.exports = typeDefs;
