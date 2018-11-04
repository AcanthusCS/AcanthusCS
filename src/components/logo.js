import React from "react"
import { StaticQuery, graphql } from "gatsby"
import GatsbyImage from "gatsby-image"

class Logo extends React.Component {
  render() {
    return (
      <StaticQuery
        query={graphql`
          query {
            file: file(relativePath: { eq: "acanthus_logo.jpg" }) {
              childImageSharp {
                fixed(height: 100, width: 178) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        `}
        render={data => (
          <GatsbyImage
            fixed={data.file.childImageSharp.fixed}
          />
        )}
      />
    )
  }
}

export default Logo
