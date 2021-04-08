import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Layout from '../common/Layout';
import { Link } from 'react-router-dom';

import { Route, useParams, useLocation } from 'react-router-dom';

import { fetchNews } from '../stores/news';

const Body = styled.div`
    margin: auto;
    color: #d8d8d8;
    margin-top: 70px;
    padding-top: 20px;
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
    color: #d7d7d7;
    text-align: left;
    padding: 10px 0;
`;

const Date = styled.div`
    font-size:1.5rem;
    text-align: left;
`;

const Title = styled.div`
    font-size:1.5rem;
    color: #d7d7d7;
`;

const Type = styled.div`
    font-size:1.5rem;
    text-align: center;
    background: #ef9350;
    color: black;
    border-radius: 18px;
`;

function TypeRender(props) {
    if(props.type == "information") {
        return "通知"
    }
    else if(props.type == "exhibition") {
        return "展覽"
    }
    else return ""
}

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function News() {
    let query = useQuery();
    let type = query.get("type")
    const [hasError, setErrors] = useState(false);
    const [news, setNews] = useState([]);

    

    async function fetchData() {
      const res = await fetchNews(1, 9)
      res
        .json()
        .then(res => setNews(res.data))
        .catch(err => setErrors(err));
    }
    
    useEffect(() => {
      fetchData();

    }, []);
    
    if(hasError){
      return (
        <Layout>
          <div class="container-fluid">
            <Body>
              <div>No Data</div>
            </Body>
          </div>
        </Layout>
      )
    }
    else
      return (
        <Layout>
          <div class="container-fluid">
            <Body>
              
                <TopTitle class="container m-auto">
                  <En>Latest News</En>
                  <Ch>最新消息</Ch>
                </TopTitle>

                { news && news.map((data, i)=> {
                    return (
                        <div className="pb-4">
                            <Block className="row m-auto container">
                                <Type className="col-lg-1 col-sm-3">
                                    <TypeRender type={ data.type }></TypeRender>
                                </Type>
                                <Date className="col-lg-2 col-sm-3">{ data.start_date }</Date>
                                
                            </Block>
                            <Block className="row m-auto container">
                                <Title className="col-lg-12 col-sm-12"> 
                                    <Link to={"/news/" + data.id } class="router-link">
                                        { data.title }
                                    </Link> 
                                </Title>
                            </Block>
                        </div>
                    )
                })}
                

                
            </Body>
          </div>
        </Layout>
      )
  }


export default News;