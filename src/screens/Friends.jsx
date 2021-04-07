import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Layout from '../common/Layout';
import ReactMarkdown from 'react-markdown';

function Friends() {
    return (
        <Layout>
            <div className="row">
                <div className="col-12">

                    <div class="page-title container m-auto pt-5 pb-5">
                        <div class="page-title-text" style={{top: "-30" + 'px'}}>
                            <div class="en">Friends</div>
                            <div class="line">
                                <div class="box col-lg-5 col-sm-0"></div>
                                <div class="ch col-lg-2 col-sm-12">清藝之友</div>
                                <div class="box col-lg-5 col-sm-0"></div>
                            </div>
                            
                        </div>
                    </div>

                    <div class="page-friends container">
                        <div class="row">
                            <div class="title-content col-12">

                    「清藝之友」幕集 清華大學藝術中心成立於1988年，為全國最早設立之大學藝術中心， 迄今每年策劃、執行、協辦近百場相關藝文活動，不僅提供清華校園師生豐富的藝文饗宴， 亦廣邀社區民眾、鄰近中小學、園區團體等各類人士参與本中心各式藝文活動， 以攜手實踐校園內外美感教育之理想。 本中心提供多元領域之藝文活動，跨足視覺、音樂、表演、電影、科技藝術， 並定期舉辦專題講座、大師班、工作坊， 且引領「清華藝集」、「清華樂集」、「合勤表演小組」、「夜貓電影小組」等藝術社群的發展， 您的加入（志工）或資助（捐款）將支持本中心能夠持續規劃與執行更豐富多元之藝文活動與節目， 以服務更多廣大師生及群眾之美感需求！誠摯邀請您一同加入贊助清華大學藝術活動「清藝之友」的行列！謝謝您！
                            </div>
                        </div>
                        <div class="row up">
                            <div class="col-md-6">
                                <img src="https://i.imgur.com/JE5OUjRh.jpg" alt="" class="pic" />
                            </div>
                            <div class="col-md-6 right">
                                <div class="title">
                                    <img src="/img/ll.png" alt="" class="go-icon" />
                                    <span>贊助藝中</span>
                                    <img src="/img/ll.png" alt="" class="go-icon" />
                                </div>
                                <div class="sub-title">「清藝之友」募集</div>
                                <div class="content">清大藝術中心為全國最早成立的大學藝術中心，鑑於美學教育的重要，我們提供校園與社區豐富的藝術活動，領域跨足視覺、音樂、表演、電影藝術，並定期舉辦專題講座、大師班、工作坊，您的加入將讓本中心於未來能夠持續規劃完善的藝文節目！</div>
                                <a href="https://drive.google.com/open?id=1IcpfBNXIQWgOS7kGenyDFhlKiWl5YhYK" class="btn-group">
                                    <div class="pay">捐款方式</div>
                                    <img src="/img/download.png" alt="" class="go-icon" />
                                </a>
                                <a href="https://drive.google.com/open?id=1qLkjlaoxnoC5xjcnLn-w9l5PIdyOKymZ" class="btn-group">
                                    <div class="point">捐款回饋作業要點</div>
                                    <img src="/img/download.png" alt="" class="go-icon" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Friends;