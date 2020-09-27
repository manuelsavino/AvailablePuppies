import React from "react"
import PropTypes from "prop-types"
import GlobalStyles from "../components/GlobalStyles/GlobaStyles"
import "normalize.css"

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyles />
      <main>{children}</main>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
