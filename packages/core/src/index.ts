import { bugReport } from './api'

// TODO 待优化
export interface Options {
  host: string
  url: string
}

export type TraceEventType = 'error' | 'tag' | string

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export const SDK_VERSION = __VERSION__

class TrackEvent {
  private options: Options
  private readonly id: string

  constructor(id: string, options: Options) {
    if (options) {
      options = {
        host: 'http://localhost:7001',
        url: '/api/v1/error/track',
      }
    }
    this.options = options
    this.id = id

  }

  trackEvent(type: TraceEventType, event: any) {
    bugReport(this.options.host + this.options.url, JSON.stringify({
      id: this.id,
      type,
      error: event,
    }))
  }
}

export function init(id: string, options: Options) {
  return new TrackEvent(id, options)
}

