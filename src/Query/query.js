import { gql } from '@apollo/client';

export const GET_REPOS = gql`
  query test($login: String! $count: Int!){
    organization(login: $login) {
      id    # needed to add this to stop the browser from complaining about merging organization objects
      repositories(last: $count) {
        edges {
          node {
            description
            id
            name
            url
            issues(last: 3) {
              edges {
                node {
                  id
                  title
                  url
                  closed
                }
              }
            }
            languages(first: 3) {
              edges {
                node {
                  id
                  name
                  color
                }
              }
            }
          }
        }
      }
    }
  }`