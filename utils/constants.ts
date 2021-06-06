export default {
  baseUrl: "https://www.economist.com",
  secret: process.env.COOKIE_SECRET,
  DefaultErrMsg: "Something went wrong, Error has been logged and will be resolved as soon as possible",
  AuthenticationErrMsg: "Authentication Error, provide valid credentials",
  TestDBUrl: "mongodb://127.0.0.1/economist-clone-test"
}
