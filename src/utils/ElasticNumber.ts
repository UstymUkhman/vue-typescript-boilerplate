export default class ElasticNumber {
  private target: number = 0
  private value: number = 0
  public speed: number = 3

  constructor (value: number) {
    this.target = value
    this.value = value
  }

  public update (delta: number) {
    const dist: number = this.target - this.value
    this.value += dist * (this.speed * delta)
  }
}
