import ExtendableError from 'es6-error'

class ExchangeCodeForToken extends ExtendableError {
  constructor(error) {
    super(error.message)
  }
}

export default ExchangeCodeForToken
