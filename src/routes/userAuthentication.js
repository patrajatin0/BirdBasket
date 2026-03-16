import express from "express"
import bcrypt from "bcrypt"
import Users from "../model/schema.js"

const userAuthRouter = express.Router()

userAuthRouter.post("/register", async (req, res) => {
    const { name, email, password, mobile, address } = req.body
    try {
        const hashpassword = await bcrypt.hash(password, 10)
        const userRegister = new Users({
            name, email, mobile, address, password: hashpassword
        })
        await userRegister.save()
        res.send("Register Sucessfull...")
    } catch (error) {
        res.status(401).send("something went worng")
    }
})
export default userAuthRouter