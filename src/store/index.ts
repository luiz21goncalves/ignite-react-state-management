import { create } from 'zustand'

import { api } from '../lib/axios'

type Course = {
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

export type PlayerStore = {
  currentModuleIndex: number
  currentLessonIndex: number
  course: Course | null
  isLoading: boolean
  play: (data: { lessonIndex: number; moduleIndex: number }) => void
  next: () => void
  load: () => Promise<void>
}

export const usePlayerStore = create<PlayerStore>((set, get) => {
  return {
    course: null,
    currentLessonIndex: 0,
    currentModuleIndex: 0,
    isLoading: true,
    play: ({ lessonIndex, moduleIndex }) => {
      set({
        currentLessonIndex: lessonIndex,
        currentModuleIndex: moduleIndex,
      })
    },
    next: () => {
      const { currentLessonIndex, currentModuleIndex, course } = get()

      const module = course?.modules[currentModuleIndex]

      const amountOfModules = course?.modules.length ?? 0
      const amountOfLessons = module?.lessons?.length ?? 0

      const nextLesson = currentLessonIndex + 1
      const nextModule = currentModuleIndex + 1

      const hasNextLesson = amountOfLessons > nextLesson
      const hasNextModule = amountOfModules > nextModule

      if (hasNextLesson) {
        return set({
          currentLessonIndex: nextLesson,
        })
      }

      if (hasNextModule) {
        return set({
          currentLessonIndex: 0,
          currentModuleIndex: nextModule,
        })
      }
    },
    load: async () => {
      set({ isLoading: true })

      const { data } = await api.get<Course>('/courses/1')

      set({ course: data, isLoading: false })
    },
  }
})

export const useCurrentModuleAndLesson = () => {
  return usePlayerStore((store) => {
    const { currentLessonIndex, currentModuleIndex, course } = store

    const currentModule = course?.modules[currentModuleIndex]
    const currentLesson = currentModule?.lessons[currentLessonIndex]

    return { currentLesson, currentModule }
  })
}
