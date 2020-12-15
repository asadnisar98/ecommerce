import React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import 'bootstrap/dist/css/bootstrap.css';

import {
	Container, Row, Col
  } from "reactstrap";

const Terms = () => {
  const data = useStaticQuery(graphql`
    query Terms {
      allShopifyPage(filter: {title: {eq: "Terms and Conditions"}}) {
        edges {
          node {
            body
            title
          }
        }
      }
    }

   `)


       return (

       	  <div>
          <div className="bg-pages p-pages">
          <Container>
          <section className="pb-3 pt-3">
            {data.allShopifyPage.edges.map(({ node }) => (
              <div>
              <h2>{node.title}</h2>
          <div dangerouslySetInnerHTML={{ __html: node.body }} />
          </div>
        ))}
        </section>
        </Container>
        </div>
          </div>
       	);


}

export default Terms
