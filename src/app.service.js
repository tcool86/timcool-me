import axios from 'axios'

axios.defaults.baseURL = 'http://wordpress.timcool.me'

const appService = {
    getPosts (categoryId) {
        return new Promise((resolve) => {
            axios.get(`/wp-json/wp/v2/posts?categories=${categoryId}&per_page=6`).then(response => {
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
