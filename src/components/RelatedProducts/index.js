
import React from 'react';
import { graphql, StaticQuery, Link } from 'gatsby';
import Img from "gatsby-image"
import 'bootstrap/dist/css/bootstrap.css';
import {
	Container,
  Row,
  Col
  } from "reactstrap";
import AniLink from "gatsby-plugin-transition-link/AniLink"

const RelatedProducts = () => (
  <StaticQuery
    query={graphql`
      query RelatedProducts {
    allShopifyCollection(sort: {fields: products___parent___internal___type}, limit: 1) {
      edges {
        node {
            products {
                  title
                  description
                  shopifyId
                  handle
                  variants {
                    price
                    image {
                      originalSrc
                      localFile {
                        childImageSharp {
                          fluid {
                                ...GatsbyImageSharpFluid
                          }
                        }
                      }
                    }
                  }
                }
        }
      }
    }
  }

        `}
render={data => (
<div>
<section className="pb-5">
  <Container>
    <Row>
      <Col lg="12">
      <div className="releted-products-heading">
        <h2>Related Products</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
      </Col>
    </Row>
  </Container>
</section>
<section className="pb-5">

  <Container>
      {data.allShopifyCollection.edges.map(({ node }) => (

  <Row>

          <Col lg="12">
            <div className="releted-products-heading">
              <h2>Related Products</h2>
            </div>
          </Col>
          {node.products.map(product   => (
          <Col lg="3">
            <div className="best-selling-gifts">
          {product.variants.map(variant => (

  <div>
    <div className="gift-feature-img">
			<AniLink
					paintDrip to={`/product/${product.handle}/`} hex="#381928">
        <Img fluid={variant.image.localFile.childImageSharp.fluid}  alt="collection" />
      </AniLink>
      <AniLink paintDrip to={`/product/${product.handle}/`} hex="#381928"><h2>View More</h2></AniLink>
    </div>
                <AniLink paintDrip to={`/product/${product.handle}/`} hex="#381928">
                  <h2>{product.title}</h2></AniLink>

               <span>{variant.price}</span>

                </div>
          )

          )}
          </div>
            </Col>

          ))}
  </Row>
      ))}
      </Container>

</section>
</div>
)}
  />
);

export default RelatedProducts;
