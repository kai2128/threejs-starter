import mitt from 'mitt'
import type { Time } from './animate'
import type { Size } from './sizes'

// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
type Events = {
  resize: Size
  update: Time
}

export const emitter = mitt<Events>()
