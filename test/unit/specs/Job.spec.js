import 'es6-promise/auto'
import Vue from 'vue'
import Job from '@/components/Job'

describe('Job.vue', () => {
  it('should have a toggleJob method', () => {
    expect(typeof Job.methods.toggleJob).to.equal('function')
  })

  it('should render as a list item', () => {
    const Constructor = Vue.extend(Job)
    const vm = new Constructor({
      propsData: {
        job: {
          title: '',
          company: '',
          location: '',
          created_at: '',
          description: '',
          how_to_apply: ''
        }
      }
    }).$mount()
    expect(vm.$el.tagName).to.equal('LI')
  })

  it('should render the passed data in the correct elements', () => {
    const Constructor = Vue.extend(Job)
    const vm = new Constructor({
      propsData: {
        job: {
          title: 'A job title',
          company: 'The company!',
          location: '',
          created_at: '',
          description: '',
          how_to_apply: ''
        }
      }
    }).$mount()
    expect(vm.$el.querySelector('button').textContent).to.equal('A job title')
    expect(vm.$el.querySelector('.job__company').textContent).to.equal('The company!')
  })
})
