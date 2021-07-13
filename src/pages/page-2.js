import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <br></br>
    <br></br>
    <h1>Don't know what to do with this page yet <span role="img" aria-label="Smiley"> 😊</span> <span role="img" aria-label="Hearts">❤️</span></h1>


    <Link to="/">Back to the home page</Link>
  </Layout>
)

export default SecondPage
