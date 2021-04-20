import React from 'react';
import styled from 'styled-components';
import Header from '../common/Header';
import Footer from '../common/Footer';

import Layout from '../common/Layout';

const Message = styled.h1`
    color: #d7d7d7;
    padding: 50px 0;
`;
function NotFound() {
    return (
        <Layout>
            <Header></Header>
            <div className="container-fluid">
                <Message>Sorry, there are some mistakes.</Message>
            </div>
            <Footer></Footer>
        </Layout>
    )
}

export default NotFound;