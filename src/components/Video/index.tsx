import Player from 'react-player'

import { Loader } from 'lucide-react'

import { useAppDispatch, useAppSelector } from '../../store'
import { next } from '../../store/slices/player'

export function Video() {
  const lesson = useAppSelector((store) => {
    const { currentLessonIndex, currentModuleIndex } = store.player

    const currentModule = store.player.course?.modules?.[currentModuleIndex]
    const currentLesson = currentModule?.lessons?.[currentLessonIndex]

    return currentLesson
  })
  const isCourseLoading = useAppSelector((store) => store.player.isLoading)
  const dispatch = useAppDispatch()

  function handlePlayNext() {
    dispatch(next())
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
