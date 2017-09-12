import React from 'react'
import './Todos.scss'
import TodoItem from './TodoItem'

class Todos extends React.Component {

  constructor (props) {
    super(props)

    this.state = {
      filter: 'all'
    }
  }

  addTodo = (e) => {
    if (e.keyCode !== 13) {
      return
    }

    let text = this.refs.text.value
    if (text.length > 0) {
      this.props.addTodo(text)
      this.refs.text.value = ''
    }
  }

  setFilter = (filter) => {
    this.setState({
      filter
    })
  }

  renderTodos = () => {
    let { todos } = this.props
    return todos.todos.filter((todo) => {
      if (this.state.filter === 'all') return true
      if (this.state.filter === 'active') return !todo.done
      return todo.done
    }).map((todo, i) => {
      return <TodoItem key={i} todo={todo} {...this.props} />
    })
  }

  render () {
    let { todos, clearCompleted, toggleAll } = this.props
    let leftCount = todos.todos.length - todos.doneCount
    return <div className="todos">
      <input ref='text' onKeyDown={this.addTodo} className="todos__input" placeholder="What you need to do?" />
      <div className="todos__filter">
        <div className={'todos__filter__item' +
        (this.state.filter === 'all' ? ' todos__filter__item--selected' : '')}
             onClick={() => {this.setFilter('all')}}>
          All
        </div>
        <div className={'todos__filter__item' +
        (this.state.filter === 'active' ? ' todos__filter__item--selected' : '')}
             onClick={() => {this.setFilter('active')}}>
          Active
        </div>
        <div className={'todos__filter__item' +
        (this.state.filter === 'completed' ? ' todos__filter__item--selected' : '')}
             onClick={() => {this.setFilter('completed')}}>
          Completed
        </div>
        <div className="todos__filter__toggle-all" onClick={toggleAll}>
          Toggle all
        </div>
      </div>
      <div className="todos__list">
        {this.renderTodos()}
      </div>
      <div className="todos__footer">
        <div className="todos__footer__done-count">
          {leftCount + (leftCount > 1 ? ' items left' : ' item left')}
        </div>
        <div className="todos__footer__clear" onClick={clearCompleted}>
          Clear completed
        </div>
      </div>
    </div>
  }
}

Todos.propTypes = {
  todos: React.PropTypes.object,
  addTodo: React.PropTypes.func,
  clearCompleted: React.PropTypes.func,
  toggleAll: React.PropTypes.func
}

export default Todos
