import gql from "graphql-tag";

export const CREATE_OR_UPDATE_MEMBER = gql`
  mutation CreateOrUpdateMutation(
    $id: Int
    $userName: String!
    $contactNumber: String!
    $homeTown: String!
  ) {
    createOrUpdateMember(
      id: $id
      userName: $userName
      contactNumber: $contactNumber
      homeTown: $homeTown
    ) {
      member {
        id
        userName
        contactNumber
        homeTown
      }
    }
  }
`;

export const DELETE_MEMBER = gql`
  mutation DeleteMember($id: Int) {
    deleteMember(id: $id) {
      msg
    }
  }
`;
