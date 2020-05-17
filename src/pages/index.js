import React from "react"
import { Helmet } from "react-helmet"

import Layout from "../components/layout"

const IndexPage = () => (
  <>
    <Helmet>
      <meta charSet="utf-8" />
      <title>DinosaurJS</title>
    </Helmet>
    <Layout />
  </>
)

export default IndexPage
