import API_URL from './index';
import auth_token from './index';
import axios from 'axios';
import { authHeader } from './user';

export const fetchExhibitions = async (start, size) => {
    return await fetch(`${API_URL}/exhibitions?start=${start}&size=${size}`)
}

export const fetchExhibitionsByType = async (start, size, type) => {
    return await fetch(`${API_URL}/exhibitions?start=${start}&size=${size}&type=${type}`)
}

export const fetchExhibitionByID = async (id) => {
    return await fetch(`${API_URL}/exhibitions/${id}`)
}

export const createExhibition = async (data) => {
    console.log(data)
    return await axios.post(`${API_URL}/exhibitions`, {
        "title": data.title,
        "title_en": "",
        "subtitle": data.subtitle,
        "subtitle_en": "",
        "type": data.type,
        "cover": data.cover,
        "start_date": data.start_date,
        "end_date": data.end_date,
        "draft": data.draft,
        "host": data.host,
        "host_en": "",
        "performer": {},
        "location": data.location,
        "location_en": "",
        "daily_start_time": data.daily_start_time,
        "daily_end_time": data.daily_end_time,
        "category": "",
        "description": data.description,
        "description_en": "",
        "content": data.content,
        "content_en": "",
    },
    {
        headers: authHeader()
    })
}