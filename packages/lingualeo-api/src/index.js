import LocalStore from 'local-observable-store'

import authorizeExtensionAndSave from './storageAdapters/authorizeExtensionAndSave'
import refreshAccessTokenAndSave from './storageAdapters/refreshAccessTokenAndSave'
import checkStorageIsAccessTokenExpired from './storageAdapters/checkStorageIsAccessTokenExpired'
import chromep from './chromep'

function makeStorage() {
  // TODO: LocalStore stores all data in one big localStorage item,
  // store items by appending prefix like here to increase speed
  // https://github.com/zalando-stups/oauth2-client-js/blob/master/src/storage/local-storage.js
  const storage = new LocalStore()
  const storePrefix = 'doorkeeper'
  storage.sync(storePrefix)
  return storage
}

export default class Doorkeeper {
  constructor(config) {
    this.config = config
    // TODO move storage outside doorkeeper
    this.storage = makeStorage()
  }

  isPermissionsWereGranted() {
    const refreshToken = this.storage.get('refreshToken')
    console.log('isPermissionsWereGranted', refreshToken)
    return !!refreshToken
  }

  isAccessTokenExpired() {
    console.log(
      'isAccessTokenExpired',
      checkStorageIsAccessTokenExpired(this.storage),
    )

    return checkStorageIsAccessTokenExpired(this.storage)
  }

  async getPermissions() {
    const { storage, config } = this

    const { getAuthorizeUrl, getAccessTokenUrl } = config

    await authorizeExtensionAndSave(storage, getAuthorizeUrl, getAccessTokenUrl)
  }

  async refreshAccessToken() {
    const { storage, config } = this

    const { getRefreshTokenUrl } = config

    const refreshToken = storage.get('refreshToken')

    await refreshAccessTokenAndSave(storage, refreshToken, getRefreshTokenUrl)
  }

  async exit() {
    const token = this.storage.get('accessToken')
    await chromep.identity.removeCachedAuthToken({ token })
    this.storage.delAll(['refreshToken', 'accessToken'])

    chromep.identity.launchWebAuthFlow({
      url:         this.config.logoutUrl(),
      interactive: true,
    })
  }
}
