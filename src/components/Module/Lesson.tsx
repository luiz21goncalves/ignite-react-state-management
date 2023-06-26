import { PlayCircle, Video } from 'lucide-react'

type LessonProps = {
  title: string
  duration: string
  onPlay: () => void
  isCurrent?: boolean
}

export function Lesson(props: LessonProps) {
  const { duration, title, onPlay, isCurrent = false } = props

  return (
    <button
      onClick={onPlay}
      data-active={isCurrent}
      disabled={isCurrent}
      className="flex items-center gap-3 text-sm text-zinc-400 transition-colors data-[active=true]:text-emerald-400 enabled:hover:text-zinc-100"
    >
      {isCurrent ? (
        <PlayCircle className="h-4 w-4 text-emerald-400" />
      ) : (
        <Video className="h-4 w-4 text-zinc-500" />
      )}
      <span>{title}</span>
      <span className="ml-auto font-mono text-sm text-zinc-500">
        {duration}
      </span>
    </button>
  )
}
