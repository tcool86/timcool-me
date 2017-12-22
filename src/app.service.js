import { setup } from 'axios-cache-adapter'

const sixtyMinutes = 60 * 60 * 1000

const api = setup({
    cache : {
        maxAge : sixtyMinutes
    }
})

var baseURL
if (process.env.NODE_ENV === 'production') {
    baseURL = 'https://timcool-me-api.herokuapp.com'
} else {
    baseURL = 'http://local.timcool.test:3000'
}

api.defaults.baseURL = baseURL

const appService = {
    getPosts (categoryId) {
        if (typeof categoryId === 'undefined') {
            return getAllPosts()
        } else {
            return getPostsWithCategory(categoryId)
        }
    },
    getProjects () {
        return new Promise((resolve, reject) => {
            api.get(`/projects`).then(response => {
                resolve(response.data)
            }).catch(response => {
                reject(response.status)
            })
        })
    }
}

function getAllPosts () {
    return new Promise((resolve, reject) => {
        api.get(`/blog`).then(response => {
            api.cache.length().then(length => {
                console.log(length)
            })
            resolve(response.data)
        }).catch(response => {
            reject(response.status)
        })
    })
}

function getPostsWithCategory (categoryId) {
    return new Promise((resolve, reject) => {
        api.get(`/blog/category/${categoryId}`).then(response => {
            resolve(response.data)
        }).catch(response => {
            reject(response.status)
        })
    })
}

export default appService
