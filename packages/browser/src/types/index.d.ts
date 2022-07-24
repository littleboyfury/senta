import type { Options } from '@freege/core'

declare global {
  interface Window {
    __FRONTEND_CONFIG__?: {
      id: string
      options: Options
    }
  }
}

export {}
