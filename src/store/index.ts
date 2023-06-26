import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'

import { configureStore } from '@reduxjs/toolkit'

import { player } from './slices/player'

export const store = configureStore({
  reducer: {
    player,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export const useAppDispatch: () => AppDispatch = useDispatch

export const useCurrentModuleAndLesson = () => {
  return useAppSelector((store) => {
    const { currentLessonIndex, currentModuleIndex } = store.player

    const currentModule = store.player.course?.modules[currentModuleIndex]
    const currentLesson = currentModule?.lessons[currentLessonIndex]

    return { currentLesson, currentModule }
  })
}
