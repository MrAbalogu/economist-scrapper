import Constants from "./constants"

export class DefaultError extends Error {
  static STATUS_CODE = 500
  name = "DefaultError"

  constructor() {
    super(Constants.DefaultErrMsg)

    Object.setPrototypeOf(this, DefaultError.prototype)
  }
}

export class AuthenticationError extends Error {
  static STATUS_CODE = 401
  name =  "AuthenticationError"

  constructor() {
    super(Constants.AuthenticationErrMsg)

    Object.setPrototypeOf(this, DefaultError.prototype)
  }
}

export class ValidationError extends Error {
  static STATUS_CODE = 401
  name =  "AuthenticationError"

  constructor(errorMessage: string) {
    super(errorMessage)

    Object.setPrototypeOf(this, DefaultError.prototype)
  }
}