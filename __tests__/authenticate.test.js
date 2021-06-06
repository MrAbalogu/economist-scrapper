import { dbConnect, closeDB, clearDB } from "../utils/dbConnect"
import User from '../models/User'
import { signUp } from '../controllers/AuthController'
import constants from "../utils/constants"

const URL = constants.TestDBUrl

describe("Authentication", () => {
  beforeAll(async () => await dbConnect(URL))

  afterAll(async () => await closeDB())

  afterEach(async () => await clearDB())

  let userParams = {
    name: "chinedu abalogu",
    email: "chineduabalogu@yahoo.com",
    password: "password"
  }

  describe("Should Register User", () => {
    it("Add row to mongoose user collection", async () => {
      const user = await signUp(userParams)

      const userFromDB = await User.findOne({ email: user.email })

      console.log('user', user, userFromDB)
      expect(await userFromDB?.name).toBe(user?.name)
      expect(await userFromDB?.email).toBe(user?.email)
    })
  })
})
