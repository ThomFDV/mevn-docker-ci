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

describe('test user functions in HelloWorld.vue', () => {

  const wrapper = mount(HelloWorld)

  it('should not add empty user', async () => {
    const submitBtn = wrapper.find('#submit')
    wrapper.setData({
      userData: {
        name: '',
        age: null
      }
    })

    await wrapper.vm.$nextTick()

    submitBtn.trigger('click')

    expect(wrapper.vm.users[0]).toBeFalsy()
  })

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

  it('should delete the first user', async () => {
    const deleteBtn = wrapper.find('#delete')

    deleteBtn.trigger('click')

    await wrapper.vm.$nextTick()

    expect(wrapper.vm.users).toEqual([])
  })
})
