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

  it('should have empty initial name', () => {
    expect(wrapper.vm.userData.name).toBe('')
  })

  it('should have 28 as initial age', () => {
    expect(wrapper.vm.userData.age).toBe(28)
  })

  it('should find name input', () => {
    expect(wrapper.contains('#name')).toBe(true)
  })

  it('should add a new user', async () => {
    const nameInput = wrapper.find('#name')
    const ageInput = wrapper.find('#age')
    const submitBtn = wrapper.find('#submit')
    const user = {
      name: 'tatatata',
      age: '22'
    }

    nameInput.setValue('tatatata')
    ageInput.setValue(22)
    submitBtn.trigger('click')

    await wrapper.vm.$nextTick()

    expect(wrapper.vm.users[0]).toEqual(user)
  })
})
