import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Layout from '../../common/Layout';
import ReactMarkdown from 'react-markdown';
import { HashLink } from 'react-router-hash-link';


import './Activity.css'


function Activity() {
    const scrollWidthOffset = (el) => {
        const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
        const yOffset = -80;
        window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth'});
    }
    return (
        <Layout>
            <div className="row about-activity">
                <div className="col-12">
                    <div class="page-title container m-auto pt-5 pb-5">
                        <div class="page-title-text" style={{top: "-30" + 'px'}}>
                            <div class="en">Activity</div>
                            <div class="line">
                                <div class="box col-lg-5 col-sm-0"></div>
                                <div class="ch col-lg-2 col-sm-12">活動概述</div>
                                <div class="box col-lg-5 col-sm-0"></div>
                            </div>
                            
                        </div>
                    </div>

                    <div class="page-content page-activity container m-auto">
                        <div class="introduction">
                            <p>藝術中心希望透過各種層次的「藝術參與」，營造活潑的社區藝術生活。不管是由我們自行策劃，或與專業單位合作，都以創造藝術社群與清大的互動為主要目標。一方面，藝術中心策劃主辦精彩的藝術活動；另一方面，我們也在校園內參與改造許多藝術空間，如清大合勤廳、教育館藝術空間、陽光走廊、大禮堂等，鼓勵更多元的藝文管道，例如藝術性學生社團、商業團體、藝術基金會等類型的展演，也都能在校園蓬勃發展。</p>
                        </div>
                        <ul class="tab">
                            
                            <HashLink smooth to="#visual_art"       scroll={el => scrollWidthOffset(el)}>視覺藝術</HashLink>
                            <HashLink smooth to="#music_art"        scroll={el => scrollWidthOffset(el)}>音樂藝術</HashLink>
                            <HashLink smooth to="#performing_art"   scroll={el => scrollWidthOffset(el)}>表演藝術</HashLink>
                            <HashLink smooth to="#film_art"         scroll={el => scrollWidthOffset(el)}>電影藝術</HashLink>
                        </ul>
                        <div class="block row" id="visual_art">
                            <div class="col-6">
                                <img src="https://i.imgur.com/iVCN2D1.png" class="img-fluid" alt="Responsive image" />
                            </div>
                            <div class="col-6">
                                <div class="block-description">
                                    <h2 id="視覺藝術">視覺藝術</h2>
                                    <p>藝術中心目前展覽廳每年度約展出六大檔期，主要以臺灣中青輩藝術家的作品為主要目標，教育館後方的藝術工坊每年度也有數檔展覽， 特別鼓勵較無機會參與商業畫廊體系的藝術家參展。觀眾除了校內教職員生外，附近社區及市區也是主要的欣賞族群。藝術中心規劃每檔展覽（含邀請展與申請展） 展現多元形式與豐富的藝術內容，堅毅執著地介紹當代藝術深度內涵與視野，體現藝術真、善、美的一面，網頁載有展覽論述與相關資料， 期待呈現出藝術家與觀眾都具互動性與意義的視覺藝術文本。除了展覽廳與藝術工坊之外，校內其他展覽場地尚有陽光走廊，教育館一F空間與人文社會學院藝文空間。</p>
                                </div>
                            </div>
                        </div>
                        <div class="block row" id="music_art">
                            <div class="col-6">
                                <img src="https://i.imgur.com/2JrFSjX.jpg" class="img-fluid" alt="Responsive image" />
                            </div>
                            <div class="col-6">
                                <div class="block-description">
                                    <h2>音樂藝術</h2>
                                    <p>音樂表演節目，以多元化為主，藝術中心為盡到在校園中藝術大使之角色，多方的介紹並邀請不同的演出團體至校園中演出，讓學生近距離就可欣賞到國際級與地方團體的種種表演。多年來，藝術中心所舉辦之音樂表演含括古典音樂，爵士音樂，國樂，流行創作音樂，電影配樂，民族風音樂等各類型音樂演出，並以自由入場形式讓學生，教職員以及新竹地區民眾們可以選擇喜愛的音樂會參加。</p>
                                </div>
                            </div>
                        </div>
                        <div class="block row" id="performing_art">
                            <div class="col-6">
                                <img src="https://i.imgur.com/st8lgY6.jpg" class="img-fluid" alt="Responsive image" />
                            </div>
                            <div class="col-6">
                                <div class="block-description">
                                    <h2>表演藝術</h2>
                                    <p>藝術中心表演藝術展演與學習，以專題方式企劃「workshop」、「示範演出」、「專題講座」三方向，兼具創意學習、專業知識、實驗精神，提供深入多元的藝術參與機會。以期開發表演藝術創作與應用的能力；展現表演藝術在劇場與各種場域演出的應用；連結表演藝術於生活。</p>
                                    <h3>1. Workshop：</h3>
                                    <p>針對校內師生與教職員，企劃藝術教育推廣課程，例如：創意、肢體、聲音、現代舞、默劇、相聲、阿根廷探戈、音樂劇、編劇、排演、劇場技術與管理實務、燈光、音響…等主題，開設表演藝術相關工作坊訓練，每次招收 20 位學員，十周的訓練課程，另需參與正式展演呈現學習成果。</p>
                                    <h3>2. 表演藝術活動：</h3>
                                    <ul>
                                        <li>邀請優質表演藝術團隊蒞校示範演出，舉辦專題講座。</li>
                                        <li>與國家兩廳院場館、台中歌劇院、衛武營國家藝術文化中心合作，安排師生聆賞國際表演團體演出、觀摩交流。</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="block row" id="film_art">
                            <div class="col-6">
                                <img src="https://i.imgur.com/7aSiZFV.jpg" class="img-fluid" alt="Responsive image" />
                            </div>
                            <div class="col-6">
                                <div class="block-description">
                                    <h2>電影藝術 ─ 夜貓子電影院</h2>
                                    <p>夜貓子電影院自2006年成立之初，決定從作者論出發，按導演作品年表選映，呈現導演完整的創作脈絡；此外，亦策劃主題性影展與類型影展，包括科幻影展、林強電影配樂、黃文英影像美術特展等。平均一個月一檔專題影展，邀請導演蒞臨分享，以及舉辦影像創作工作坊。影展創辦已逾十年，我們所選映的電影大部分皆已購入圖書館館藏，藉由影展的推介與館藏資料庫，培養觀眾的觀影品味，推動電影藝術。</p>
                                    <ul>
                                        <li>部落格：<a href="http://nightcats.blogspot.tw/">http://nightcats.blogspot.tw/</a></li>
                                        <li>粉絲團：<a href="https://www.facebook.com/NTHUNIGHTCATS/">https://www.facebook.com/NTHUNIGHTCATS/</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </Layout>
    )
       
}

export default Activity;


