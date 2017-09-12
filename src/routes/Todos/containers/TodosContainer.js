import { connect } from 'react-redux'
import { addTodo, toggleTodo, removeTodo, clearCompleted,
  toggleEditMode, updateTodo, toggleAll } from '../modules/todos'
import Todos from '../components/Todos'

const mapDispatchToProps = {
  addTodo,
  toggleTodo,
  removeTodo,
  clearCompleted,
  toggleEditMode,
  updateTodo,
  toggleAll
}

const mapStateToProps = (state) => ({
  todos : state.todos
})

export default connect(mapStateToProps, mapDispatchToProps)(Todos)
