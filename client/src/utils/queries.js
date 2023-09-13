import { gql } from "@apollo/client";

//--------------- ONE User ---------------//
export const QUERY_USER = gql`
  query user($userId: ID!) {
    user(userId: $userId) {
      _id
      email
      firstName
      lastName
      projects {
        _id
        deployedURL
        description
        repoURL
        timelines {
          _id
          date
          goal
        }
        title
        wireframes {
          id
          imageUrl
          note
          projectId
          title
        }
      }
    }
  }
`;

//--------------- ALL Projects for One User ---------------//
export const GET_ALL_PROJECTS_FOR_USER = gql`
  query GetProjectsByUserId($userId: ID!) {
    user(userId: $userId) {
      _id
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
  }
`;

export const QUERY_WIREFRAME = gql`
  query wireframe {
    wireframe {
      _id
      projectId
      title
      imageURL
      note
    }
  }
`;

//--------------- ALL Projects ---------------//
export const GET_ALL_PROJECTS = gql`
  query projects {
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
  query project($projectId: ID!) {
    project(projectId: $projectId) {
      _id
      title
      repoURL
      deployedURL
      description
      timelines {
        _id
        date
        goal
      }
      wireframes {
        id
        projectId
        title
        imageUrl
        note
      }
    }
  }
`;
