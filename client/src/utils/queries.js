import { gql } from "@apollo/client";

export const QUERY_USER = gql`
query user($email: String!) {
  user(email: $email) {
    _id
    email
  }
}
`;



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

//--------------- ALL Projects ---------------//
export const GET_ALL_PROJECTS = gql`
  query getAllProjects {
    projects {
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

//--------------- ONE Project ---------------//
export const GET_PROJECT_BY_ID = gql`
  query getProjectById($projectId: ID!) {
    project(projectId: $projectId) {
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