import * as React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

const Seo = ( { title }) => {
    const data = useStaticQuery(graphql`
    query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `)

    return (<title>{title} | {data.site.siteMetadata.title}</title>)
} 

export default Seo

// import { useSiteMetadata } from "../hooks/use-site-metadata"

// export const SEO = ({ title, description, pathname, children }) => {
//   const { title: defaultTitle, description: defaultDescription, image, siteUrl, twitterUsername } = useSiteMetadata()

//   const seo = {
//     title: title || defaultTitle,
//     description: description || defaultDescription,
//     image: `${siteUrl}${image}`,
//     url: `${siteUrl}${pathname || ``}`,
//     twitterUsername,
//   }

//   return (
//     <>
//       <title>{seo.title}</title>
//       <meta name="description" content={seo.description} />
//       <meta name="image" content={seo.image} />
//       <meta name="twitter:card" content="summary_large_image" />
//       <meta name="twitter:title" content={seo.title} />
//       <meta name="twitter:url" content={seo.url} />
//       <meta name="twitter:description" content={seo.description} />
//       <meta name="twitter:image" content={seo.image} />
//       <meta name="twitter:creator" content={seo.twitterUsername} />
//       <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='0.9em' font-size='90'>👤</text></svg>" />
//       {children}
//     </>
//   )
// }