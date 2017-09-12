import React from 'react'
import './Todoitem.scss'

class TodoItem extends React.Component {

  constructor (props) {
    super(props)

    this.state = {
      editMode: false
    }
  }

  toggleEditMode = () => {
    this.setState((prevState) => {
      return {
        editMode: !prevState.editMode
      }
    })
    this.refs.input.style.display = 'inline'
    this.refs.input.focus()
  }

  onKeyDown = (e) => {
    let { todo, updateTodo } = this.props

    if (e.keyCode === 13) {
      updateTodo({
        id: todo.id,
        text: e.target.value
      })

      this.setState({
        editMode: false
      })
      this.refs.input.style.display = 'none'
    }
  }

  onBlur = (e) => {
    let { todo, updateTodo } = this.props

    updateTodo({
      id: todo.id,
      text: e.target.value
    })

    this.setState({
      editMode: false
    })

    this.refs.input.style.display = 'none'
  }

  render () {

    let { todo, toggleTodo, removeTodo } = this.props

    return <div className={'todos__list__item' + (todo.done ? ' todos__list__item--done' : '')}>
      <input className="todos__list__item__checkbox" type="checkbox"
             checked={todo.done} onClick={() => toggleTodo(todo.id)} />
      <input style={{display: 'none'}} onFocus={(e) => console.log(e)} ref='input' type="text" defaultValue={todo.text}
             onKeyDown={this.onKeyDown} onBlur={this.onBlur} />
      <label className={'todos__list__item__label' + (this.state.editMode ? ' hidden' : '')}
             onDoubleClick={() => this.toggleEditMode()}>
        {todo.text}
      </label>
      <div className="todos__list__item__close" onClick={() => removeTodo(todo.id)} />
    </div>
  }
}

TodoItem.propTypes = {
  todo: React.PropTypes.object,
  toggleTodo: React.PropTypes.func,
  removeTodo: React.PropTypes.func,
  updateTodo: React.PropTypes.func
}

export default TodoItem
