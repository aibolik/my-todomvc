import { injectReducer } from '../../store/reducers'

export default (store) => ({
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const Todos = require('./containers/TodosContainer').default
      const reducer = require('./modules/todos').default

      injectReducer(store, { key: 'todos', reducer })

      cb(null, Todos)
    }, 'todos')
  }
})
