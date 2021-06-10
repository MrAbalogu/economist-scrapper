import { dbConnect, dbDisconnect } from "../utils/dbConnect"
import User from '../models/User'
import { signUp } from '../controllers/AuthController'
import constants from "../utils/constants"

const URL = constants.TestDBUrl

describe("Authentication", () => {
  afterAll(async () => await dbDisconnect())

  beforeEach(async () => await dbConnect(URL))

  afterEach(async () => await User.deleteMany({}))

  let userParams = {
    name: "chinedu abalogu",
    email: "chineduabalogu@yahoo.com",
    password: "password"
  }

  describe("Should Register User", () => {
    it("Add row to mongoose user collection", async () => {
      const user = await signUp(userParams)

      const users = await User.find({})

      console.log("users: ", user, users)

      const userFromDB = await User.findOne({ email: userParams.email }).exec()

      expect(userFromDB.name).toBe(user.name)
      expect(userFromDB.email).toBe(user.email)
    })
  })
})
