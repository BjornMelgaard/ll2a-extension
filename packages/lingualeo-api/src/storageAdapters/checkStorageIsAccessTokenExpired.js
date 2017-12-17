import isAccessTokenExpired from '../lib/isAccessTokenExpired'

function checkStorageIsAccessTokenExpired(storage) {
  const createdAt = storage.get('createdAt')
  const expiresIn = storage.get('expiresIn')
  return isAccessTokenExpired(createdAt, expiresIn)
}

export default checkStorageIsAccessTokenExpired
