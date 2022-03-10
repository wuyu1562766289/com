import { createApp } from 'vue'

import Loading from './loading.vue'

export default {
  instance: null,
  parent: null,
  times: 0,
  open () {
    if (this.times === 0) {
      this.instance = createApp(Loading)
      this.parent = document.createElement('div')
      let appDom = document.getElementById('app')
      appDom.appendChild(this.parent)
      this.instance.mount(this.parent)
    }
    this.times++
  },
  close () {
    this.times--
    if (this.times <= 0) {
      this.times = 0
      let appDom = document.getElementById('app')
      this.instance.unmount(this.parent)
      appDom.removeChild(this.parent)
    }
  }
}
