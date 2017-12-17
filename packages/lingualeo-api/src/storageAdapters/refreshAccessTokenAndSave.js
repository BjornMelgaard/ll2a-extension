import refreshTokenStart from '../api/refreshAccessToken'
import dataToStorageData from './dataToStorageData'
import saveAll from './saveAll'

async function refreshAccessTokenAndSave(
  storage,
  refreshToken,
  getRefreshTokenUrl,
) {
  const resp = await refreshTokenStart(refreshToken, getRefreshTokenUrl)
  const storageData = dataToStorageData(resp.data)
  saveAll(storage, storageData)
}

export default refreshAccessTokenAndSave
