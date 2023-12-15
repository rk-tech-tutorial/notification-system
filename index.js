import express from "express";

const app = express()

const port = 3000
app.listen(port, () => {
    console.info(`Application is started on port ${port}`)
})