import { Config } from '@stencil/core'
import { sass } from '@stencil/sass'
import { reactOutputTarget } from '@stencil/react-output-target'

export const config: Config = {
  namespace: 'ds2',
  plugins: [
    sass()
  ],
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader'
    },
    {
      type: 'dist-custom-elements-bundle'
    },
    reactOutputTarget({
      componentCorePackage: '@dotkomonline/ds2',
      proxiesFile: '../ds2-react/src/components.ts',
      includeDefineCustomElements: true
    })
  ]
}
