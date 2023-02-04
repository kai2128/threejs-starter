import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader'
import { LoadingManager, TextureLoader } from 'three'

const loadingManager = new LoadingManager()

const dracoLoader = new DRACOLoader(loadingManager)
dracoLoader.setDecoderPath('draco/')

const gltfLoader = new GLTFLoader(loadingManager)
gltfLoader.setDRACOLoader(dracoLoader)

const textureLoader = new TextureLoader(loadingManager)

export { loadingManager }
