// import framework from 'framework'; // this is the framework I use to communicate with the service
import Notifications, { notifications } from '../shared/Notifications.js';
import React, { Component } from 'react';


let baseUrl = 'http://192.168.1.150:6223/api/token';

export class PushNotificator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            token: ""
        }
    }


    componentDidMount() {
        baseUrl.requestPermissions()
            .then(() => console.log('granted'))
            .catch(() => console.log('notification permission rejected'));


        baseUrl.getToken().then(token => {
            console.log("TOKEN (getToken)", token);
            this.setState({ token: token });
        });

        this.notificationListener = baseUrl.on(baseUrlEvent.Notification, notif => {
            console.log("Notification", notif);
            this.showLocalNotification(notif);
        })
    }

    showLocalNotification(notif) {
        notifications.push(notif); // this fails because Notifications is undefined
        baseUrl.presentLocalNotification({
            title: notif.title,
            body: notif.body,
            priority: "high",
            click_action: notif.click_action,
            show_in_foreground: true,
            local: true
        });
    }

    componentWillUnmount() {
        this.notificationListener.remove();
    }


    render() {
        return null;
    }
}
export default notifications;