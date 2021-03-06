import Api from './apiConfig';
//import { apiUrl } from './apiConfig'
//import { /*changeHeader, clearHeader,*/ changeMethod, altUrl } from './apiConfig';

export const login = async (user) => {
    if (localStorage.token === undefined) {
        localStorage.removeItem(localStorage.token)
    }
    const tempToken = localStorage.token
    await delete localStorage.token
    const resp = await Api.post('auth/users/login/', user)
    if (resp) {
        localStorage.token = resp.token
    } else {
        localStorage.token = tempToken
    }
    return resp
}

export const records = async () => {
    const resp = await Api.get('api/records/')
    return resp
}

export const collection = async () => {
    const resp = await Api.get('api/collections/')
    return resp
}

export const register = async (userData) => {
    try {
        const resp = await Api.post('auth/users/register/', userData);
        if (resp.status === 201) {
            //await clearHeader();
            await localStorage.setItem('token', resp.token);
            //await changeHeader();
        }
        return resp;
    } catch (error) {
        throw error
    }
}


// Original code
// 
// export const records = async () => {
//     try {
//         await changeMethod('get')
//         await altUrl('api/records')
//         await changeHeader()
//         const resp = await Api();
//         // const response = await resp.json()
//         return resp
//     } catch (error) {
//         throw error
//     }
// }

// export const login = async(user) => {
//     const resp = await fetch(apiUrl + 'auth/users/login/',{
//         method: 'POST',
//         headers: {
//             "Content-Type": 'Application/JSON'                
//         },
//         body: JSON.stringify(user)  
//     }
// ).then(response => response.json())
// return resp
// }