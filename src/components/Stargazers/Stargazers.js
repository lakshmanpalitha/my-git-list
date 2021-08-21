import gql from 'graphql-tag'

export default {
  name: 'stargazers',

  data: function() {
    return {
    };
  },
  apollo: {
    viewer:{
      query: gql`
       {
          viewer {
            repositories(first: 20) {
              edges {
                node {
                  id
                  name
                  openGraphImageUrl          
                  stargazers(orderBy: {field: STARRED_AT, direction: DESC}) {
                    totalCount
                  }
                  updatedAt
                }
              }
            }
          }
        }`

      }
  },
}


