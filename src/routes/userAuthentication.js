import express from "express"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
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
userAuthRouter.post("/login", async (req, res) => {
    const { email, password } = req.body
    try {
        const loginUser = await Users.findOne({ email })
        if (!email) {
            res.status(404).send("Invalid Credential")
        }
        const isMatch = await bcrypt.compare(password, loginUser.password)
        if (isMatch) {
            const token = await jwt.sign({ _id: loginUser._id }, process.env.SECRET_KEY)
            res.cookie("token", token)

        }
        res.send("Login Sucessfull...")
    } catch (error) {
        res.status(401).send("something went worng")
    }
})
export default userAuthRouter