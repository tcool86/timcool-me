import Vue from 'vue'
import Post from '../../../src/theme/post.vue'

describe('post.vue', () => {
    const createComponent = () => {
        const PostConstructor = Vue.extend(Post)
        const comp = new PostConstructor({
            propsData : {
                link : 'http://www.pluralsight.com'
            }
        }).$mount()
        return comp
    }
    it('should render the link', () => {
        const comp = createComponent()
        var elementLink = comp.$el.querySelector('.card-footer-item').getAttribute('href')
        expect(elementLink).to.equal('http://www.pluralsight.com')
    })
    it('should update element\'s href when property link changes', (done) => {
        const comp = createComponent()
        comp.link = 'http://timcool.me'
        Vue.nextTick(() => {
            var elementLink = comp.$el.querySelector('.card-footer-item').getAttribute('href')
            expect(elementLink).to.equal('http://timcool.me')
            done()
        })
    })
})
