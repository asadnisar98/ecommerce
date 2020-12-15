import React from 'react'
import SEO from '~/components/seo'
import AboutInsatgram from '~/components/AboutInsatgram'
import AboutHeader from '~/components/AboutHeader'


const IndexPage = () => (
  <>
    <SEO title="About" keywords={[`gatsby`, `application`, `react`]} />
    <AboutHeader />
    <AboutInsatgram />


  </>
)

export default IndexPage
