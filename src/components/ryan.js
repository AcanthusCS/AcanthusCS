import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"


class Ryan extends React.Component {
  render() {
    return (
      <StaticQuery
        query={graphql`
          query {
            file: file(relativePath: { eq: "ryan.jpg" }) {
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
              postion: "relative",
              zIndex: -1,
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


export default Ryan
