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

  test('is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  it('should have default value in name', () => {
    expect(wrapper.vm.userData.name).toBeTruthy()
  })

  it('should have a default value in age', () => {
    expect(wrapper.vm.userData.age).toBeTruthy()
  })

  it('should find name input', () => {
    expect(wrapper.contains('#name')).toBe(true)
  })

  it('Should emit an error', () => {
    const nameInput = wrapper.find('#name')

    nameInput.setValue('')

    expect(wrapper.find('.md-error').exists()).toBe(true)
  })
})

describe('should create a new user in HelloWorld.vue', () => {

  const wrapper = mount(HelloWorld)

  it('should add a new user', async () => {
    const submitBtn = wrapper.find('#submit')
    const user = {
      name: 'tata',
      age: 22
    }
    wrapper.setData({
      userData: {
        name: 'tata',
        age: 22
      }
    })

    await wrapper.vm.$nextTick()

    submitBtn.trigger('click')

    expect(wrapper.vm.users[0]).toEqual(user)
  })
})
