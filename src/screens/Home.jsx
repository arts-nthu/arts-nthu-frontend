import React from 'react';
import styled from 'styled-components';
import Header from '../common/Header';

import Layout from '../common/Layout';
import Carousel from '../components/Carousel';
import LatestNews from '../components/LatestNews';
import ComingExhibitions from '../components/ComingExhibitions';

const Subtitle = styled.h2`
    font-size: 30px;
    padding: 30px 0px;
    letter-spacing: 3px;
    text-align: left;
    color: white;
`;

const Images = [
    "https://i.imgur.com/zUgMs8j.jpg",
    "https://i.imgur.com/cckyZ7M.jpg",
    "https://i.imgur.com/wt88wrU.jpg",
    "https://i.imgur.com/oJ56sHe.jpg"
]

class Home extends React.Component {
    render() {
        return(
            <div className="App">
                <Layout>
                    <Carousel images={Images}></Carousel>
                    <div className="row">
                        <div className="col-12">

                            
                            <div class="page-title container m-auto pt-5 pb-5">
                                <div class="page-title-text" style={{top: "-30" + 'px'}}>
                                    <div class="en">Latest News</div>
                                    <div class="line">
                                        <div class="box col-lg-5 col-sm-0"></div>
                                        <div class="ch col-lg-2 col-sm-12">最新消息</div>
                                        <div class="box col-lg-5 col-sm-0"></div>
                                    </div>
                                    
                                </div>
                            </div>

                            <LatestNews></LatestNews>
                            

                            <div class="page-title container m-auto pt-5 pb-5">
                                <div class="page-title-text" style={{top: "-30" + 'px'}}>
                                    <div class="en">Upcoming Events</div>
                                    <div class="line">
                                        <div class="box col-lg-5 col-sm-0"></div>
                                        <div class="ch col-lg-2 col-sm-12">最近活動</div>
                                        <div class="box col-lg-5 col-sm-0"></div>
                                    </div>
                                    
                                </div>
                            </div>

                            <ComingExhibitions></ComingExhibitions>
                            
                        </div>
                    </div>
                </Layout>
                
            </div>
        ) 
    }
}

export default Home;
