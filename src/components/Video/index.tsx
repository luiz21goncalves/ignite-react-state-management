import Player from 'react-player'

import { useAppSelector } from '../../store'

export function Video() {
  const lesson = useAppSelector((store) => {
    const { currentLessonIndex, currentModuleIndex } = store.player

    const currentModule = store.player.course.modules[currentModuleIndex]
    const currentLesson = currentModule.lessons[currentLessonIndex]

    return currentLesson
  })

  const url = `https://www.youtube.com/watch?v=${lesson.id}`

  return (
    <div className="aspect-video w-full bg-zinc-950">
      <Player width="100%" height="100%" controls url={url} />
    </div>
  )
}
