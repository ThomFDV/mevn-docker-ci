import Vue from 'vue'
import { mount } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld'
import { MdButton, MdField, MdCard, MdRipple } from 'vue-material/dist/components'

Vue.use(MdButton)
Vue.use(MdField)
Vue.use(MdCard)
Vue.use(MdRipple)

describe('HelloWorld.vue', () => {
  const wrapper = mount(HelloWorld)
  it('should render correct contents', () => {
    expect(wrapper.contains('.hello h1')).toBe(true)
  })
})
