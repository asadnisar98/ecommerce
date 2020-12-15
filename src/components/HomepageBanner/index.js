import React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import 'bootstrap/dist/css/bootstrap.css';
import '../components.css';

import {
	Container, Row, Col
  } from "reactstrap";

const Homebanner = () => {
  const data = useStaticQuery(graphql`
    query Homebanner {
        allContentfulHeader {
          edges {
            node {
              bannerFirst {
                fluid {
                  src
                }
              }
              bannerTwo {
                fluid {
                  src
                }
              }
                bannerThree {
                  fluid {
                    src
                  }
                }
            }
          }
        }
    }
   `)



       return (
       	  <div>
            {data.allContentfulHeader.edges.map(({ node }) => (
              <div>
              <Container fluid className="banner-outter">
                <section className="main-banner">
                  <Row>
                    <Col lg="6" className="p-0">
                      <div className="banner-left">
                      <Img  fluid={node.bannerFirst.fluid} key={node.bannerFirst.fluid.src} alt="banner" />
                      </div>
                    </Col>
                    <Col lg="6" className="p-0">
                      <div className="banner-right">
                        <Img className="mb-1 ml-1" fluid={node.bannerTwo.fluid} key={node.bannerTwo.fluid.src} alt="banner" />
                        <Img className="ml-1" fluid={node.bannerThree.fluid} key={node.bannerThree.fluid.src} alt="banner" />
                    </div>
                    </Col>
                  </Row>

                </section>
              </Container>

              <Container className="display-block-mbl">
                <section className="main-banner">
                  <Row>
                    <Col lg="6">
                      <div className="banner-left">
                      <Img className="mb-2"  fluid={node.bannerFirst.fluid} key={node.bannerFirst.fluid.src} alt="banner" />
                      </div>
                    </Col>
                    <Col lg="6">
                      <div className="banner-right">
                        <Img className="mb-2" fixed={node.bannerTwo.fluid} key={node.bannerTwo.fluid.src} alt="banner" />
                        <Img fluid={node.bannerThree.fluid} key={node.bannerThree.fluid.src} alt="banner" />
                    </div>
                    </Col>
                  </Row>
                </section>
              </Container>
              </div>
            ))}


       	  </div>
       	);


}

export default Homebanner
