import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import logo from '../assets/menu/logo.png'
import './Header.css'

const SearchDiv = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    color: white;
    &:hover{
      color: #ef9350;
    }
`;

class Header extends React.Component {
    render() {
        return (
            <>
                <nav class="navbar navbar-expand-lg navbar-dark fixed-top menu" style={{ background: '#231917', color: 'white', height: '80' + 'px'}}>
                    <div class="container-fluid">
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                        </button>
                        <Link className="navbar-brand brand" to="/">
                            <img src={ logo } alt="" className="pic"/>
                            <div class="content ml-2">
                                <div className="ch">國立清華大學清華學院藝術中心</div>
                                <div className="en">ARTS CENTER,TSING HUA COLLEGE, NTHU</div>
                            </div>
                        </Link>
                        <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
                        
                        <ul class="navbar-nav mb-2 mb-lg-0 mr-2 m-auto">
                            <li class="nav-item dropdown">
                              <a class="nav-link dropdown-toggle m-item" href="#" role="button" data-toggle="dropdown" aria-haspopup="true"
                                aria-expanded="false">
                                <SearchDiv>
                                    <div>關於我們</div>
                                    <div>About Us</div>
                                </SearchDiv>
                              </a>
                              <div class="dropdown-menu submenu" >
                                
                                <a class="dropdown-item sub-item" href="/about/history">
                                  <SearchDiv>
                                    <div>中心簡史</div>
                                    <div>History</div>
                                  </SearchDiv>
                                </a>
                                <a class="dropdown-item sub-item" href="/about/activity">
                                  <SearchDiv>
                                    <div>活動概述</div>
                                    <div>activity</div>
                                  </SearchDiv>
                                </a>
                                <a class="dropdown-item sub-item" href="/about/faculty">
                                  <SearchDiv>
                                  <div>組織人員</div>
                                  <div>Faculty</div>
                                  </SearchDiv>
                                </a>
                                <a class="dropdown-item sub-item" href="/about/place">
                                  <SearchDiv>
                                    <div>展演場地</div>
                                    <div>Exhibition</div>
                                  </SearchDiv>
                                </a>
                                <a class="dropdown-item sub-item" href="/about/music">
                                  <SearchDiv>
                                  <div>清華樂集</div>
                                  <div>NTHU</div>
                                  <div>Chamber</div>
                                  <div>Ensemble</div>
                                      
                                  </SearchDiv>
                                </a>
                                <a class="dropdown-item sub-item" href="/about/arts">
                                  <SearchDiv>
                                  <div>清華藝集</div>
                                  <div>NTHU
                                  Art Salon
                                  </div>
                                  </SearchDiv>
                                </a>
                              </div>
                            </li>
                            
                            <li class="nav-item dropdown">
                              <a class="nav-link dropdown-toggle m-item" href="#" role="button" data-toggle="dropdown" aria-haspopup="true"
                                aria-expanded="false">
                                <SearchDiv>
                                    <div>展演節目</div>
                                    <div>Program</div>
                                </SearchDiv>
                              </a>
                              <div class="dropdown-menu submenu" >
                                
                                <a class="dropdown-item sub-item" href="/exhibitions?type=visual_art">
                                  <SearchDiv>
                                    <div>視覺藝術</div>
                                    <div>Visual Art</div>
                                  </SearchDiv>
                                </a>
                                <a class="dropdown-item sub-item" href="/exhibitions?type=performing_art">
                                  <SearchDiv>
                                    <div>表演藝術</div>
                                    <div>Performing Art</div>
                                  </SearchDiv>
                                </a>
                                <a class="dropdown-item sub-item" href="/exhibitions?type=film_art">
                                  <SearchDiv>
                                  <div>電影藝術</div>
                                  <div>Film Art</div>
                                  </SearchDiv>
                                </a>
                                <a class="dropdown-item sub-item" href="/exhibitions?type=public_art">
                                  <SearchDiv>
                                    <div>公共藝術</div>
                                    <div>Public Art</div>
                                  </SearchDiv>
                                </a>

                                <a class="dropdown-item sub-item" href="/exhibitions?type=ai_music">
                                  <SearchDiv>
                                    <div>AI樂團</div>
                                    <div>AI Music</div>
                                  </SearchDiv>
                                </a>
                                
      
                              </div>
                            </li>
                            {/*
                            <li class="nav-item mr-2">
                                <a class="nav-link" href="/notifications">
                                    <SearchDiv>
                                        <div>出版典藏</div>
                                        <div>Publication</div>
                                    </SearchDiv>
                                </a>
                            </li>
                            */}
                            <li class="nav-item mr-2">
                                <a class="nav-link" href="/friends">
                                    <SearchDiv>
                                        <div>清藝之友</div>
                                        <div>Friends</div>
                                    </SearchDiv>
                                </a>
                            </li>
                            <li class="nav-item mr-2">
                                <a class="nav-link" href="/calendar">
                                    <SearchDiv>
                                        <div>活動月曆</div>
                                        <div>Calendar</div>
                                    </SearchDiv>
                                </a>
                            </li>
                        </ul>
                        
                        </div>
                    </div>
                </nav>
            </>
        )
    }
}

export default Header