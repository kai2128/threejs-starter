import { Mesh, MeshStandardMaterial, PlaneGeometry } from 'three'
import { scene } from '@/setup/scene'

const geometry = new PlaneGeometry(10, 10)
const material = new MeshStandardMaterial({ color: 0xEEEEEE })
const plane = new Mesh(geometry, material)
plane.rotateX(-Math.PI * 0.5)
plane.receiveShadow = true
plane.position.y = -1
scene.add(plane)

export { }

