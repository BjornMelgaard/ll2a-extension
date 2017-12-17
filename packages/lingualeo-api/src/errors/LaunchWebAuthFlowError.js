import ExtendableError from 'es6-error'

class LaunchWebAuthFlowError extends ExtendableError {
  constructor(error) {
    super(error.message)
  }
}

export default LaunchWebAuthFlowError
