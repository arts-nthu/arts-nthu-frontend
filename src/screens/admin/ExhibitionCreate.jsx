import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import { getCurrentUser } from '../../stores/user';
import { createExhibition } from '../../stores/exhibition';
import { Alert } from '@material-ui/lab';
import { useHistory } from "react-router-dom";

import Layout from '../../common/AdminLayout';

function ExhibitionCreate() {
    let history = useHistory();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [message, setMessage] = useState("");
    const onSubmit = async(data) => {
        try {
            setMessage("");
            console.log(data);
            let res = await createExhibition(data);
            console.log(res)
            history.push("/admin/dashboard");
            window.location.reload();
            
        } catch(err) {
            console.log(err)
            setMessage("Create Error");
        }
    }
    console.log(errors);
    

    return (
        <>
            {message && (
                    <Alert severity="error">{message}</Alert>
                )}
            <Layout>
                <div className="container col-lg-6">                
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div class="mb-3 text-center">
                            <h1>建立展覽</h1>
                        </div>
                        <div class="mb-3">
                            <label for="title" class="form-label">標題</label>
                            <input class="form-control" type="text" placeholder="title" id="title"
                                    {...register("title", {required: true, max: 30, min: 6, maxLength: 30})} />
                            {errors.title && errors.title.type == "required" && <Alert severity="error">未填標題</Alert>}

                        </div>
                        <div class="mb-3">
                            <label for="subtitle" class="form-label">副標題</label>
                            <input class="form-control" type="text" placeholder="subtitle" {...register("subtitle", {max: 30, min: 6, maxLength: 30})} />
                        </div>
                        <div class="mb-3">
                            <div class="form-check form-switch">
                                <label class="form-check-label" for="draft" >草稿</label>
                                <input class="form-check-input" type="checkbox" id="draft" {...register("draft", {})}/>
                            </div>
                        </div>
                        <div class="mb-3">
                            <label for="type" class="form-label">展覽類型</label>
                            <select class="form-select" {...register("type", { required: true })}>
                                <option value="visual_art">視覺藝術</option>
                                <option value="performing_art">表演藝術</option>
                                <option value="film_art">電影藝術</option>
                                <option value="public_art">公共藝術</option>
                                <option value="ai_music">AI樂團</option>
                            </select>
                        </div>
                        <div class="mb-3">
                            <label for="title" class="form-label">封面照片</label>
                            <input class="form-control" type="text" placeholder="cover" 
                                {...register("cover", {required: true, pattern: /https:\/\/i.imgur.com/})} />
                            <div class="form-text" style={{color: '#d7d7d7'}}>格式：https://i.imgur.com/xxxxx</div>
                            {errors.cover && errors.cover.type == "required" && <Alert severity="error">未填封面照片</Alert>}
                            {errors.cover && errors.cover.type == "pattern" && <Alert severity="error">封面照片格式錯誤</Alert>}
                        </div>
                        <div class="mb-3">
                            <label for="title" class="form-label">開始日期</label>
                            <input class="form-control" type="text" placeholder="start_date" {...register("start_date", {required: true, pattern:/[0-9][0-9][0-9][0-9]-[0-9][0-9]-[0-9][0-9]$/})} />
                            {errors.start_date && errors.start_date.type == "required" && <Alert severity="error">未填開始日期</Alert>}
                            {errors.start_date && errors.start_date.type == "pattern" && <Alert severity="error">開始日期格式錯誤(2020-01-01)</Alert>}
                        </div>
                        <div class="mb-3">
                            <label for="title" class="form-label">結束日期</label>
                            <input class="form-control" type="text" placeholder="end_date" {...register("end_date", {pattern: /[0-9][0-9][0-9][0-9]-[0-9][0-9]-[0-9][0-9]/ })} />
                        </div>
                        <div class="mb-3">
                            <label for="title" class="form-label">主辦</label>
                            <input class="form-control" type="text" placeholder="host" {...register("host", {required: true})} />
                            {errors.host && errors.host.type == "required" && <Alert severity="error">未填主辦</Alert>}
                        </div>
                        <div class="mb-3">
                            <label for="title" class="form-label">地點</label>
                            <input class="form-control" type="text" placeholder="location" {...register("location", {required: true})} />
                            {errors.location && errors.location.type == "required" && <Alert severity="error">未填地點</Alert>}
                        </div>
                        <div class="mb-3">
                            <label for="title" class="form-label">開始時間</label>
                            <input class="form-control" type="text" placeholder="daily_start_time" {...register("daily_start_time", { pattern: /[0-9][0-9]:[0-9][0-9]/ })} />
                        </div>
                        <div class="mb-3">
                            <label for="title" class="form-label">結束時間</label>
                            <input class="form-control" type="text" placeholder="daily_end_time" {...register("daily_end_time", { pattern: /[0-9][0-9]:[0-9][0-9]/ })} />
                        </div>
                        <div class="mb-3">
                            <label for="title" class="form-label"></label>
                            <input class="form-control" type="text" placeholder="category" {...register} disabled/>
                        </div>
                        <div class="mb-3">
                            <label for="title" class="form-label">簡短說明</label>
                            <input class="form-control" type="text" placeholder="description" {...register("description", {required: true})} />
                            {errors.description && errors.description.type == "required" && <Alert severity="error">未填簡短說明</Alert>}
                        </div>
                        <div class="mb-3">
                            <label for="title" class="form-label">內容</label>
                            <textarea class="form-control" rows="20" {...register("content", {required: true})} />
                            {errors.content && errors.content.type == "required" && <Alert severity="error">未填內容</Alert>}
                        </div>


                        
                        
                        
                        
                        
                        
                        
                        
                        
                        
                        <button class="btn btn-lg btn-block btn-info" type="submit">送出</button>
                    </form>
                </div>
            </Layout>
        </>
    )
}


export default ExhibitionCreate;