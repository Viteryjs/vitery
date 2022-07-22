import cpy from 'cpy'
import type { Plugin } from 'vite'

export interface VitePluginCopyItem {
  from: string[] | string
  to: string
}

export const copy = (options: VitePluginCopyItem[]): Plugin => ({
  name: 'copy',
  enforce: 'pre',
  async buildStart() {
    for (const { from, to } of options) {
      await cpy(from, to)
    }
  },
})
