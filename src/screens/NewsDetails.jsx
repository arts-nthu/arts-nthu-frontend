import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Layout from '../common/Layout';
import ReactMarkdown from 'react-markdown';

import { Route, useParams } from 'react-router-dom';

import { fetchNewsByID } from '../stores/news';


const Body = styled.div`
    margin: auto;
    color: #d8d8d8;
    margin-top: 70px;
    padding: 20px 0;
`;

const TopTitle = styled.div`
  text-align: center;
  color: #ef9350;
  
`;

const En = styled.div`
  font-size: 1.5rem;
`;

const Ch = styled.div`
  font-size: 2rem;
`;

const Block = styled.div`
    margin: 30px 0;
`;

const Title = styled.div`
    font-size: 1.5rem;
`;


const Type = styled.div`
    font-size:1.5rem;
    text-align: center;
    background: #ef9350;
    color: black;
    border-radius: 18px;
`;

const Date = styled.div`
    font-size:1.5rem;
    text-align: left;
`;


function NewsDetails() {
    const { id } = useParams();
    const [hasError, setErrors] = useState(false);
    const [news, setNews] = useState([]);

    async function fetchData() {
        const res = await fetchNewsByID(id)
        res
          .json()
          .then(res => setNews(res))
          .catch(err => setErrors(err));
    }
    
    useEffect(() => {
        fetchData();
    }, {});

    function TypeRender(props) {
        if(props.type == "information") {
            return "通知"
        }
        else if(props.type == "exhibition") {
            return "展覽"
        }
        else return ""
    }


    
    return (
        <Layout>
            <div class="container">
                <Body>
                    <TopTitle class="container m-auto">
                        <En>Latest News</En>
                        <Ch>最新消息</Ch>
                    </TopTitle>
                    <Block className="row m-auto container">
                        <Type className="col-lg-1 col-sm-3">
                            <TypeRender type={ news.type }></TypeRender>
                        </Type>
                        <Date className="col-lg-2 col-sm-3">{ news.start_date }</Date>
                        
                    </Block>
                    <Block>
                        <Title>{ news.title }</Title>
                    </Block>
                    <Block>
                        <ReactMarkdown className="exhibition-detail-content">{ news.content }</ReactMarkdown>
                    </Block>
                    
                    
                </Body>
                
            </div>
        </Layout>
    )
}

export default NewsDetails;
