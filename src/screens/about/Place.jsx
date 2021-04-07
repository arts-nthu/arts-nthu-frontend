import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Layout from '../../common/Layout';
import ReactMarkdown from 'react-markdown';

import './Place.css'

const data = {
    "img_url_1": "https://i.imgur.com/l4iez1ah.png",
    "img_url_2": "https://i.imgur.com/LzOPGdhh.png",
    "img_url_3": "https://i.imgur.com/1HiS1zyh.png",
    "content_1": "## 藝中展演廳\n\n本中心成立於民國七十七年，目前編制為主任一人，講師一人，專任企畫五人，兼任助教與工讀生各數名。現有展覽廳約八十八坪，以活動隔板配合展出品區隔空間，以軌道燈提供照明，必要時有一整排窗戶可提供自然光（或以竹簾與隔板減弱、阻絕自然光）。每年推出六至八個展覽活動，以繪畫作品為主，其他視覺藝術品為輔。為加深學生對展出品的瞭解，所有展覽原則上都將由本中心規劃製作各項導覽（含文字解說、語音導覽、創作者訪談錄影、藝術史電腦資料庫、及現場人員解說，導覽原則與具體做法見附件一與附件二）。此外，為充分發揮導覽媒體之利用價值，未來將努力與國內其它大學之藝術中心建立合作關係，相互推薦展覽品（附完整導覽媒體）。",
    "content_2": "## 開放時間\n\n| 展覽期間 |\n\n週 一 ～ 週 五 ： 12:00 - 19:00\n\n週 六 ～ 週 日 ： 12:00 - 17:00\n\n| 非展覽期間 |\n\n不對外開放，但照常辦公。 (含暑假、寒假)\n\n## 設備介紹\n\n1. 電視及DVD錄放影機各一部\n2. 攝影機一台\n3. 音響一台\n4. 單槍投影機一部",
    "zyxel": {
        "content_1": "## 合勤演藝廳\n\n合勤演藝廳前身為清大第一講堂，九十二年經合勤科技董事長朱順一博士襄助整建，成為多元的小型藝術表演場地，每年均有超過百場次的租用，成為新竹市內租借收費合理、適合演出、地理位置適中的小型藝術表演廳。\n\n九十七年轉由清大藝術中心管理後，陸續推展「設備修換及系統整合」、「休息室整修工程」、「技術操控及藝文服務訓練課程」計畫，現更擴及校內、外藝文講座、室內樂、戲劇、舞蹈、電影播映、社團成果展以及藝術季活動，未來合勤廳將持續提升場地與設備，達到理想的表演需求。\n\n1. 舞台資訊\n2. 燈光系統\n3. 音響系統\n4. 投影設備\n5. 其他器材\n6. 觀眾席\n7. 外場空間\n8. 後台空間\n\n",
        "content_2": "## 藝術工坊\n\n藝術工坊原址是清大生科院養白老鼠的地方，也養了一隻可做實驗的羊，生命科學院搬離原址後，這個空間就變成洗衣房，還賣過早餐，牆上書寫蛋餅五元。一直有點荒蕪的地方最後成了外工班放打掃用具的倉庫。在劉炯朗校長的時候，藝術中心爭取將它成立為藝術小屋。靈感來自德國的電話亭展覽室，在一個不大的地方，不間斷的有藝術展出，就能活化整體的空間氛圍\n\n這個位於清華大學光復中學邊機車道的出入口，量體是由本校【木造社】社員，手工蓋的。【木造社】是一群熱愛「木構造」的年輕人組成的社團，早先以一群清大的畢業生為主，後來有了各行各業的伙伴。藝術工坊是他們利用假日一起動手蓋成。整個屋子沒有用到鐵釘，全為木榫接合。 因此是個實驗品，它沒有鐵釘所以不會生鏽，木構造因此也不需要上漆，十幾年過去了，走進這個小空間，仍能夠嗅吸美國香杉的氣味。\n\n藝術工房佔地約21平方公尺，適用於平面作品，立體雕塑，及藝術呈現等，每一學期有個三~四個檔期，適合精緻而小巧的展覽。藝術工房有大面積的玻璃，像是一個立體視窗。對於校園而言是一個小巧可愛的展示空間，即使不走進建築裡，藝術工坊透出的光，也能使經過此處的人，感受到地景的生動與溫暖。\n\n2017 年秋季當年承辦本案的黃俊憲建築術師，在清華大學舉辦個展，經過討論，將原始建築結構，增加了一個陽台空間。使原本在懸崖上的建築，在地形落差超過一公尺的情況下，延伸整一個陽台增加藝術工坊與整體空間的協調性。目前藝術工坊已經是一個可以有小型演出的箱型空間，讓清華大學的文藝活動能夠有更多元的發展，超過十年的等待，建築師終究完成了他心中理想的藝術空間。\n\n藝術工坊正前方的草地上的【雕塑公園】，則是08級學生給學校的一份禮物，經過大家的手，以拼貼馬賽克完成的雕塑群。連接教育館的一樓的展覽廳、日光走廊以及後方的藝術工坊。位處藝術展覽與創作空間的綠帶上。一般『大人』較少經過這個區域，好像微血管一般，分流到這條路徑的行人，多半是學生。點點空間都帶給行路人微妙的驚喜。這個地方有著奇妙的氛圍，跟紐約蘇活區的形成很像。交錯著藝術創作的活力，與邊陲區域的破落，希望能在這個公園裡，種下溫暖活潑的生命力種籽。\n\n【藝術工坊】和【雕塑公園】，成功的證明了清大藝文空間的多樣性，這個精彩的學校，藝術與創作，不只是存在於藝術中心或教室裡。原本荒僻的角落中，因著一屆又一屆的學生，慢慢的琢磨出有意思的傳承。這一帶的發展，和藝術創作的本質相符，不害怕冒險，勇於嘗試，並且不斷追求美好的成果。"
    }
}

function RenderPlace(prop) {
    if(prop.type == 0) {
        return (
            <div class="row container m-auto">
                <div class="col-lg-6" style={{paddingRight: '60' + 'px'}}>
                    <img class="w-100" src="https://i.imgur.com/3CNZrnDh.png"/>
                    <img class="w-100" src="https://i.imgur.com/Cy4lMXuh.jpg"/>
                    <img class="w-100" src="https://i.imgur.com/BUY35J7h.png"/>
                    <img class="w-100" src="https://i.imgur.com/ZV4zpm2h.png"/>
                </div>
                <div class="col-lg-6"> 
                    <ReactMarkdown>{ data.zyxel.content_1 }</ReactMarkdown>
                    <a href="https://i.imgur.com/49tQndIh.jpg" class="btn">合勤演藝廳平面圖</a>
                    <h3>使用與收費標準</h3>
                    <a href="https://drive.google.com/open?id=1ugU5Lp7wP-dPt38yQ_yweQG5fOMHgMqc" class="btn">管理要點</a>
                    <a href="https://drive.google.com/open?id=1B2N_UyBq_WRIgFq0ndJtkWUePdhoGxtf" class="btn">收費標準</a>
                    <h3>相關表格</h3>
                    <a href="https://drive.google.com/file/d/1lXw9Snp9b4ar-SuA7h_MgU2-NMeji9sh/view?usp=sharing" class="btn">借用申請表</a>
                    <a href="https://drive.google.com/open?id=1lXw9Snp9b4ar-SuA7h_MgU2-NMeji9sh" class="btn">企劃簡表</a>
                    <a href="https://drive.google.com/open?id=1D2YDIq0PdLG2AeJaapcSVqRseqB46HJU" class="btn">切結書</a>
                </div>
            </div>
        )
    }
    else if(prop.type == 1) {
        return (
            <div class="row container m-auto">
                <div class="col-lg-6" style={{paddingRight: '60' + 'px'}}>
                    <img class="w-100" src="https://i.imgur.com/l4iez1ah.png"/>
                    <img class="w-100" src="https://i.imgur.com/LzOPGdhh.png"/>
                    <img class="w-100" src="https://i.imgur.com/1HiS1zyh.png"/>
                </div>
                <div class="col-lg-6">

                    <ReactMarkdown>{ data.content_1 }</ReactMarkdown>

                    <a href="https://i.imgur.com/iRlkg8vh.jpg" class="btn">查看平面圖一</a>
                    <a href="https://i.imgur.com/AAgdoD1h.jpg" class="btn">查看平面圖二</a>

                    <ReactMarkdown>{ data.content_2 }</ReactMarkdown>

                </div>
            </div>
        )
    }
    else if(prop.type == 2) {
        return (
            <div class="row container m-auto">
                <div class="col-lg-6" style={{paddingRight: '60' + 'px'}}>

                    <img class="w-100" src="https://i.imgur.com/Yb2w790h.png"/>

                    <img class="w-100" src="https://i.imgur.com/kLXr8sqh.png"/>

                    <img class="w-100" src="https://i.imgur.com/TQjJ0F7h.png"/>
                </div>
                <div class="col-lg-6">
                    <ReactMarkdown>{ data.zyxel.content_2}</ReactMarkdown>
                </div>
            </div>
        )
    }
    else {
        return ""
    }
}

function Place() {
    
    const [active, setActive] = useState(0);
    const handleClick = e => {
        const index = parseInt(e.target.id, 0);
        if (index !== active) {
        setActive(index);
        }
    };

    return (
        <Layout>
            <div className="row about-place">
                <div className="col-12">
                    <div class="page-title container m-auto pt-5 pb-5">
                        <div class="page-title-text" style={{top: "-30" + 'px'}}>
                            <div class="en">Exhibition Venue</div>
                            <div class="line">
                                <div class="box col-lg-5 col-sm-0"></div>
                                <div class="ch col-lg-2 col-sm-12">展演場地</div>
                                <div class="box col-lg-5 col-sm-0"></div>
                            </div>
                            
                        </div>
                    </div>

                    <div class="page-place container-fluid">

                        <ul class="tab">
                            <a onClick={handleClick} active={active === 0} id={0}>合勤演藝廳</a>
                            <a onClick={handleClick} active={active === 1} id={1}>藝中展演廳</a>
                            <a onClick={handleClick} active={active === 2} id={2}>藝術工坊</a>
                        </ul>

                        <RenderPlace type={active}></RenderPlace>

                        

                    </div>
                </div>
            </div>

        </Layout>
    )
       
}

export default Place;


