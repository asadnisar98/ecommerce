import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import styled from '@emotion/styled'
import ContextProvider from '~/provider/ContextProvider'
import Heading from '~/components/Header'
import { GlobalStyle } from '~/utils/styles'
import Navigation from '~/components/Navigation'
import Footer from '~/components/Footer'

const Wrapper = styled.div`
  margin: 0 auto;
`

const Layout = ({ children }) => {
  return (
    <ContextProvider>
      <GlobalStyle />
      <StaticQuery
        query={graphql`
          query SiteTitleQuery {
            site {
              siteMetadata {
                title
              }
            }
          }
        `}
        render={data => (
          <>
          <Heading />
            <Wrapper>
              {children}

            </Wrapper>
            <Footer />
          </>
        )}
      />
    </ContextProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
