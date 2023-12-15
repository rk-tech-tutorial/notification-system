const { producer } = require("./service/prducer")

const router = require("express").Router()

router.post("/sms", async (req, res) => {
    const { from, to, event, variables } = req.body

    await producer("sms", event, variables, from, to)

    return res.send("done")
})

export const notificationRouter = router