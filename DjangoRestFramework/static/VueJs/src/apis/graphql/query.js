import gql from 'graphql-tag'

export const GET_LIST_MEMBER = gql`
  query GetListMember($page: Int!, $pageSize: Int!) {
    listMember(page: $page, pageSize: $pageSize) {
      dataPage {
        page
        pageSize
        totalPage
        totalMember
      }
      members {
        id
        userName
        contactNumber
        homeTown
      }
    }
  }
`;

export const GET_DETAIL_MEMBER = gql`
  query GetDetailMember($id: Int!) {
    memberDetail(id: $id) {
      ...member
    }
  }

  fragment member on MemberType {
    id
    userName
    contactNumber
    homeTown
  }
`;
