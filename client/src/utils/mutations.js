import { gql } from "@apollo/client";
//-------------------- USER --------------------//
// Login user
export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        email
      }
    }
  }
`;

//  Add user
export const ADD_USER = gql`
  mutation addUser($firstName: String!, $lastName: String!, $email: String!, $password: String!) {
  addUser(firstName: $firstName, lastName: $lastName, email: $email, password: $password) {
    token
    user {
      _id
      email
    }
  }
}
`;

//-------------------- WIREFRAME --------------------//
// Create Wireframe
export const CREATE_WIREFRAME = gql`
  mutation createWireframe(
    $projectId: ID!
    $title: String!
    $imageURL: String
    $note: String
  ) {
    createWireframe(
      projectId: $projectId
      title: $title
      imageURL: $imageURL
      note: $note
    ) {
      _id
      projectId
      imageURL
      note
    }
  }
`;

// Update Wireframe
// export const UPDATE_WIREFRAME = gql`
//   mutation updateWireframe(
//     $projectId: ID!
//     $wireframeId: ID!
//     $title: String!
//     $imageURL: String
//     $note: String
//   ) {
//     updateWireframe(
//       projectId: $projectId
//       wireframeId: $wireframeId
//       title: $title
//       imageURL: $imageURL
//       note: $note
//     ) {
//       _id
//       projectId
//       imageURL
//       note
//     }
//   }
// `;

// Delete Wireframe
export const DELETE_WIREFRAME = gql`
  mutation deleteWireframe($projectId: ID!, $wireframeId: ID!) {
    deleteWireframe(projectId: $projectId, wireframeId: $wireframeId) {
      _id
      projectId
      imageURL
      note
    }
  }
`;

//-------------------- INFO --------------------//
// Add Info
export const ADD_INFO = gql`
  mutation createInfo(
    $projectId: ID!
    $repoURL: String!
    $deployedURL: String!
    $description: String!
  ) {
    createInfo(
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
  mutation deleteInfo(
    $projectId: ID!
    $infoId: ID!
    $repoURL: String!
    $deployedURL: String!
    $description: String!
  ) {
    deleteInfo(
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
export const ADD_PROJECT = gql`
  mutation createProject($title: String!) {
    createProject(title: $title, info: [], timeline: [], wireframe: []) {
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

// Update Project

export const UPDATE_PROJECT = gql`
  mutation updateProject(
    $projectId: ID!
    $title: String!
    $info: [InfoInput]!
    $timeline: [TimelineInput]!
    $wireframe: [WireframeInput]!
  ) {
    updateProject(
      projectId: $projectId
      title: $title
      info: $info
      timeline: $timeline
      wireframe: $wireframe
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

// Delete Project

export const DELETE_PROJECT = gql`
  mutation deleteProject($projectId: ID!) {
    deleteProject(projectId: $projectId) {
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

//-------------------- TIMELINE --------------------//

// Add Timeline
export const ADD_TIMELINE = gql`
  mutation createTimeline($date: Date!, $goal: String!) {
    createTimeline(date: $date, goal: $goal) {
      timeline {
        _id
        date
        goal
      }
    }
  }
`;

// Update Timeline
// export const UPDATE_TIMELINE = gql`
//   mutation updateTimeline($date: Date!, $goal: String!) {
//     updateTimeline(date: $date, goal: $goal) {
//       _id
//       date
//       goal
//     }
//   }
// `;

// Delete Wireframe
export const DELETE_TIMELINE = gql`
  mutation deleteTimeline($date: Date!, $goal: String!) {
    deleteTimeline(date: $date, goal: $goal) {
      _id
      date
      goal
    }
  }
`;
