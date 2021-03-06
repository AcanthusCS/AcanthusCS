import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

import Layout   from '../components/layout';
import Landing  from '../components/landing';
import Approach from '../components/approach';
import Clients  from '../components/clients';
import About    from '../components/about';
import Contact  from '../components/contact';
import NavBar   from '../components/navbar';

import styles   from '../pages/index.module.scss';

const IndexPage = () => (
  <Layout>
    <StaticQuery
      query={graphql`
        query DataQuery {
          allDataYaml {
            edges{
              node {
                meta {
                  description
                }
                approach {
                  text
                  sections {
                    name
                    text
                  }
                }
                clients {
                  company
                  logo
                  name
                  title
                  text
                }
                about {
                  name
                  title
                  text {
                    key
                    sentance
                  }
                }
                contact {
                  phone
                  email
                  linkedin
                  credits
                  copyright
                }
              }
            }
          }
        }
      `}
      render={data => (
        data.allDataYaml.edges.map( edge =>
          <div key="main" className={styles.layout}>
            <Landing
              data={edge.node.meta}
            />
            <NavBar/>
            <Approach
              data={edge.node.approach}
            />
            <Clients
              data={edge.node.clients}
            />
            <About
              data={edge.node.about}
            />
            <Contact
              data={edge.node.contact}
            />
          </div>
        )
      )}
    />
  </Layout>
)

export default IndexPage
