
import React from 'react';

import Header from './Header';

import Footer from './Footer';
import { withRouter } from 'react-router';

import styled from 'styled-components';

const PageWrapper = styled.div`
    min-height: 100vh;
    background-color: #231917;
    margin-top: 80px;
`;

class Layout extends React.Component {
  componentDidMount () {
    const { scroll = true } = this.props
    if (scroll) {
      window.scroll({ top: 0, left: 0, behavior: 'smooth' })
    }
  }

  render () {
    const { children } = this.props

    return (
      <div>
        <Header />
        <PageWrapper>
          
          { children }
          
        </PageWrapper>
        <Footer />
        
      </div>
    )
  }
}
export default withRouter(Layout)
