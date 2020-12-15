
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

const CollectionHome = () => (
  <StaticQuery
    query={graphql`
      query MyQuery {
        allShopifyCollection(filter: {handle: {eq: "necklaces"}}) {
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
<section>

  <Container>
      {data.allShopifyCollection.edges.map(({ node }) => (

  <Row>
          <Col lg="12">
            <div className="gifts-heading">
              <span>Barnes Jewellery</span>
              <h2>Out Bestselling Gifts</h2>
            </div>
          </Col>
          {node.products.map(product   => (
          <Col lg="3">
            <div className="best-selling-gifts">
          {product.variants.map(variant => (

  <div>
    <div className="gift-feature-img">
			<AniLink
				paintDrip
				to={`/product/${product.handle}/`}
	hex="#381928"
				>
        <Img fluid={variant.image.localFile.childImageSharp.fluid}  alt="collection" />
      </AniLink>
			<AniLink
				paintDrip to={`/product/${product.handle}/`}
				hex="#381928">
				<h2>View More</h2>
			</AniLink>
    </div>
		<AniLink
			paintDrip  to={`/product/${product.handle}/`}
			hex="#381928">
                  <h2>{product.title}</h2></AniLink>
               <span>{variant.price}</span>

                </div>
          )

          )}
          </div>
            </Col>

          ))}
          <Col lg="12">
            <div className="gift-shop-button">
							<AniLink
								paintDrip  to="/" hex="#381928">Shop all collection
							</AniLink>
            </div>
          </Col>
  </Row>
      ))}
      </Container>

</section>
</div>
)}
  />
);

export default CollectionHome;
