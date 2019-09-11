declare module '*.vue' {
  import Vue from 'vue'
  export default Vue
}

declare module "*.json" {
  const value:  any
  export default value
}

declare module 'lodash/*'
declare module 'vue-cookie'
declare module 'markdown-it'
declare module 'vue-analytics'
declare module 'vue-event-handler'
declare module 'markdown-it-link-attributes'

declare module FULLTILT {
	class DeviceOrientation {
    constructor(options?: any)

    getLastRawEventData(): DeviceOrientationEvent
		getScreenAdjustedQuaternion(): Quaternion
		getScreenAdjustedMatrix(): RotationMatrix
		getFixedFrameQuaternion(): Quaternion
		getFixedFrameMatrix(): RotationMatrix
		getScreenAdjustedEuler(): Euler
		getFixedFrameEuler(): Euler

		isAvailable(attribute: number): boolean
		listen(callback?: Function): void
		start(callback?: Function): void
		isAbsolute(): boolean
		stop(): void

		ALPHA: number
		GAMMA: number
		BETA: number
	}

	class DeviceMotion {
    constructor(options?: any)

		getScreenAdjustedAccelerationIncludingGravity(): number
		getLastRawEventData(): DeviceOrientationEvent
		getScreenAdjustedAcceleration(): number
		getScreenAdjustedRotationRate(): number

		isAvailable(attribute: number): boolean
		listen(callback?: Function): void
		start(callback?: Function): void
		stop(): void

		ACCELERATION_INCLUDING_GRAVITY_X: number
		ACCELERATION_INCLUDING_GRAVITY_Y: number
		ACCELERATION_INCLUDING_GRAVITY_Z: number

    ROTATION_RATE_ALPHA: number
		ROTATION_RATE_GAMMA: number
		ROTATION_RATE_BETA: number

    ACCELERATION_X: number
		ACCELERATION_Y: number
		ACCELERATION_Z: number
	}

	class Quaternion {
		constructor(x?: number, y?: number, z?: number, w?: number)

		set(x?: number, y?: number, z?: number, w?: number): Quaternion
		setFromRotationMatrix(matrix: RotationMatrix): Quaternion
		multiply(quaternion: Quaternion): Quaternion
		copy(quaternion: Quaternion): Quaternion
		setFromEuler(euler: Euler): Quaternion

		rotateX(radians: number): Quaternion
		rotateY(radians: number): Quaternion
		rotateZ(radians: number): Quaternion
	}

	class RotationMatrix {
		constructor(m11?: number, m12?: number, m13?: number, m21?: number, m22?: number, m23?: number, m31?: number, m32?: number, m33?: number)
		set(m11: number, m12: number, m13: number, m21: number, m22: number, m23: number, m31: number, m32: number, m33: number): RotationMatrix

		setFromQuaternion(quaternion: Quaternion): RotationMatrix
		multiply(matrix: RotationMatrix): RotationMatrix
		copy(matrix: RotationMatrix): RotationMatrix
		setFromEuler(euler: Euler): RotationMatrix

		rotateX(radians: number): RotationMatrix
		rotateY(radians: number): RotationMatrix
		rotateZ(radians: number): RotationMatrix

    elements: Array<number>
	}

	class Euler {
		constructor(alpha?: number, beta?: number, gamma?: number)

		set(alpha: number, beta: number, gamma: number): Euler
		setFromRotationMatrix(matrix: RotationMatrix): Euler
		setFromQuaternion(quaternion: Quaternion): Euler

		rotateX(radians: number): Euler
		rotateY(radians: number): Euler
		rotateZ(radians: number): Euler
		copy(euler: Euler): Euler

    alpha: number
		gamma: number
		beta: number
	}

	function getDeviceOrientation(options?: any): any
	function getDeviceMotion(options?: any): any
}
