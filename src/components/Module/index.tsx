import * as Collapsible from '@radix-ui/react-collapsible'
import { ChevronDown } from 'lucide-react'

import { usePlayerStore } from '../../store'
import { Lesson } from './Lesson'

type ModuleProps = {
  moduleIndex: number
  title: string
  amountOfLessons: number
}

export function Module(props: ModuleProps) {
  const { amountOfLessons, title, moduleIndex } = props

  const { currentLessonIndex, currentModuleIndex, lessons, play } =
    usePlayerStore((store) => {
      const { currentLessonIndex, currentModuleIndex, play } = store

      const lessons = store.course?.modules?.[currentModuleIndex]?.lessons

      return { currentLessonIndex, currentModuleIndex, lessons, play }
    })

  const isOpen = moduleIndex === 0

  return (
    <Collapsible.Root className="group" defaultOpen={isOpen}>
      <Collapsible.Trigger className="flex w-full items-center gap-3 bg-zinc-800 p-4">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-950 text-sm">
          {moduleIndex + 1}
        </div>

        <div className="flex flex-col gap-1 text-left">
          <strong className="text-sm">{title}</strong>
          <span className="text-xs text-zinc-400">{amountOfLessons} aulas</span>
        </div>

        <ChevronDown className="ml-auto h-5 w-5 text-zinc-400 transition-transform group-data-[state=open]:rotate-180" />
      </Collapsible.Trigger>

      <Collapsible.Content>
        <nav className="relative flex flex-col gap-4 p-6">
          {lessons?.map((lesson, lessonIndex) => {
            function handlePlayLesson() {
              play({
                moduleIndex,
                lessonIndex,
              })
            }

            const isCurrentLesson =
              currentModuleIndex === moduleIndex &&
              currentLessonIndex === lessonIndex

            return (
              <Lesson
                key={lesson.id}
                title={lesson.title}
                duration={lesson.duration}
                onPlay={handlePlayLesson}
                isCurrent={isCurrentLesson}
              />
            )
          })}
        </nav>
      </Collapsible.Content>
    </Collapsible.Root>
  )
}
