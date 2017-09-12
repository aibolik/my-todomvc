export const TODOS_ADD_TODO = 'TODOS:ADD_TODO'
export const TODOS_TOGGLE_TODO = 'TODOS:TOGGLE_TODO'
export const TODOS_REMOVE_TODO = 'TODOS:REMOVE_TODO'
export const TODOS_CLEAR_COMPLETED = 'TODOS:CLEAR_COMPLETED'
export const TODOS_TOGGLE_EDIT_MODE = 'TODOS:TOGGLE_EDIT_MODE'
export const TODOS_UPDATE_TODO = 'TODOS:UPDATE_TODO'
export const TODOS_TOGGLE_ALL = 'TODOS:TOGGLE_ALL'

export function addTodo (text) {
  return {
    type: TODOS_ADD_TODO,
    payload: text
  }
}

export function toggleTodo (todoId) {
  return {
    type: TODOS_TOGGLE_TODO,
    payload: todoId
  }
}

export function removeTodo (todoId) {
  return {
    type: TODOS_REMOVE_TODO,
    payload: todoId
  }
}

export function clearCompleted () {
  return {
    type: TODOS_CLEAR_COMPLETED
  }
}

export function toggleEditMode (todoId) {
  return {
    type: TODOS_TOGGLE_EDIT_MODE,
    payload: todoId
  }
}

export function updateTodo (payload) {
  return {
    type: TODOS_UPDATE_TODO,
    payload
  }
}

export function toggleAll () {
  return {
    type: TODOS_TOGGLE_ALL
  }
}

export const actions = {
  addTodo,
  toggleTodo,
  removeTodo,
  clearCompleted,
  toggleEditMode
}

const ACTION_HANDLERS = {
  [TODOS_ADD_TODO]: (state, action) => {
    let payload = { ...state }
    let newTodo = {
      id: payload.lastId + 1,
      text: action.payload,
      done: false,
      editMode: false
    }
    payload.lastId = payload.lastId + 1
    payload.todos.push(newTodo)
    return payload
  },
  [TODOS_TOGGLE_TODO]: (state, action) => {
    let payload = { ...state }
    for (let i = 0; i < payload.todos.length; i++) {
      if (action.payload === payload.todos[i].id) {
        payload.todos[i].done = !payload.todos[i].done
        if (payload.todos[i].done) {
          payload.doneCount = payload.doneCount + 1
        } else {
          payload.doneCount = payload.doneCount - 1
        }
        break
      }
    }
    return payload
  },
  [TODOS_REMOVE_TODO]: (state, action) => {
    let payload = { ...state }
    for (let i = 0; i < payload.todos.length; i++) {
      if (action.payload === payload.todos[i].id) {
        if (payload.todos[i].done) {
          payload.doneCount = payload.doneCount - 1
        }
        payload.todos.splice(i, 1)
        break
      }
    }
    return payload
  },
  [TODOS_CLEAR_COMPLETED]: (state, action) => {
    let payload = { ...state }
    payload.todos = payload.todos.filter((todo) => {
      return !todo.done
    })
    payload.doneCount = 0

    return payload
  },
  [TODOS_TOGGLE_EDIT_MODE]: (state, action) => {
    let payload = { ...state }
    for (let i = 0; i < payload.todos.length; i++) {
      if (action.payload === payload.todos[i].id) {
        payload.todos[i].editMode = !payload.todos[i].editMode
        break
      }
    }
    return payload
  },
  [TODOS_UPDATE_TODO]: (state, action) => {
    let payload = { ...state }
    for (let i = 0; i < payload.todos.length; i++) {
      if (action.payload.id === payload.todos[i].id) {
        payload.todos[i].text = action.payload.text
        payload.todos[i].editMode = false
      }
    }
    return payload
  },
  [TODOS_TOGGLE_ALL]: (state, action) => {
    let payload = { ...state }
    let result = payload.doneCount !== payload.todos.length
    for (let i = 0; i < payload.todos.length; i++) {
      payload.todos[i].done = result
    }
    if (result) {
      payload.doneCount = payload.todos.length
    } else {
      payload.doneCount = 0
    }

    return payload
  }
}

const initialState = {
  lastId: -1,
  doneCount: 0,
  todos: []
}

export default function todosReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
