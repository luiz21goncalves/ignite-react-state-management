import { Video } from 'lucide-react'

type LessonProps = {
  title: string
  duration: string
  onPlay: () => void
}

export function Lesson(props: LessonProps) {
  const { duration, title, onPlay } = props

  return (
    <button
      onClick={onPlay}
      className="flex items-center gap-3 text-sm text-zinc-400"
    >
      <Video className="h-4 w-4 text-zinc-500" />
      <span>{title}</span>
      <span className="ml-auto font-mono text-sm text-zinc-500">
        {duration}
      </span>
    </button>
  )
}
