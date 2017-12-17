import { join } from 'path'
import WriteJsonPlugin from 'write-json-webpack-plugin'

import { root } from '~/webpack/lib'
import contentSecurityPolicy from './contentSecurityPolicy'

const pkg = require(join(root, 'package.json'))

export default [
  new WriteJsonPlugin({
    filename: 'manifest.json',
    pretty:   true,
    object:   {
      manifest_version: 2,
      version:          pkg.version,
      name:             pkg['extension-name'],
      description:      pkg.description,
      homepage_url:     pkg.repository.url,
      default_locale:   'en',
      content_scripts:  [
        {
          all_frames: true,
          matches:    ['<all_urls>'],
          css:        ['inject.css'],
          js:         ['inject.js'],
          run_at:     'document_start',
        },
      ],
      icons: {
        16:  'icons/icon-16.png',
        48:  'icons/icon-48.png',
        128: 'icons/icon-128.png',
      },
      permissions:             ['tabs', 'storage', 'notifications', 'contextMenus'],
      content_security_policy: contentSecurityPolicy,

      // key is used to make extension id deterministic
      // comment it to make new one
      // https://stackoverflow.com/questions/21497781/how-to-change-chrome-packaged-app-id-or-why-do-we-need-key-field-in-the-manifest
      // key: process.env.CHROME_EXTENSION_KEY,
    },
  }),
]
