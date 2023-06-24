import { TypedUseSelectorHook, useSelector } from 'react-redux'

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

export type RootState = ReturnType<typeof store.getState>

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
