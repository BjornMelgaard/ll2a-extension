import ExtendableError from 'es6-error'

class ExchangeRefreshTokenForTokenError extends ExtendableError {
  constructor(error) {
    super(error.message)
  }
}

export default ExchangeRefreshTokenForTokenError
