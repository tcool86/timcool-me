import axios from 'axios'

axios.defaults.baseURL = 'http://wordpress.timcool.me'

const appService = {
    getPosts (categoryId) {
        return new Promise((resolve) => {
            axios.get(`/wp-json/wp/v2/posts`).then(response => {
                resolve(response.data)  
            })
        })
    }
}

export default appService