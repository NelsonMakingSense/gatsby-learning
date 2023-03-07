import * as React from 'react'
import Layout from '../../components/layout'
import Seo from '../../components/seo'
import { graphql } from 'gatsby'
import { Link } from 'gatsby'

const BlogPage = ({data}) => {
  return (
    <Layout pageTitle="My Blog Posts">
      {/* la data viene del query que guarda el resultado de la consulta en la capa de datos de gatsby */}
  {
        data.allMdx.nodes.map((node) => (
          <article key={node.id}>
            <h2>
              <Link to={`/blog/${node.frontmatter.slug}`}>
                {node.frontmatter.title}
              </Link>
            </h2>
            <p>Posted: {node.frontmatter.date}</p>
            <p>{node.excerpt}</p>
          </article>
        ))
      }
     {/* <ul>
      {
        data.allFile.nodes.map(node => (
          <li key={node.name}>
            {node.name}
          </li>
        ))
      }
      </ul> */}
    </Layout>
  )
}

export const query = graphql`
  query {
    allMdx(sort: { frontmatter: { date: DESC }}) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
        }
        id
        excerpt
      }
    }
  }
`

// para llamar los archivos mdx en el blog

// export const query = graphql`query {
//   allFile(filter: {sourceInstanceName: {eq: "blog"}}) {
//     nodes {
//       name
//     }
//   }
// }`

export const Head = () => <Seo title="My Blog Posts" />

export default BlogPage