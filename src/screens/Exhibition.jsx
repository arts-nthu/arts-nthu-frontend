import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Layout from '../common/Layout';
import { Link } from 'react-router-dom';

import { Route, useParams, useLocation } from 'react-router-dom';
import { Pagination } from '@material-ui/lab';
import { fetchExhibitions, fetchExhibitionsByType } from '../stores/exhibition'

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

const EventTag = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

`;

const TagGroup = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap
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

function Exhibition() {
    let query = useQuery();
    let type = query.get("type");
    const [hasError, setErrors] = useState(false);
    const [exhibitions, setExhibitions] = useState([]);
    const [page, setPage] = useState(1);
    const [maxSize, setMaxSize] = useState(1);

    const handleChange = (event, value) => {
      setPage(value);
      fetchDataByType(type)
      window.scroll({ top: 0, left: 0, behavior: 'smooth' })
    };

    async function fetchData() {
      const res = await fetchExhibitions(1, 9)
      res
        .json()
        .then(res => {
          setMaxSize(res.max_size)
          setExhibitions(res.data)
        })
        .catch(err => setErrors(err));
    }

    async function fetchDataByType(type) {
      const res = await fetchExhibitionsByType(page, 9, type)
      res
        .json()
        .then(res => {
          setExhibitions(res.data)
          setMaxSize(res.max_size)
        })
        .catch(err => setErrors(err));
    }
    
    useEffect(() => {
      if( type == "visual_art" || type == "public_art" || type == "performing_art" || type == "film_art" || type == "ai_music")
        fetchDataByType(type)
      else 
        fetchData();

    }, []);
    
    console.log(`URL: ${process.env.PUBLIC_URL}`)

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
              <div className="event-page">
                <TopTitle>
                  <En>Program</En>
                  <Ch>全部展演</Ch>
                </TopTitle>
                <EventTag>
                  <TagGroup>
                    <a className="tag-link" href="/exhibitions?type=visual_art">視覺藝術</a>
                    <a className="tag-link" href="/exhibitions?type=performing_art">表演藝術</a>
                    <a className="tag-link" href="/exhibitions?type=film_art">電影藝術</a>
                    <a className="tag-link" href="/exhibitions?type=public_art">公共藝術</a>
                    <a className="tag-link" href="/exhibitions?type=ai_music">AI樂團</a>
                  </TagGroup>
                </EventTag>

                <div class="event-waterfall">
                  <div className="row">
                    { exhibitions.map((data, i) => {
                      return (
                        <EventItem className="col">
                          <EventCard className="m-auto">
                            <div class="link">
                                <EventInfo>
                                    <EventDate>{ data.start_date }</EventDate>
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
                
                <div class="exhibition-pagniation">
                  <Pagination count={Math.ceil(maxSize/9)} page={page} variant="outlined" onChange={handleChange}/>
                </div>
                
                
                
                
                
                



              </div>
            </Body>
          </div>
        </Layout>
      )
  }


export default Exhibition;