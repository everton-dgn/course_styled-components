import { useEffect, useState } from 'react'
import { debounce } from 'helpFunctions'
import T from 'theme'
import { GetWindowSizeType, UseRenderingByWindowSizeType } from './types'

const isMinimumWidth = (size: number): boolean =>
  window.matchMedia(`(min-width: ${size}px)`).matches

export const getWindowSize = (): GetWindowSizeType => ({
  sm: isMinimumWidth(T.windowSizes.sm),
  md: isMinimumWidth(T.windowSizes.md),
  lg: isMinimumWidth(T.windowSizes.lg),
  custom: size => isMinimumWidth(size)
})

export const useRenderingByWindowSize = (): UseRenderingByWindowSizeType => {
  const [windowSize, setWindowSize] = useState<GetWindowSizeType>(
    getWindowSize()
  )

  useEffect(function setBreakpointByWindowWidth() {
    const changeWindowSize = () => setWindowSize(getWindowSize())
    window.addEventListener('resize', debounce(changeWindowSize, 200))
    return () => window.removeEventListener('resize', changeWindowSize)
  }, [])

  return { windowSize }
}
