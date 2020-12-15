import React, { useState } from 'react';
import { graphql, StaticQuery, Link } from 'gatsby';
import Img from 'gatsby-image';
import 'bootstrap/dist/css/bootstrap.css';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import { Container, Row, Col } from 'reactstrap';
import { useSelector, useDispatch } from 'react-redux';


import * as actions from '../../redux/actions/sortActions';
import * as actionTypes from '../../redux/actions/constants/actionTypes';


const ProductListing = () => {
  const { products } = useSelector((state) => state.sort);
  const dispatch = useDispatch();
  const [firstFetch, setFirstFetch] = useState(false);

  return (

    <StaticQuery
      query={graphql`
        query ProductList {
          allShopifyProduct {
            edges {
              node {
                description
                handle
                title
                shopifyId
                variants {
                  title
                  image {
                    localFile {
                      childImageSharp {
                        fluid {
<<<<<<< HEAD
                          ...GatsbyImageSharpFluid
     ...GatsbyImageSharpFluidLimitPresentationSize
=======
                           ...GatsbyImageSharpFluid
                           ...GatsbyImageSharpFluidLimitPresentationSize
>>>>>>> eb3f7d742630cbd5ce12a8b49f220eef2bcb039d
                        }
                      }
                    }
                  }
                  price
                }
              }
            }
          }
        }
      `}
      render={data => (
<<<<<<< HEAD


            (
              console.log('data', data.allShopifyProduct, products),
                !firstFetch
                  ? (dispatch(actions.allProducts(data)), setFirstFetch(true))
                  : null,

=======
    console.log('data', data.allShopifyProduct, products),
          !firstFetch
            ? (dispatch(actions.allProducts(data)), setFirstFetch(true))
            : null,

      
            (
>>>>>>> eb3f7d742630cbd5ce12a8b49f220eef2bcb039d
            <div>
              <section className="listing-page-banner">
                <Container>
                  <Row className="justify-content-md-center">
                    <Col lg="8">
                      <div className="listing-banner-text">
                        <h2>
                          We have a beautifully edited selection of jewellery from
                          stunning diamond engagement rings to fabulous watches
                          from the world’s finest horologists.
                        </h2>
                      </div>
                    </Col>
                  </Row>
                </Container>
              </section>
              <section className="listing-sec">
                <label for="sort">Sort By:</label>
                <select
                  name="sort"
                  id="sort"
                  onChange={(event) =>
                    dispatch(actions.sortProducts(event.target.value, data))
                  }
                >
                  <option value="">Select Option</option>
                  <option value={actionTypes.Alphabetically_A_to_Z}>
                    Alphabetically, A to Z
                  </option>
                  <option value={actionTypes.Alphabetically_Z_to_A}>
                    Alphabetically, Z to A
                  </option>
                  <option value={actionTypes.Price_High_To_Low}>
                    Price High To Low
                  </option>
                  <option value={actionTypes.Price_Low_To_High}>
                    Price Low To High
                  </option>
                </select>
                <Container>
                  <Row>
                    {products.allShopifyProduct?.edges.map(({ node }) => (
                      <Col lg="3" className="mb-4">
                        {node.variants.map((variant) => (
                          <div>
                            <div className="product-listing">
                              <div className="product-listing-img">
                                <AniLink
                                  paintDrip
                                  to={`/product/${node.handle}/`}
                                  hex="#381928"
                                >
                                  <Img
<<<<<<< HEAD
                                    fluid={variant.image.localFile.childImageSharp.fluid}
=======
                                    fluid={
                                      variant.image.localFile.childImageSharp
                                        .fluid
                                    }
>>>>>>> eb3f7d742630cbd5ce12a8b49f220eef2bcb039d
                                    alt="collection"
                                  />
                                </AniLink>
                                <div className="product-listing-hover">
                                  <p className="limitations">
                                    {node.description}
                                  </p>
                                  <AniLink
                                    paintDrip
                                    to={`/product/${node.handle}/`}
                                    hex="#381928"
                                  >
                                    <h2>View More</h2>
                                  </AniLink>
                                </div>
                              </div>
                              <AniLink
                                paintDrip
                                to={`/product/${node.handle}/`}
                                hex="#381928"
                              >
                                <h2>{node.title} </h2>
                              </AniLink>
                              <span>{variant.price} </span>
                            </div>
                          </div>
                        ))}
                      </Col>
                    ))}
                  </Row>
                </Container>
              </section>
            </div>
          )
<<<<<<< HEAD

=======
>>>>>>> eb3f7d742630cbd5ce12a8b49f220eef2bcb039d
      )}

    />
<<<<<<< HEAD

=======
>>>>>>> eb3f7d742630cbd5ce12a8b49f220eef2bcb039d
  )
}
export default ProductListing;
