import axios from 'axios'

axios.defaults.baseURL = 'https://timcool-me-api.herokuapp.com/'

const appService = {
    getPosts (categoryId) {
        return new Promise((resolve) => {
            axios.get(`/blog/categories/${categoryId}`).then(response => {
                resolve(response.data)
            })
        })
    },
    login (credentials) {
        return new Promise((resolve, reject) => {
            axios.post(`/wp-json/jwt-auth/v1/token`, credentials).then(response => {
                resolve(response.data)
            }).catch(response => {
                reject(response.status)
            })
        })
    }
}

export default appService
