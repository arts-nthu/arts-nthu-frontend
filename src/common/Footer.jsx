import React, { useEffect, useState } from 'react';
import "./Footer.css"
import { Link } from 'react-router-dom';

const data = {
    "footer_address": "地址",
    "footer_address_content": "30013新竹市光復路二段101號綜合大樓二館1樓",
    "footer_application_for_exhibition": "展演申請",
    "footer_art_workshop": "藝術工坊",
    "footer_calender": "活動月曆",
    "footer_email": "電子信箱",
    "footer_email_content": "arts@my.nthu.edu.tw",
    "footer_exhibition_hall": "藝術中心展覽廳",
    "footer_fax": "傳真",
    "footer_fax_content": "886-3-5726819",
    "footer_mobile_address": "地址：30013新竹市光復路二段101號綜合大樓二館1樓",
    "footer_mobile_email": "電子信箱：arts@my.nthu.edu.tw",
    "footer_mobile_fax": "傳真：886-3-5726819",
    "footer_mobile_open_time": "諮詢時間: 周一至周五 9:00-12:00；14:00-17:00",
    "footer_mobile_phone": "電話：886-3-5162222",
    "footer_museum": "國立故宮博物院",
    "footer_open_time": "諮詢時間",
    "footer_open_time_content": "周一至周五 9:00-12:00；14:00-17:00",
    "footer_phone": "電話",
    "footer_phone_content": "886-3-5162222",
    "footer_school": "國立清華大學",
    "footer_seeking": "競賽徵件",
    "footer_sponsor": "贊助藝中",
    "footer_taichung_theater": "國家歌劇院",
    "footer_theater": "國家兩廳院",
    "footer_volunteer": "志工招募",
    "footer_zyxel": "合勤演藝廳"
}

function Footer() {
    return (
        <>
            <div class="foot">
                <div class="_container">
                    <div class="container">
                        <div class="row">
                            <div class="about col-12 col-lg-7">
                                <div class="row info1">
                                    <div class="mobile col-12">
                                        <div class="open-time">{ data.footer_mobile_open_time }</div>
                                        <div class="phone">{ data.footer_mobile_phone }</div>
                                        <div class="fax">{ data.footer_mobile_fax }</div>
                                        <div class="mail">{ data.footer_mobile_mail }</div>
                                        <div class="address">{ data.footer_mobile_address }</div>
                                    </div>
                                    <div class="left col-3 col-md-3">
                                        <div class="open-time">{ data.footer_open_time }</div><br class="mobile" />
                                        <div class="phone">{ data.footer_phone }</div><br class="mobile" />
                                        <div class="fax">{ data.footer_fax }</div><br class="mobile" />
                                        <div class="mail">{ data.footer_mail }</div><br class="mobile" />
                                        <div class="address">{ data.footer_address }</div>
                                    </div>
                                    <div class="right col-9 col-md-9">
                                        <div class="open-time">{ data.footer_open_time_content }</div><br
                                            class="mobile" />
                                        <div class="phone">{ data.footer_phone_content }</div><br class="mobile" />
                                        <div class="fax">{ data.footer_fax_content }</div><br class="mobile" />
                                        <div class="mail">{ data.footer_mail_content }</div><br class="mobile" />
                                        <div class="address">{ data.footer_address_content }</div>
                                    </div>
                                </div>
                                <div class="row quick-link">
                                    <div class="col-12 col-lg-4 link-group">
                                        <Link to="/calendar/" class="links">{ data.footer_calendar }</Link>
                                        <Link to="/about/place/zyxel" class="links">{ data.footer_zyxel }</Link>
                                        <Link to="/about/place/hall" class="links">
                                            { data.footer_exhibition_hall }
                                        </Link>
                                        <Link to="/about/place/workshop"class="links">
                                            { data.footer_art_workshop }
                                        </Link>
                                        <Link to="https://arts-nthu.netlify.app/about/logo" class="links">藝術中心識別標誌</Link>
                                    </div>
                                    <div class="col-12 col-lg-4 link-group">
                                        <a href="https://drive.google.com/drive/folders/1baNQnSnU9uYTDUBF-_YIczKccZERbWKm?usp=sharing" class="links" target="_blank">
                                            { data.footer_application_for_exhibition }</a>
                                        <a href="https://drive.google.com/drive/folders/1baNQnSnU9uYTDUBF-_YIczKccZERbWKm?usp=sharing" class="links" target="_blank">
                                            { data.footer_seeking }</a>
                                        <a href="/friends/" class="links">
                                            { data.footer_sponsor }</a>
                                        <a href="/friends/" class="links">
                                            { data.footer_volunteer }</a>
                                    </div>
                                    <div class="col-12 col-lg-4 link-group">
                                        <a class="links" href="http://www.nthu.edu.tw/" target="_blank">{ data.footer_school }</a>
                                        <a class="links" href="https://www.npm.gov.tw/" target="_blank">{ data.footer_museum }</a>
                                        <a class="links" href="http://npac-ntch.org/zh/" target="_blank">{ data.footer_theater }</a>
                                        <a class="links" href="http://www.npac-ntt.org/index" target="_blank">{ data.footer_taichung_theater }</a>
                                        <a class="links" href="https://www.globalplayer.com/live/classicfm/uk/" target="_blank">古典音樂電台</a>
                                    </div>
                                </div><br class="mobile" /><br class="mobile" />
                                
                            </div>
                            <div class="col-12 col-lg-5">
                                <iframe class="map"
                                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14488.118836654818!2d120.9936884!3d24.7944362!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x53095d4c4a8e47db!2z5ZyL56uL5riF6I-v5aSn5a246Jed6KGT5Lit5b-D!5e0!3m2!1szh-TW!2stw!4v1550901676443"
                                    frameborder="0" style={{border:0}} allowfullscreen="allowfullscreen"></iframe>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer;