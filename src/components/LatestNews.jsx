import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { Route, useParams, useLocation } from 'react-router-dom';

import { fetchNews } from '../stores/news';

const Block = styled.div`
    color: #d7d7d7;
    text-align: left;
    padding: 10px 0;
`;

const Date = styled.div`
    font-size:1.3rem;
    text-align: center;
`;

const Title = styled.div`
    font-size:1.3rem;
    @media (max-width: 986px) {
        padding: 10px 0;
    }
`;

const Type = styled.div`
    font-size:1.3rem;
    text-align: center;
    background: #ef9350;
    color: black;
    border-radius: 18px;
    height: 2.1rem;
`;

const More = styled.div`

`;

const MoreText = styled.div`
    text-align: right;
    color: #d7d7d7;
    &:hover {
        color: #ef9350;
    }
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

function LatestNews() {

    const [hasError, setErrors] = useState(false);
    const [news, setNews] = useState([]);

    

    async function fetchData() {
      const res = await fetchNews(1, 9)
      res
        .json()
        .then(res => setNews(res))
        .catch(err => setErrors(err));
    }

    useEffect(() => {
          fetchData();
      }, []);


    return (
        <div className="container">
            { news.map((data, i)=> {
                return (
                    <div className="container">
                        <Block className="row m-auto">
                            <Type className="col-lg-1 col-md-2 col-3">
                                <TypeRender type={ data.type }></TypeRender>
                            </Type>
                            <Date className="col-lg-2 col-md-3 col-6">{ data.start_date }</Date>
                            <Title className="col-lg-9 col-md-7 col-12">
                                <Link to={"/news/" + data.id } class="router-link">
                                        { data.title }
                                </Link> 
                            </Title>
                        </Block>
                    </div>
                )
            })}

            <More>
                <Link to="/news" class="router-link">
                    <MoreText>更多消息</MoreText>
                </Link> 
            </More>

            
            
        </div>
    )
}

export default LatestNews