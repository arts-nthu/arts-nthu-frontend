import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Layout from '../common/Layout';
import { Link } from 'react-router-dom';

import { Route, useParams, useLocation } from 'react-router-dom';

import { fetchExhibitions } from '../stores/exhibition';


const Body = styled.div`
    margin: auto;
    color: #d8d8d8;
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
    margin-right: 5px;
`;

const TypeBlock = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const EventItem = styled.div`
  width: 350px
`;

const EventCard = styled.div`
  background-color: #231917!important;
  width: 300px;
  border: 0px!important;
  box-shadow: 0px 0px 0px 0px!important;
  text-align: center;
`;

const EventInfo = styled.div`
  margin-bottom: 10px
`;

const EventImg = styled.div`
  height: 270px;
  width: 230px;
  margin: auto;
  transition: background-size 2s!important;
  &:hover {
    background-size: auto 120%!important;
    
  }
`;

const EventDate = styled.div`
  font-size: 20px;
  color: $light-white;
  letter-spacing: 1.3px;
  margin: 5px 0;
`;

const EventTitle = styled.div`
  margin-top: 20px;
  font-size: 20px;
  font-weight: 600;
  color: $light-white;
  letter-spacing: 2.1px;
  position: relative;
`;

const EventSubtitle = styled.div`
  margin-top: 8px;
  margin-bottom: 40px;
  letter-spacing: 1.4px;
  color: #ef9350;
`;

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function ComingExhibitions() {
    const [hasError, setErrors] = useState(false);
    const [exhibitions, setExhibitions] = useState([]);

    async function fetchData() {
      const res = await fetchExhibitions(1, 9)
      res
        .json()
        .then(res => setExhibitions(res.data))
        .catch(err => setErrors(err));
    }
    
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
          <Body className="container">
            <div class="event-waterfall">
                  <div className="row">
                    { exhibitions.map((data, i) => {
                      return (
                        <EventItem className="col">
                          <EventCard className="m-auto">
                            <div class="link">
                                <EventInfo>
                                    <TypeBlock>
                                      <Type>
                                        <TypeRender type={ data.type }/>
                                      </Type>
                                      <EventDate>{ data.start_date }</EventDate>
                                    </TypeBlock>
                                    <Link to={"/exhibitions/" + data.id }>
                                        <EventImg
                                        style={{
                                          backgroundPosition: 'center',
                                          backgroundSize: 'cover',
                                          backgroundImage: `url('${data.cover}')`,
                                          
                                          
                                      }}></EventImg>
                                    </Link>
                                    <EventTitle> { data.title }
                                        <div class="slash"></div>
                                    </EventTitle>
                                    <EventSubtitle>{ data.subtitle }</EventSubtitle>
                                </EventInfo>
                            </div>
                          </EventCard>
                          
                        </EventItem>
                      )
                      
                    })}
                  </div>
                </div>
            </Body>
      )
  }


export default ComingExhibitions;