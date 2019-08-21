


import axios from '../config/axios'
import cookies from 'universal-cookie'

const cookie = new cookies()

export const onLogin = (da_username, da_password) => {

    return (dispatch) => {
        axios.post(
            '/users/login',
            {
                username: da_username,
                password: da_password
            }
        ).then(res => {
            // Jika data salah, res.data berisi string
            if(typeof(res.data) == 'string'){
                // Print errornya
                console.log('Eror: ' + res.data)
            } else {

                // Simpan id dan name di cookie
                cookie.set(
                    'dataUser',
                    {
                        id: res.data._id,
                        username: res.data.username
                    }
                )

                // Kirim id dan name ke redux
                dispatch({
                    type: 'LOGIN_SUCCESS',
                    payload: {
                        id: res.data._id,
                        username: res.data.username // payload berisi data yang akan di state
                    }
                })
            }
        }).catch(err => {
            console.log(err)
        })
    }

}

/// coba dipahami lagi 
//// 
export const keepLogin = (user) => {
    return {
        type: 'LOGIN_SUCCESS',
        payload: {
            id: user.id,
            username: user.username
        }
    }
}