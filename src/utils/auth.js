// export const BASE_URL = 'https://api.nomoreparties.co';

// export const register = (email, password) => {
//   return fetch(`${BASE_URL}/signup`, {
//     method: 'POST',
//     headers: {
//       'Accept': 'application/json',
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({email, password})
//   })
//   .then((response) => {
//     try {
//       if (response.status === 200){
//         return response.json();
//       }
//     } catch(e){
//       return (e)
//     }
//   })
//   .then((res) => {
//     return res;
//   })
//   .catch((err) => console.log(err));
// }; 

// export const authorize = ({email, password}) => {
//     return fetch(`${BASE_URL}/signin`, {
//         method: 'POST',
//         headers: {
//             'Accept': 'application/json',
//             'content-type': 'application/json'
//         },
//         body: JSON.stringify({email, password})
//     })  
//     .then((response => response.json()))
//     .then((data) => {
//       if (data.jwt){
//         localStorage.setItem('jwt', data.jwt);
//         return data;
//       }
//     })
//     .catch(err => console.log(err))
//   }; 

//   export const getContent = (token) => {
//     return fetch(`${BASE_URL}/users/me`, {
//       method: 'GET',
//       headers: {
//         'Accept': 'application/json',
//         'Content-Type': 'application/json',
//         'Authorization': `Bearer ${token}`,
//       }
//     })
//     .then(res => res.json())
//     .then(data => data)
//   } 

export const BASE_URL = 'https://auth.nomoreparties.co';

const checkResponse = (res) => {
    if (!res.ok) {
        return Promise.reject(`${res.status}`);
    }
    return res.json()
}

export const register = (email, password) => {
    return fetch(`${BASE_URL}/signup`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'content-type': 'application/json'
        },
        body: JSON.stringify({email, password})
    }).then(res => checkResponse(res))
}


export const authorize = ({email, password}) => {
    return fetch(`${BASE_URL}/signin`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'content-type': 'application/json'
        },
        body: JSON.stringify({email, password})
    }).then(checkResponse) 
    .then((data) => {
        if(data.token) {
            localStorage.setItem('jwt', data.token)
            return data.token;
        }
    })
}

export const getContent = (token) => {
    return fetch(`${BASE_URL}/users/me`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    })
    .then(checkResponse)
    .then((data) => data)
}