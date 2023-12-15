import { smsTemplates } from "../cms/smsTemplates"
import _ from "lodash"

export const sms = {
    get: (templateId) => {
        return smsTemplates[templateId]
    },
    variablesValidator: (templateId, variables) => {
        const { template } = this.get(templateId);

        // extract variables from above text
        return true // || false
    },
    fillVariables: (templateId, variables) => {
        const { template, retry } = this.get(templateId)

        const filledTemplate = _.template(template, variables)

        return {
            template: filledTemplate,
            retry
        }
    },
    send: (template, from, to) => {
        return true
    }
}