import Player from 'react-player'

import { useAppDispatch, useAppSelector } from '../../store'
import { next } from '../../store/slices/player'

export function Video() {
  const lesson = useAppSelector((store) => {
    const { currentLessonIndex, currentModuleIndex } = store.player

    const currentModule = store.player.course?.modules?.[currentModuleIndex]
    const currentLesson = currentModule?.lessons?.[currentLessonIndex]

    return currentLesson
  })

  const dispatch = useAppDispatch()

  function handlePlayNext() {
    dispatch(next())
  }

  if (!lesson) {
    return null
  }

  const url = `https://www.youtube.com/watch?v=${lesson.id}`

  return (
    <div className="aspect-video w-full bg-zinc-950">
      <Player
        width="100%"
        height="100%"
        controls
        playing
        onEnded={handlePlayNext}
        url={url}
      />
    </div>
  )
}
