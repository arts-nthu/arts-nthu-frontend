
import React from 'react';
import Header from './AdminHeader';
import { withRouter } from 'react-router';
import styled from 'styled-components';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

const PageWrapper = styled.div`
    min-height: 100vh;
    background-color: #231917;
    margin-top: 80px;
    color: #d7d7d7;
`;

const darkTheme = createMuiTheme({
  palette: {
    type: 'dark',
  },
});

class AdminLayout extends React.Component {
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
        <ThemeProvider theme={darkTheme}>
          <Header />
          <PageWrapper>
            
            { children }
            
          </PageWrapper>
        </ThemeProvider>
        
        
      </div>
    )
  }
}
export default withRouter(AdminLayout)
