import { beforeEach, describe, expect, it } from 'vitest'

import { usePlayerStore as store } from '.'

const COURSE = {
  id: 1,
  modules: [
    {
      id: 1,
      title: 'Iniciando com React',
      lessons: [
        { id: 'Jai8w6K_GnY', title: 'CSS Modules', duration: '13:45' },
        {
          id: 'w-DW4DhDfcw',
          title: 'Estilização do Post',
          duration: '10:05',
        },
      ],
    },
    {
      id: 2,
      title: 'Estrutura da aplicação',
      lessons: [
        {
          id: 'gE48FQXRZ_o',
          title: 'Componente: Comment',
          duration: '13:45',
        },
        { id: 'Ng_Vk4tBl0g', title: 'Responsividade', duration: '10:05' },
      ],
    },
  ],
}

const initialState = store.getState()

describe('player store', () => {
  beforeEach(() => {
    store.setState(initialState)
  })

  it('should be able to play', () => {
    const { play } = store.getState()

    play({ lessonIndex: 2, moduleIndex: 1 })

    const { currentLessonIndex, currentModuleIndex } = store.getState()

    expect(currentLessonIndex).toEqual(2)
    expect(currentModuleIndex).toEqual(1)
  })

  it('should be able to play next video automatically', () => {
    store.setState({ course: COURSE })

    const { next } = store.getState()

    next()

    const { currentLessonIndex, currentModuleIndex } = store.getState()

    expect(currentLessonIndex).toEqual(1)
    expect(currentModuleIndex).toEqual(0)
  })

  it('should be able to jump to the next module automatically', () => {
    store.setState({ course: COURSE, currentLessonIndex: 1 })

    const { next } = store.getState()

    next()

    const { currentLessonIndex, currentModuleIndex } = store.getState()

    expect(currentLessonIndex).toEqual(0)
    expect(currentModuleIndex).toEqual(1)
  })

  it('should not be able to update current module and lesson if there is no next lesson available', () => {
    store.setState({
      course: COURSE,
      currentLessonIndex: 1,
      currentModuleIndex: 1,
    })

    const { next } = store.getState()

    next()

    const { currentLessonIndex, currentModuleIndex } = store.getState()

    expect(currentLessonIndex).toEqual(1)
    expect(currentModuleIndex).toEqual(1)
  })
})
