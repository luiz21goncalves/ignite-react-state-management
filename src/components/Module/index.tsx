import { ChevronDown } from 'lucide-react'

import { Lesson } from './Lesson'

type ModuleProps = {
  moduleIndex: number
  title: string
  amountOfLessons: number
}

export function Module(props: ModuleProps) {
  const { amountOfLessons, title, moduleIndex } = props

  return (
    <div>
      <button className="flex w-full items-center gap-3 bg-zinc-800 p-4">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-950 text-sm">
          {moduleIndex + 1}
        </div>

        <div className="flex flex-col gap-1 text-left">
          <strong className="text-sm">{title}</strong>
          <span className="text-xs text-zinc-400">{amountOfLessons} aulas</span>
        </div>

        <ChevronDown className="ml-auto h-5 w-5 text-zinc-400" />
      </button>

      <nav className="relative flex flex-col gap-4 p-6">
        <Lesson title="Fundamentos do Redux" duration="09:13" />
        <Lesson title="Fundamentos do Redux" duration="09:13" />
        <Lesson title="Fundamentos do Redux" duration="09:13" />
      </nav>
    </div>
  )
}
