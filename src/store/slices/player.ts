import { PayloadAction, createSlice } from '@reduxjs/toolkit'

export type Course = {
  id: number
  modules: Array<{
    id: number
    title: string
    lessons: Array<{
      id: string
      title: string
      duration: string
    }>
  }>
}

export type PlayerState = {
  currentModuleIndex: number
  currentLessonIndex: number
  course: Course | null
}

const initialState: PlayerState = {
  course: null,
  currentModuleIndex: 0,
  currentLessonIndex: 0,
}

const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    play: (
      store,
      action: PayloadAction<{ lessonIndex: number; moduleIndex: number }>,
    ) => {
      store.currentLessonIndex = action.payload.lessonIndex
      store.currentModuleIndex = action.payload.moduleIndex
    },
    next: (store) => {
      const { currentLessonIndex, currentModuleIndex } = store

      const module = store?.course?.modules[currentModuleIndex]

      const amountOfModules = store?.course?.modules.length ?? 0
      const amountOfLessons = module?.lessons?.length ?? 0

      const hasNextLesson = amountOfLessons > currentLessonIndex + 1
      const hasNextModule = amountOfModules > currentModuleIndex + 1

      if (hasNextLesson) {
        store.currentLessonIndex = currentLessonIndex + 1
        return
      }

      if (hasNextModule) {
        store.currentModuleIndex = currentModuleIndex + 1
        store.currentLessonIndex = 0
      }
    },
    start: (store, action: PayloadAction<{ course: Course }>) => {
      store.course = action.payload.course
    },
  },
})

export const player = playerSlice.reducer
export const { play, next, start } = playerSlice.actions
