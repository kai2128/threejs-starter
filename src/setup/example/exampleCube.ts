import { BoxGeometry, Mesh, ShaderMaterial } from 'three'
import { scene } from '@/setup/scene'

import { emitter } from '@/setup/emitter'
import fragmentShader from '@/shader/fragment.glsl'
import vertexShader from '@/shader/vertex.glsl'

const geometry = new BoxGeometry(1, 1, 1)
const material = new ShaderMaterial({
  fragmentShader,
  vertexShader,
})
const cube = new Mesh(geometry, material)
scene.add(cube)

emitter.on('update', ({ deltaTime }) => {
  cube.rotation.y += deltaTime * 0.5
})
export {}
