import tokenService from "./tokenService";

const BASE_URL = '/api';

export function create(postId){
    return fetch(`${BASE_URL}/posts/${postId}/likes`, {
        method: 'POST',
        headers: {
            'Authorization': 'Bearer ' + tokenService.getToken()
        }
    }).then(res => {
        if(res.ok) return res.json();
        throw new Error('Error creating like/Check terminal')
    })
}

export function removeLike(likesId){
    return fetch(`${BASE_URL}/likes/${likesId}`, {
        method: 'DELETE',
        headers: {
            'Authorization': 'Bearer ' + tokenService.getToken()
        }
    }).then(res => {
        if(res.ok) return res.json();
        throw new Error('Error in deleting/Check terminal')
    })
}