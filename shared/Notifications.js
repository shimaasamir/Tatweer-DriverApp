class Notifications {
    constructor() {
        this.notifications = [];
    }

    receiveNotification(notif) {
        this.notifications.push(notif);
    }
}

let notifications = new Notifications();

export default notifications;