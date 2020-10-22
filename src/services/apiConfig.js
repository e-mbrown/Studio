export let apiUrl =  'https://record-collection-django.herokuapp.com/';
export const JwtToken = () => localStorage.getItem('token') || null ;

let options = {
    method: 'get',
    headers: {
        Authorization: `Bearer ${JwtToken()}`,
        'Access-Control-Allow-Origin': '*'
    }
}

const Api = () => {
    return fetch(`${apiUrl}`, options)
}

export const changeHeader = async () => {
    options.headers['Authorization'] = `Bearer ${JwtToken()}`;
}

export const changeMethod = async (method) => {
    console.log(options.method)
    options.method = `${method}`
}

export const altUrl = async (route) => {
    console.log(apiUrl, route)
    apiUrl = `${apiUrl}${route}`
    console.log(apiUrl)
}

export const clearHeader = () => {
    options.headers['Authorization'] = null
}

export default Api