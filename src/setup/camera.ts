import { PerspectiveCamera } from 'three'
import { emitter } from './emitter'
import { scene } from './scene'

export const camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 100)
camera.position.z = 3
camera.position.y = 2
scene.add(camera)

emitter.on('resize', ({ aspectRatio }) => {
  camera.aspect = aspectRatio
  camera.updateProjectionMatrix()
})

