const { sms } = require("./sms")
const { notificationQueue } = require("./queue")

const channels = {
    sms
}

export const producer = (channel, event, variables, from, to) => {
    const channel = channels[channel]

    if(!channel.variablesValidator(event, variables)) {
        throw Error("Proper Variables not found!!")
    }

    const { template, retry } = channel.fillVariables(templateId, variables)


    // Add into the queue, Consumer
    const data = { template, from, to, send: channel.send }
    const option = { retry, removeOnFail: false }
    notificationQueue.add(data, option)

    return true
}
