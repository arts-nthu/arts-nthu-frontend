import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Layout from '../common/Layout';
import ReactMarkdown from 'react-markdown';

import { fetchExhibitionByID } from '../stores/exhibition';
import { Route, useParams } from 'react-router-dom';


const Body = styled.div`
    margin: auto;
    color: #d8d8d8;
    margin-top: 70px;
`;

const Block = styled.div`
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 80vh;
    width: 80%;
    
    background-position: center;
    background-size: cover;
    background-image: linear-gradient(0deg, rgba(36, 44, 51, 0.5), rgba(36, 44, 51, 0.5));
    align-items: center;
`;

const PropertyBlock = styled.div`
    padding: 3vh;
    
`;

const RightBody = styled.div`
    margin: auto;
    color: #d8d8d8;
    margin-top: 5vh;
    padding-left: 30px;
`;

const Date = styled.div`
    font-size: 1.2rem;

`;
const Title = styled.div`
    font-size: 2rem;
    padding:  20px 0;
`;
const Subtitle = styled.div`
    font-size: 1.3rem;
    padding-bottom:  20px;
`;

const Type = styled.button`
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    align-items: center;
    height: 36px;
    padding: 10px 20px;
    border-radius: 18px;
    border-width: 0;
    background-color: #ef9350;
    letter-spacing: 1.6px;
    color: #231917;
    margin-bottom: 10px;
`;

const DetailText = styled.div`
    color: #ef9350;
    font-size: 1.7rem;
    margin: 15px 0;
`;

const Detail = styled.div`
    margin-bottom: 10px;
    font-size: 1.2rem;
    display: flex;
`;

const Left = styled.div`
    width: 100px;
`;

const Performer = styled.div`
    margin-bottom: 10px;
`;

function ExhibitionDetails() {
    const { id } = useParams();
    const [hasError, setErrors] = useState(false);
    const [exhibition, setExhibition] = useState([]);

    useEffect(() => {
    
        
    }, []);

    async function fetchData() {
        const res = await fetchExhibitionByID(id);
        res
          .json()
          .then(res => setExhibition(res))
          .catch(err => setErrors(err));
    }
    
    useEffect(() => {
        fetchData();
    }, {});

    function TypeRender(props) {
        if(props.type == "visual_art") {
            return "視覺藝術"
        }
        else if(props.type == "performing_art") {
            return "表演藝術"
        }
        else if(props.type == "film_art") {
            return "影片藝術"
        }
        else if(props.type == "public_art") {
            return "公共藝術"
        }
        else if(props.type == "ai_music") {
            return "AI樂團"
        }
        else return ""
    }


    
    return (
        <Layout>
            <div class="container-fluid">
                <Body>
                    <PropertyBlock className="row h-70">
                        <div className="col-lg-6 col-sm-12 h-70">
                        <Block
                            style={{
                                backgroundPosition: 'center',
                                backgroundSize: 'cover',
                                backgroundImage: `url('${exhibition.cover}')`,
                                
                                
                            }}
                            >
                            
                        </Block>
                        </div>
                        <RightBody className="col-lg-6 col-sm-12">
                            <Type>
                                <TypeRender type={exhibition.type}/>
                            </Type>
                            <Date>{ exhibition.start_date } ~ { exhibition.end_date }</Date>
                            <Title>{ exhibition.title }</Title>
                            <Subtitle>{ exhibition.subtitle }</Subtitle>
                            <DetailText>展演資訊</DetailText>
                            <Detail>
                                <Left>主辦</Left>
                                <div className="right">{ exhibition.host }</div>
                            </Detail>
                            <Detail>
                                <Left>展演者</Left>
                                <div>
                                    {/*
                                    { exhibition.performer.persons.map ((data, i) => {
                                    return (
                                        <>
                                            <Performer>{ data.name } { data.title }</Performer>
                                        </>
                                    )})
                                    }
                                */}
                                </div>
                                    
                            
                            </Detail>
                            <Detail>
                                <Left>時間</Left>
                                <div className="right">{ exhibition.daily_start_time } ~ { exhibition.daily_end_time }</div>
                            </Detail>
                            <Detail>
                                <Left>地點</Left>
                                <div className="right">{ exhibition.location }</div>
                            </Detail>
                            <Detail>
                                <Left>售票資訊</Left>
                                <div className="right">{ exhibition.ticket_info }</div>
                            </Detail>
                        </RightBody>
                    </PropertyBlock>
                    <div class="row container m-auto">
                        <div class="col-12">
                            <DetailText>展演介紹</DetailText>
                            <ReactMarkdown className="exhibition-detail-content">{ exhibition.content }</ReactMarkdown>
                        </div>
                    </div>
                    
                    
                    
                </Body>
                
            </div>
        </Layout>
    )
}

export default ExhibitionDetails;


