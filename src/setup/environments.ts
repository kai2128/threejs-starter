import { AmbientLight, DirectionalLight } from 'three'
import { scene } from '@/setup/scene'

const sunlight = new DirectionalLight(0xFFFFFF, 1)
sunlight.position.set(5.6, 4.1, 6.6)
sunlight.castShadow = true
sunlight.shadow.camera.far = 20
sunlight.shadow.mapSize.set(2048, 2048)
sunlight.shadow.normalBias = 0.05
scene.add(sunlight)

const ambientLight = new AmbientLight(0xFFFFFF, 0.5)
scene.add(ambientLight)

export const environments = { sunlight, ambientLight }
