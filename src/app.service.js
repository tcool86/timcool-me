import { setup } from 'axios-cache-adapter'

const api = setup({
    cache : {
        maxAge : 15 * 60 * 1000
    }
})

var baseURL
if (process.env.NODE_ENV === 'production') {
    baseURL = 'https://timcool-me-api.herokuapp.com'
} else {
    baseURL = 'http://local.timcool.dev:3000'
}

api.defaults.baseURL = baseURL

const appService = {
    getPosts (categoryId) {
        return new Promise((resolve, reject) => {
            api.get(`/blog/category/${categoryId}`).then(response => {
                // Do something awesome with response.data \o/
                console.log('Request response:', response)
                // Interacting with the store, see `localForage` API.
                api.cache.length().then(length => {
                    console.log('Cache store length:', length)
                })
                resolve(response.data)
            }).catch(response => {
                reject(response.status)
            })
        })
    }
}

export default appService
