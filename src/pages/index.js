import React from 'react'
import { Link } from 'gatsby'
import SEO from '~/components/seo'
import CollectSection from '~/components/CollectionSection'
import HomepageBanner from '~/components/HomepageBanner'
import CollectionHome from '~/components/CollectionHome'


const IndexPage = () => (
  <>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <HomepageBanner />
    <CollectSection />
    <CollectionHome />

  </>
)

export default IndexPage
