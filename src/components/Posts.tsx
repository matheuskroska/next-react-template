import { gql, useQuery } from '@apollo/client'

const GET_ALL_POST = gql`
  {
    posts {
      nodes {
        id
        title
        featuredImage {
          node {
            sourceUrl
          }
        }
        categories {
          nodes {
            id
          }
        }
        content
        author {
          node {
            id
          }
        }
      }
    }
  }
`

const Posts = () => {
  const { loading, error, data } = useQuery(GET_ALL_POST)
  console.log(data)

  console.log(data)
  if (loading) {
    return <p>Loading...</p>
  }
  return (
    <div>
      {data.posts.nodes.map((post: any) => (
        <div key={post.id}>
          <h1>{post.title}</h1>
          <p>{post.content}</p>

          {post.categories.nodes.map((category: any) => (
            <p key={category.id}>{category.id}</p>
          ))}

          <p>{post.author.node.id}</p>

          <hr />
        </div>
      ))}
    </div>
  )
}

export default Posts
