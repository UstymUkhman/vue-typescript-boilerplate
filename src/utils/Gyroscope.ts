import RAF from '@/utils/RAF'
import platform from '@/platform'
require('@hughsk/fulltilt/dist/fulltilt')

class Gyroscope {
  private _update: Function = () => {}
  public enabled: boolean = true

  public x: number = 0
  public y: number = 0

  constructor () {
    if (platform.mobile) {
      this._update = this.update.bind(this)
      RAF.add(this._update)
    } else {
      console.warn('Gyroscope wasn\'t enabled because a desktop environment was detected.')
    }
  }

  private update () {
    const fulltiltPromise: any = FULLTILT.getDeviceOrientation({ 'type': 'game' })

    fulltiltPromise.then((deviceOrientation: FULLTILT.DeviceOrientation) => {
      const euler: FULLTILT.Euler = deviceOrientation.getScreenAdjustedEuler()

      this.x = euler.beta
      this.y = euler.gamma

      if (this.x > 90) {
        this.y = -this.y
      }
    }).catch((message: string) => {
      console.warn('Gyroscope was disabled:\n', message)
      RAF.remove(this._update)
      this.enabled = false
    })
  }
}

export default new Gyroscope()
