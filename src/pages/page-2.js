import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <br></br>
    <br></br>
    <h1>Synttärionnittelut Markolle!! <span role="img" aria-label="Smiley"> 😊</span> <span role="img" aria-label="Hearts">❤️</span></h1>


    <Link to="/">Takaisin kotisivulle</Link>
  </Layout>
)

export default SecondPage
