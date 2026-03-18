import express from "express"
import { Birds } from "../model/schema.js"
const birdRoutes = express.Router()

birdRoutes.post("/birds", async (req, res) => {
    const { name, category, price, weight, img_url, description, stock } = req.body
    try {
        if (!name || !weight || !price) {
            res.status(404).send("Required filed are missing")
        }
        const birdStor = new Birds({
            name, category, price, weight, img_url, description, stock
        })

        await birdStor.save()
        res.send("Store Sucessfully..")
    } catch (error) {
        res.status(404).send("something went worng..")
    }
})
birdRoutes.get("/birds", async (req, res) => {
    try {
        const birds = await Birds.find({})
        res.send(birds)
    } catch (error) {
        res.status(404).send("something went worng..")
    }
})
birdRoutes.get("/birds/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const birdId = await Birds.findById(id)
        if (!birdId) {
            res.status(404).send("id is not matching")
        }
        res.send(birdId)
    } catch (error) {
        res.status(404).send("something went worng..")
    }
})

export default birdRoutes