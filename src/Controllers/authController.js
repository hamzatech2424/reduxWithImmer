const axios = require('axios');
import AsyncStorage from '@react-native-async-storage/async-storage';
import Store from '../Store'
import { LOGGED_IN_USER } from '../Store/Reducers/types'


class AuthController {
    constructor() { }

    getAllUsers() {
        return new Promise((resolve, reject) => {
            axios.get('https://food-app24.herokuapp.com/api/v1/user/alluser')
                .then((response) => {
                    resolve(response.data)
                })
                .catch((error) => {
                    reject(error)
                })

        })
    }

    login(email, password) {
        return new Promise((resolve, reject) => {
            axios.post('https://food-app24.herokuapp.com/api/v1/user/login', { email: email, password: password })
                .then((response) => {
                    if (response.data.success && response.data.message == 'Login Successfully') {
                        const jsonValue = JSON.stringify(response.data.user)
                        AsyncStorage.setItem('@storage_Key', jsonValue)
                        Store.dispatch({
                            type:LOGGED_IN_USER,
                            payload:response.data
                        })
                        resolve(response.data)
                    }
                    else if (response.data.message == 'Password Incorrect') {
                        resolve(response.data)
                    }
                    else {
                        resolve(response.data)
                    }

                })
                .catch((error) => {
                    reject(error)
                })
        })
    }

    getAsyncStorageData() {
        return new Promise((resolve, reject) => {
            AsyncStorage.getItem('@storage_Key').then((result) => {
                Store.dispatch({
                    type:LOGGED_IN_USER,
                    payload:result
                })
                resolve(result)
            })
                .catch((error) => {
                    reject(error)
                })
        })
    }

    asyncClear() {
        AsyncStorage.clear()
    }

    idGenerator() {
        return Math.random() * Math.random
    }

    myPush() {
       return Store.dispatch({
            type: LOGGED_IN_USER,
            payload: {id:0,name:'Hamza'}
        })
    }


}

const authControl = new AuthController()
export default authControl