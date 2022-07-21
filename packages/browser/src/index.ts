import { init } from '@freege/core'
import type { Options } from '@freege/core'

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export const SDK_VERSION = __VERSION__

export function initBrowser(id: string, options: Options) {
  const trackEvent = init(id, options)

  // 基本异常
  window.onerror = function (message, source, lineno, colno, error) {
    const errorInfo = {
      message,
      source,
      lineno,
      colno,
      error,
    }
    // TODO 需要获取什么错误信息
    console.log('onerror>>>>>>>>>', errorInfo)
    trackEvent.trackEvent('error', {
      message: error?.message,
      stack: error?.stack,
    })
  }

  // 捕获 img script link 标签
  window.addEventListener('error', (error) => {
    // TODO 需要获取什么错误信息
    console.log('error>>>>>>>>', error)
    trackEvent.trackEvent('error', {
      message: error.error ? error?.error.message : '',
      stack: error.error ? error.error.stack : '',
    })
  }, true)

  // 捕获 promise fetch
  window.addEventListener('unhandledrejection', function (error) {
    // TODO 需要获取什么错误信息
    console.log('unhandledrejection>>>>>>>', error)
    trackEvent.trackEvent('error', {
      message: error.reason,
      stack: error.type,
    })
  })
}
