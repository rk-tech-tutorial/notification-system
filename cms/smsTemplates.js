// This is sample scholarship template. This must come from database
export const smsTemplates = {
    scholarship: {
        template: "Congratulations <%= name %>, you have earned <%= percentage %> scholarship on our Job Assured Learning Path. Book your Free 1:1 Counselling Session: <%= link %>",
        priority: 1, // This Priority will decide, how important is to send this notification
        retry: 1
    }
}