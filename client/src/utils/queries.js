import { gql } from "@apollo/client";

export const QUERY_WIREFRAME = gql`
  query wireframe {
    wireframe {
      _id
      projectId
      title
      imageUrl
      note
    }
  }
`;
