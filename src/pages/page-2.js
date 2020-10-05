import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Synttärionnittelut maailman parhaimmalle äitille!! <span role="img" aria-label="Hearts">❤️❤️❤️</span></h1>


    <Link to="/">Takaisin kotisivulle</Link>
  </Layout>
)

export default SecondPage
