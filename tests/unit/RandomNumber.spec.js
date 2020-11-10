import RandomNumber from '@/components/RandomNumber'
import { mount } from '@vue/test-utils'

describe('RandomNumber', () => {
  test('By default, randomNumber data value should be 0', () => {
    const wrapper = mount(RandomNumber)
    expect(wrapper.html()).toContain('<span>0</span>')
  })
  test('If button is clicked, randomNumber data value should be between 1 an nd 10', () => {
    expect(true).toBe(false)
  })
  test('If button is clicked, randomNumber data value should be between 200 an nd 300', () => {
    expect(true).toBe(false)
  })
})
