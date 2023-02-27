// Step 1: Import React. This lets you use JSX inside your .js file.
import * as React from 'react'
import  Layout from './layout'
import { title } from './styles.module.css'

/* Step 2: Define your component. Note that your
component name should start with a capital letter. */
const MyComponent = () => {
  return (
    
    <Layout pageTitle="My Component">      
     <h1 className= {title}>Hi, welcome to my site!</h1>  
     
   </Layout>
    
    
  )
}

export const Head = () => <title>my component</title>

/* Step 3: Export your component so it
can be used by other parts of your app. */
export default MyComponent