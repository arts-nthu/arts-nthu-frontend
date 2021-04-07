import API_URL from './index';

export const fetchExhibitions = async (start, size) => {
    return await fetch(`${API_URL}/exhibitions?start=${start}&size=${size}`)
}

export const fetchExhibitionsByType = async (start, size, type) => {
    return await fetch(`${API_URL}/exhibitions?start=${start}&size=${size}&type=${type}`)
}

export const fetchExhibitionByID = async (id) => {
    return await fetch(`${API_URL}/exhibitions/${id}`)
}