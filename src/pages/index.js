import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Synttärionnittelut maailman parhaimmalle äitille!! <span role="img" aria-label="Hearts">❤️❤️❤️</span></h1>

    <Link to="/page-2/">Go to page 2</Link> <br />
  </Layout>
)

export default IndexPage
