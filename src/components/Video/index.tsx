import Player from 'react-player'

import { Loader } from 'lucide-react'

import { usePlayerStore } from '../../store'

export function Video() {
  const { lesson, isCourseLoading, next } = usePlayerStore((store) => {
    const { currentLessonIndex, currentModuleIndex, course, isLoading, next } =
      store

    const currentModule = course?.modules?.[currentModuleIndex]
    const currentLesson = currentModule?.lessons?.[currentLessonIndex]

    return { lesson: currentLesson, isCourseLoading: isLoading, next }
  })

  function handlePlayNext() {
    next()
  }

  const url = `https://www.youtube.com/watch?v=${lesson?.id}`

  return (
    <div className="aspect-video w-full bg-zinc-950">
      {isCourseLoading ? (
        <div className="flex h-full items-center justify-center">
          <Loader className="h-6 w-6 animate-spin text-zinc-400" />
        </div>
      ) : (
        <Player
          width="100%"
          height="100%"
          controls
          playing
          onEnded={handlePlayNext}
          url={url}
        />
      )}
    </div>
  )
}
