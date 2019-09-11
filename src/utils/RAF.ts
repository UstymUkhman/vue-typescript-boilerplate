class RAF {
  private listeners: Array<Function> = []

  constructor () {
    this.update()
  }

  private update () {
    const listeners: number = this.listeners.length

    for (let i: number = 0; i < listeners; i++) {
      this.listeners[i]()
    }

    window.requestAnimationFrame(this.update.bind(this))
  }

  public add (listener: Function) {
    const index = this.listeners.indexOf(listener)

    if (index === -1) {
      this.listeners.push(listener)
    }
  }

  public remove (listener: Function) {
    const index = this.listeners.indexOf(listener)

    if (index !== -1) {
      this.listeners.splice(index, 1)
    }
  }
}

export default new RAF()
