import { useAppSelector } from '../../store'

export function Header() {
  const { currentModule, currentLesson } = useAppSelector((store) => {
    const { currentLessonIndex, currentModuleIndex } = store.player

    const currentModule = store.player.course.modules[currentModuleIndex]
    const currentLesson = currentModule.lessons[currentLessonIndex]

    return { currentModule, currentLesson }
  })

  return (
    <div className="flex flex-col gap-1">
      <h1 className="text-2xl font-bold">{currentLesson.title}</h1>
      <span className="text-sm text-zinc-400">
        Módulo &ldquo;{currentModule.title}&ldquo;
      </span>
    </div>
  )
}
