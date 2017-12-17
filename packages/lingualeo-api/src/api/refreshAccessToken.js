import axios from 'axios'
import ExchangeRefreshTokenForTokenError from '../errors/ExchangeRefreshTokenForTokenError'

async function exchangeRefreshTokenForToken(refreshToken, getRefreshTokenUrl) {
  const url = getRefreshTokenUrl(refreshToken)
  return axios.post(url)
}

async function refresAccessToken(refreshToken, getRefreshTokenUrl) {
  try {
    const resp = await exchangeRefreshTokenForToken(
      refreshToken,
      getRefreshTokenUrl,
    )
    return resp
  } catch (e) {
    throw new ExchangeRefreshTokenForTokenError(e)
  }
}

export default refresAccessToken
