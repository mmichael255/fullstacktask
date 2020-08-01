import axios from 'axios'
import React from 'react';

const baseUrl = 'http://localhost:3001/persons'

const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(Response => {
        return Response.data
    })
}

const create = (newObj) => {
    const request = axios.post(baseUrl, newObj);
    return request.then(Response => {
        return Response.data
    })
}

const updateData = (id,newObj) => {
    const request = axios.put(`${baseUrl}/${id}`,newObj)
    return request.then(Response => {
        return Response.data
    })
}

const deleteById = (id) => {
    const request = axios.delete(`${baseUrl}/${id}`)
    return request.then(Response => {
        return Response.data
    })
}

export { getAll, create, deleteById, updateData }