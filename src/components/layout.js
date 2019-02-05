import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import logo from "../images/icon2.png"

import "./layout.scss"

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        allDataYaml {
          edges{
            node {
              meta {
                title
                description
                keywords
              }
            }
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.allDataYaml.edges[0].node.meta.title}
          meta={[
            { name: 'description', content: data.allDataYaml.edges[0].node.meta.description },
            { name: 'keywords', content: data.allDataYaml.edges[0].node.meta.keywords },
          ]}
        >
          <meta charset="utf-8" />
          <meta property="og:title" content={data.allDataYaml.edges[0].node.meta.title} />
          <meta property="og:description" content={data.allDataYaml.edges[0].node.meta.description} />
          <meta property="og:image" content={logo} />
          <meta property="og:url" content="https://acanthuscs.com" />
          <meta name="twitter:card" content="summary_large_image" />
          <link href="https://fonts.googleapis.com/css?family=Oswald:300|Raleway:400" rel="stylesheet"/>
          <meta name="google-site-verification" content="i0-pVtkViJQuUt9OtyXJwqJ1ozlW1lt15weEMFTnc1k" />
        </Helmet>
        {children}
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
