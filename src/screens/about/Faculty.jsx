import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Layout from '../../common/Layout';
import ReactMarkdown from 'react-markdown';
import { HashLink } from 'react-router-hash-link';

import './Faculty.css'



function Faculty() {
    const scrollWidthOffset = (el) => {
        const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
        const yOffset = -90;
        window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth'});
    }
    return (
        <Layout>
            <div className="row about-faculty">
                <div className="col-12">
                    <div class="page-title container m-auto pt-5 pb-5">
                        <div class="page-title-text" style={{ top: "-30" + 'px' }}>
                            <div class="en">Faculty</div>
                            <div class="line">
                                <div class="box col-lg-5 col-sm-0"></div>
                                <div class="ch col-lg-2 col-sm-12">組織人員</div>
                                <div class="box col-lg-5 col-sm-0"></div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <div class="page-faculty container">
                <ul class="tab">
                    <HashLink smooth to="#block1" scroll={el => scrollWidthOffset(el)}>中心主任</HashLink>
                    <HashLink smooth to="#block2" scroll={el => scrollWidthOffset(el)}>企劃與執行</HashLink>
                </ul>
                <div id="block1">
                    <h2 id="中心主任">中心主任</h2>
                    <div class="people-card">
                        <div class="title">邱誌勇</div>
                        <div class="subtitle">| 清大藝術中心主任，藝術學院學士班 教授 | 美國俄亥俄大學跨領域藝術系博士</div>
                        <div class="content">Chiu, Chih-Yung, Director of Arts Center, Interdisciplinary Program of Technology and Art, College of Arts, National Tsing Hua University/ PhD in School of Interdisciplinary Arts, Ohio University, USA</div>
                    </div>
                </div><div id="block2">
                    <h2 id="企劃與執行">企劃與執行</h2>
                    <div class="people-card">
                        <div class="title">林怡君</div>
                        <div class="subtitle">| 表演藝術企劃 | 美國密蘇里大學音樂碩士</div>
                        <div class="content">Sophia Lin, , MA, Performing Arts Curator;University of Missouri</div>
                        <div class="email">Email: ichunlin@mx.nthu.edu.tw</div>
                    </div>
                    <div class="people-card">
                        <div class="title">賴小秋</div>
                        <div class="subtitle">| 視覺藝術企劃 | 加拿大西安大略大學圖資科學碩士，曾任職台北市立美術館編譯、助理研究員</div>
                        <div class="content">Autumn Lai, , Visual Art Curator;MLIS, University of Western Ontario, Canada</div>
                        <div class="email">Email: hclai@mx.nthu.edu.tw</div>
                    </div>
                    <div class="people-card">
                        <div class="title">林甫珊</div>
                        <div class="subtitle">| 視覺藝術企劃 | 紐約大學藝術創作碩士</div>
                        <div class="content">Fu-Shan Lin, Visual Art Curator, New York University, MA</div>
                        <div class="email">Email: fslin@mx.nthu.edu.tw</div>
                    </div>
                    <div class="people-card">
                        <div class="title">鄭叡恕</div>
                        <div class="subtitle">| 表演藝術企劃 | 文化大學戲劇碩士</div>
                        <div class="content">Jui-Shu Cheng, Performing Arts Curator, MA of Chinese Culture Univerity</div>
                        <div class="email">Email: jscheng@mx.nthu.edu.tw</div>
                    </div>
                    <div class="people-card">
                        <div class="title">陳若怡</div>
                        <div class="subtitle">| 電影藝術企劃 | 台北藝術大學傳統藝術研究所博物館組碩士</div>
                        <div class="content">Lori Chen, Visual Art Curator, MA of Taipei National University of the Arts</div>
                        <div class="email">Email: jichen@mx.nthu.edu.tw</div>
                    </div>
                    <div class="people-card">
                        <div class="title">李書瑜</div>
                        <div class="subtitle">| 行政助理 | 國立臺南大學美術碩士</div>
                        <div class="content">Shu-Yu Lee, Administrative Assistant, MA, National University of Tainan</div>
                        <div class="email">Email: shuyu@gapp.nthu.edu.tw</div>
                    </div>
                </div>
            </div>



        </Layout>
    )

}

export default Faculty;


