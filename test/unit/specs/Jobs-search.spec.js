import 'es6-promise/auto'
// import Vue from 'vue'
import JobsSearch from '@/components/Jobs-search'

describe('Jobs-search.vue', () => {
  it('should have a onSubmit method', () => {
    expect(typeof JobsSearch.methods.onSubmit).to.equal('function')
  })

  it('should have a created hook', () => {
    expect(typeof JobsSearch.created).to.equal('function')
  })

  it('should have be watching the $route changes', () => {
    expect(typeof JobsSearch.watch.$route).to.equal('function')
  })

  it('should default to blank description and location', () => {
    expect(JobsSearch.data()).to.eql({
      description: '',
      location: ''
    })
  })
})
