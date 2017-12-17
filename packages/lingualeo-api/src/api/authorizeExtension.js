import axios from 'axios'

import chromep from '~/chromep'
import getSearchParam from '~/lib/getSearchParam'
import LaunchWebAuthFlowError from '~/errors/LaunchWebAuthFlowError'
import ExchangeCodeForToken from '~/errors/ExchangeCodeForToken'

async function exchangeCodeForToken(code, getAccessTokenUrl) {
  const url = getAccessTokenUrl(code)
  return axios.post(url)
}

// uri has form https://{app_id}.chromiumapp.org/provider_cb#code={value}
const getCode = getSearchParam('code')

async function authorizeExtension(getAuthorizeUrl, getAccessTokenUrl) {
  const options = {
    interactive: true,
    url:         getAuthorizeUrl(),
  }

  let respRedirectUri = null
  try {
    respRedirectUri = await chromep.identity.launchWebAuthFlow(options)
  } catch (e) {
    throw new LaunchWebAuthFlowError(e)
  }
  const code = getCode(respRedirectUri)

  try {
    const resp = await exchangeCodeForToken(code, getAccessTokenUrl)
    return resp
  } catch (e) {
    throw new ExchangeCodeForToken(e)
  }
}

export default authorizeExtension
