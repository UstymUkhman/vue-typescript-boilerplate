export default class ElasticVector2 {
  public speed: number = 3
  private value: any = {}

  private x: number = 0
  private y: number = 0

  constructor (value: any) {
    this.value = value
    this.x = value.x
    this.y = value.y
  }

  copy (target: any) {
    this.x = target.x
    this.y = target.y
  }

  update (delta: number) {
    let distx = this.x - this.value.x
    let disty = this.y - this.value.y

    this.value.x += distx * (this.speed * delta)
    this.value.y += disty * (this.speed * delta)
  }
}
