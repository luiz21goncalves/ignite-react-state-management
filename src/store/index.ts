import { configureStore, createSlice } from '@reduxjs/toolkit'

const todoSlice = createSlice({
  name: 'todo',
  initialState: ['Fazer café', 'Estudar Redux'],
  reducers: {
    add: (state, action) => {
      state.push(action.payload.newTodo)
    },
  },
})

export const { add } = todoSlice.actions

export const store = configureStore({
  reducer: {
    todo: todoSlice.reducer,
  },
})
