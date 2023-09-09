const typeDefs = `
type Wireframe{
  id: ID!
  projectId: ID
  title : String!
  imageUrl: String 
  note: String
}


  type Query {
   wireframes: [Wireframe]
  }

  type Mutation {
    createWireframe(title: String!, imageUrl: String, note: String): Wireframe
    updateWireframe(id: ID!, title: String!, imageUrl: String, note: String): Wireframe
    deleteWireframe(id: ID!): Wireframe
  }
`;

module.exports = typeDefs;
