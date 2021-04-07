import API_URL from './index';

export const fetchNews = async (start, size) => {
    return await fetch(`${API_URL}/news?start=${start}&size=${size}`)
}

export const fetchNewsByType = async (start, size, type) => {
    return await fetch(`${API_URL}/news?start=${start}&size=${size}&type=${type}`)
}

export const fetchNewsByID = async (id) => {
    return await fetch(`${API_URL}/news/${id}`)
}
