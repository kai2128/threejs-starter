import { WebGLRenderer } from 'three'
import { camera } from './camera'
import { emitter } from './emitter'
import { scene } from './scene'

export const renderer = new WebGLRenderer({
  antialias: true,
})
document.querySelector('#app')!.appendChild(renderer.domElement)

emitter.on('resize', ({ width, height }) => {
  renderer.setSize(width, height)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})

emitter.on('update', () => {
  renderer.render(scene, camera)
})
