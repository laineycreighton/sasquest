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
  mutation addInfo(
    $projectId: ID!
    $repoURL: String!
    $deployedURL: String!
    $description: String!
  ) {
    addInfo(
      projectId: $projectId
      repoURL: $repoURL
      deployedURL: $deployedURL
      description: $description
    ) {
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
  mutation updateInfo(
    $projectId: ID!
    $infoID: ID!
    $repoURL: String!
    $deployedURL: String!
    $description: String!
  ) {
    updateInfo(
      projectId: $projectId
      infoId: $infoId
      repoURL: $repoURL
      deployedURL: $deployedURL
      description: $description
    ) {
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
  mutation updateInfo(
    $projectId: ID!
    $infoId: ID!
    $repoURL: String!
    $deployedURL: String!
    $description: String!
  ) {
    updateInfo(
      projectId: $projectId
      infoId: $infoId
      repoURL: $repoURL
      deployedURL: $deployedURL
      description: $description
    ) {
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

//-------------------- PROJECT --------------------//

// Add Project
//createProject has arguments title and projectId
export const ADD_PROJECT = gql`
  mutation createProject($title: String!, $projectId: ID!) {
    createProject(title: $title, projectId: $projectId) {
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

// Update Project has arguments projectid and title

export const UPDATE_PROJECT = gql`
  mutation updateProject($projectId: ID!, $title: String!) {
    updateProject(projectId: $projectId, title: $title) {
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

// Delete Project has arguments project id and title

export const DELETE_PROJECT = gql`
  mutation deleteProject($projectId: ID!, $title: String!) {
    deleteProject(projectId: $projectId, title: $title) {
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
