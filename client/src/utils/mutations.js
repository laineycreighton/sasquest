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

//-------------------- INFO --------------------//
// Add Info
export const ADD_INFO = gql`
  mutation addInfo($projectId: ID!, $repoURL: String!, $deployedURL: String!, $description: String!) {
    addInfo(projectId: $projectId, repoURL: $repoURL, deployedURL: $deployedURL, description: $description) {
      _id
      title
      info {
        _id
        repoURL
        deployedURL
        description
      }
      timeline {
        _id
        date
        goal
      }
      wireframe {
        _id
        title
        imageURL
        note
      }
    }
  }
`;

// Update Info
export const UPDATE_INFO = gql`
  mutation updateInfo($projectId: ID!, $infoID: ID!, $repoURL: String!, $deployedURL: String!, $description: String!) {
    updateInfo(projectId: $projectId, infoId: $infoId, repoURL: $repoURL, deployedURL: $deployedURL, description: $description) {
      _id
      title
      info {
        _id
        repoURL
        deployedURL
        description
      }
      timeline {
        _id
        date
        goal
      }
      wireframe {
        _id
        title
        imageURL
        note
      }
    }
  }
`;

// Delete Info
export const DELETE_INFO = gql`
  mutation updateInfo($projectId: ID!, $infoID: ID!, $repoURL: String!, $deployedURL: String!, $description: String!) {
    updateInfo(projectId: $projectId, infoId: $infoId, repoURL: $repoURL, deployedURL: $deployedURL, description: $description) {
      _id
      title
      info {
        _id
        repoURL
        deployedURL
        description
      }
      timeline {
        _id
        date
        goal
      }
      wireframe {
        _id
        title
        imageURL
        note
      }
    }
  }
`;