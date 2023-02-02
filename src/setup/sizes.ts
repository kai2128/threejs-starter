import { emitter } from './emitter'

export interface Size {
  width: number
  height: number
  aspectRatio: number
}

export const size: Size = {
  width: window.innerWidth,
  height: window.innerHeight,
  aspectRatio: window.innerWidth / window.innerHeight,
}

const onResize = () => {
  const { innerHeight, innerWidth } = window
  size.width = innerWidth
  size.height = innerHeight
  size.aspectRatio = innerWidth / innerHeight
  emitter.emit('resize', size)
}
onResize()
window.addEventListener('resize', onResize)
