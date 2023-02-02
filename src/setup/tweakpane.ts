import { Pane } from 'tweakpane'
import { renderer } from './renderer'

export const params = {
  bgColor: '#000',
}
export const tweakPane = new Pane({})

tweakPane.addInput(params, 'bgColor').on('change', (color) => {
  renderer.setClearColor(color.value)
})
