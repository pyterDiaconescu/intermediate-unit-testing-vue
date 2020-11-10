import RandomNumber from '@/components/RandomNumber'
import { mount } from '@vue/test-utils'

describe('RandomNumber', () => {
  test('By default, randomNumber data value should be 0', () => {
    const wrapper = mount(RandomNumber)
    expect(wrapper.html()).toContain('<span>0</span>')
  })
  test('If button is clicked, randomNumber data value should be between 1 an nd 10', async () => {
    const wrapper = mount(RandomNumber)
    wrapper.find('button').trigger('click')

    // Wait for any reactivity changes to appear in the DOM
    await wrapper.vm.$nextTick()
    const randomNumber = parseInt(wrapper.find('span').element.textContent)
    expect(randomNumber).toBeGreaterThanOrEqual(1)
    expect(randomNumber).toBeLessThanOrEqual(10)
  })
  test('If button is clicked, randomNumber data value should be between 200 an nd 300', () => {
    expect(true).toBe(false)
  })
})
