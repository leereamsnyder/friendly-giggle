import 'es6-promise/auto'
// import Vue from 'vue'
import JobsTable from '@/components/Jobs-table'

describe('Jobs-table.vue', () => {
  it('should have a fetch method', () => {
    expect(typeof JobsTable.methods.fetch).to.equal('function')
  })

  it('should have a relativePageQuery method', () => {
    expect(typeof JobsTable.methods.relativePageQuery).to.equal('function')
  })

  it('should have a beforeRouteUpdate guard', () => {
    expect(typeof JobsTable.beforeRouteUpdate).to.equal('function')
  })

  it('should have a created hook', () => {
    expect(typeof JobsTable.created).to.equal('function')
  })

  it('should default "loading" to false', () => {
    expect(JobsTable.data()).to.eql({loading: false})
  })

  it('relativePageQuery should extend the $route.query property with the passed page', () => {
    let method = JobsTable.methods.relativePageQuery.bind({
      $route: {
        query: {
          'a': 'b'
        }
      }
    })

    expect(method('2')).to.eql({ 'a': 'b', page: '2' })
  })
})
