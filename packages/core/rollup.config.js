import { plugins } from '../../rollup.base'

const input = "src/index.ts"
export default [
  {
    input,
    output: {
      format: 'iife',
      name: "FEMonitorCore",
      sourcemap: true,
      strict: true,
      file: "dist/index.iife.js"
    },
    context: 'window',
    plugins,
  },
  {
    input,
    output: {
      format: 'umd',
      name: "FEMonitorCore",
      sourcemap: true,
      file: "dist/index.umd.js"
    },
    plugins,
  }
]
