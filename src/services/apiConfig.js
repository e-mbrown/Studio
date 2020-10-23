export let apiUrl =  'https://record-collection-django.herokuapp.com/';
export const JwtToken = () => localStorage.getItem('token') || null ;

class api {
    constructor(rootUrl) {
        this.rootUrl = rootUrl;
        this.options = {
        }
    }

    setOptions = (method, body=null) => {
        this.options = {
            method: method,
            headers: {
                "Content-Type": "application/json"
            }
        }
        const token = JwtToken()
        if (token) {
            this.options.headers.Authorization = `JWT ${token}`
        }
        if (body) {
            this.options.body = JSON.stringify(body)
        }
    }

    get = async (url) => {
        await this.setOptions('get');
        const resp = await fetch(
            this.rootUrl + url, 
            this.options)
            .then(resp => resp.json())
        return resp
    }

    post = async (url, body) => {
        await this.setOptions('post', body);
        const resp = await fetch(
            this.rootUrl + url,
            this.options)
            .then(resp => resp.json())
        return resp
    }

}

const Api = new api(apiUrl)

export default Api;






// Original code
// let options = {
//     method: 'get',
//     headers: {
//         Authorization: `Bearer ${JwtToken()}`,
//         'Access-Control-Allow-Origin': '*'
//     }
// }

// const Api = () => {
//      fetch(`${apiUrl}`, options)
//      .then((response) =>{
//          console.log(response)
//     return response.json()})
// }

// export const changeHeader = async () => {
//     options.headers['Authorization'] = `Bearer ${JwtToken()}`;
// }

// export const changeMethod = async (method) => {
//     console.log(options.method)
//     options.method = `${method}`
// }

// export const altUrl = async (route) => {
//     console.log(apiUrl, route)
//     apiUrl = `${apiUrl}${route}`
//     console.log(apiUrl)
// }

// export const clearHeader = () => {
//     options.headers['Authorization'] = null
// }

// export default Api