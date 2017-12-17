import authorizeExtension from '../api/authorizeExtension'
import dataToStorageData from './dataToStorageData'
import saveAll from './saveAll'

async function authorizeExtensionAndSave(
  storage,
  getAuthorizeUrl,
  getAccessTokenUrl,
) {
  const resp = await authorizeExtension(getAuthorizeUrl, getAccessTokenUrl)
  const storageData = dataToStorageData(resp.data)
  saveAll(storage, storageData)
}

export default authorizeExtensionAndSave
