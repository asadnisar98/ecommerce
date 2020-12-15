import React from 'react'
import { Link } from 'gatsby'
import SEO from '~/components/seo'
import ProductListing from '~/components/ProductListing'


const Products = () => (
  <>
    <SEO title="Products" keywords={[`gatsby`, `application`, `react`]} />
  <ProductListing />

  </>
)

export default Products
