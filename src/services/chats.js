import { GET, POST, PUT, DELETE } from './api'

const table = "chats"

export const Create = async (params) => {
    return await POST(`/${ table }`, params, true);
}

export const Read = async (id) => {
    return await GET(`/${ table }?filters[customer]=${id}&populate=*&pagination[pageSize]=10000`, true);
}

export const ReadSent = async (id) => {
    return await GET(`/${ table }?filters[sent]=${id}&populate=*&pagination[pageSize]=10000`, true);
}

export const ReadOne = async (id) => {
    return await GET(`/${ table }/${id}?populate=*`, true);
}

export const Update = async (params, id) => {
    return await PUT(`/${ table }/${id}`, params, true);
}

export const Delete = async (id) => {
    return await DELETE(`/${ table }/${ id }`, true);
} 
 