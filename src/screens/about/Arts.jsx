import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Layout from '../../common/Layout';
import ReactMarkdown from 'react-markdown';

import './Arts.css'

const data = {
    "content_1": "## 清華藝集\n\n清華藝集 前藝術中心主任王小璠教授於2015年召聚大一不分系美術組的學生，成立了【清華藝集】，目地是以藝術活動延續不分系藝術類組同學們的藝術創作與向心力，期許他們能為校爭光。並與【清華樂集】共同企劃藝術活動和校外團體進行交流。\n\n【清華藝集】提供不分系藝術類組同學保有創作的空間，並整合藝術中心現有資源，提升清華校園藝術活動的發展。初期就規劃了約20人次的團隊，由林甫珊老師指導教學。定期安排講習、個展、聯展、校外藝術創作行程。希望以人文和藝術產生出影響力。\n\n這個充滿實驗性質的團隊，成員間緊密連結，由清華學院大一不分系美術組、創新設計組、和校內熱愛藝術的志願學生組成。平時以工作坊、讀書會，並由學長姐的分享來切磋技法，並有不同主題的聚會凝聚成員們的感情，交流彼此對藝術及生活的想法。在這起初沒有美術相關科系的校園內，【清華藝集】以集體的力量發揮藝術創作的效應，即便現在已經有藝術學院，【清華藝集】跨領域的特質仍然鮮明。"
}
function Arts() {

    return (
        <Layout>
            <div className="row about-music container m-auto page-collect">
                <div className="col-12">
                    <div class="page-title container m-auto pt-5 pb-5">
                        <div class="page-title-text" style={{top: "-30" + 'px'}}>
                            <div class="en">NTHU Art Salon</div>
                            <div class="line">
                                <div class="box col-lg-5 col-sm-0"></div>
                                <div class="ch col-lg-2 col-sm-12">清華藝集</div>
                                <div class="box col-lg-5 col-sm-0"></div>
                            </div>
                            
                        </div>
                    </div>

                    
                </div>

                <div class="row">
                    <div class="col-lg-6">
                        <img class="w-100 pb-5" src="https://i.imgur.com/DFvlL3Ch.png"/>
                        <img class="w-100 pb-5" src="https://i.imgur.com/RyRXhlPh.png"/>
                    </div>
                    <div class="col-lg-6">
                        <ReactMarkdown>{ data.content_1 }</ReactMarkdown>
                    
                    </div>

                    
                </div>
            </div>

        </Layout>
    )
       
}

export default Arts;


