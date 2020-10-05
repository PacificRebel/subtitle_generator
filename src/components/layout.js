
import React from "react"
import PropTypes from "prop-types"
import "typeface-quicksand"
import favicon from '../images/favicon.ico'
import Helmet from 'react-helmet'

import "./layout.css"

const Layout = ({ children }) => {

  return (
    <div>
    <Helmet>
  <link rel="icon" href={favicon} />
</Helmet>
    <>

      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
        <footer style={{
          marginTop: `2rem`
        }}>
            © {new Date().getFullYear()}, PacificRebel Productions
        </footer>
      </div>
    </>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
