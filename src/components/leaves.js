import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

class Leaves extends React.Component {
  render() {
    return (
      <StaticQuery
        query={graphql`
          query {
            file: file(relativePath: { eq: "leaves.jpg" }) {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        `}
        render={data => (
          <Img
            style={{
              position: "sticky",
              top: 0,
              zIndex: -1,
              height: "100vh",
            }}
            imgStyle={{
              zIndex: -1,
            }}
            fluid={data.file.childImageSharp.fluid}
          />
        )}
      />
    )
  }
}


export default Leaves
