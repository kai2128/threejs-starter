import { Clock } from 'three'
import { emitter } from './emitter'

export interface Time {
  elapsedTime: number
  deltaTime: number
}

export const clock = new Clock()

let oldElapsedTime = 0
function animate() {
  const elapsedTime = clock.getElapsedTime()
  const deltaTime = elapsedTime - oldElapsedTime
  oldElapsedTime = elapsedTime
  window.requestAnimationFrame(animate)
  emitter.emit('update', {
    elapsedTime,
    deltaTime,
  })
}
animate()
