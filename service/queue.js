import Bull from "bull"

export const notificationQueue = new Bull("notificationQueue");

