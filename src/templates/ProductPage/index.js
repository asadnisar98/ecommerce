import React from 'react'
import { graphql } from 'gatsby'

import SEO from '~/components/seo'
import ProductForm from '~/components/ProductForm'
import Gallery from "~/components/Gallery"
import RelatedProducts from "~/components/RelatedProducts"
import 'bootstrap/dist/css/bootstrap.css';
import {
	Container,
  Row,
  Col
  } from "reactstrap";
import {
  Img,
  TwoColumnGrid,
  GridLeft,
  GridRight,
} from '~/utils/styles'
import { ProductTitle, ProductDescription } from './styles'
import Slider from "react-slick";


const ProductPage = ({ data }) => {
  const product = data.shopifyProduct
  return (
    <>
    <div className="product-bg">
      <SEO title={product.title} description={product.description} />

      <Container>

        <TwoColumnGrid className="product-outer">
          <div className="product-left">
          <GridLeft>
    <Gallery product={product} />
          </GridLeft>
</div>
          <GridRight className="product-right">

            <ProductTitle>{product.title}</ProductTitle>
            <ProductDescription
              dangerouslySetInnerHTML={{ __html: product.descriptionHtml }}
            />

            <ProductForm product={product} />

          </GridRight>

        </TwoColumnGrid>

      </Container>
			<RelatedProducts />
            </div>
    </>
  )
}

export const query = graphql`
  query($handle: String!) {
    shopifyProduct(handle: { eq: $handle }) {
      id
      title
      handle
      productType
      description
      descriptionHtml
      shopifyId
      options {
        id
        name
        values
      }
      variants {
        id
        title
        price
        availableForSale
        shopifyId
        selectedOptions {
          name
          value
        }
      }
      priceRange {
        minVariantPrice {
          amount
          currencyCode
        }
        maxVariantPrice {
          amount
          currencyCode
        }
      }
      images {
        originalSrc
        id
        localFile {
          childImageSharp {
            fluid(maxWidth: 910) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    }
  }
`

export default ProductPage
