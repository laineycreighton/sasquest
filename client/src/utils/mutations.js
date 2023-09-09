import { gql } from "@apollo/client";

export const CREATE_WIREFRAME = gql`
  mutation createWireframe(
    $projectId: ID!
    $title: String!
    $imageUrl: String
    $note: String
  ) {
    createWireframe(
      projectId: $projectId
      title: $title
      imageUrl: $imageUrl
      note: $note
    ) {
      _id
      projectId
      imageUrl
      note
    }
  }
`;
