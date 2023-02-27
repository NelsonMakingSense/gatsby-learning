// Step 1: Import React
import * as React from 'react'
import { Link } from 'gatsby'
import Layout from './layout'

// Step 2: Define your component
const AboutPage = () => {
  return (
    <Layout pageTitle="About Me">  
    <main>
      <h1>About Me</h1>
      <p>Hi there! I'm the proud creator of this site, which I built with Gatsby.</p>
        <Link to="/">Back to home</Link>
    </main>
    </Layout>
  )
}

export const Head = () => <title>About Me</title>

// Step 3: Export your component
export default AboutPage