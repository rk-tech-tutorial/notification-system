const { notificationQueue } = require("../queue")


notificationQueue.process(1, async (job, done) => {
    try {
        const { data: { from, to, template, send } } = job

        await send(template, from, to)

        done(null, "Done")

    } catch (err) {
        done(err, null)
    }
})