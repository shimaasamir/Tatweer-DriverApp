
export class ApiManager {


    static call = (apiURL, method, data, callback) => {

        const baseUrl = 'http://192.168.1.150:6223/api/' + apiURL;
        fetch(baseUrl, {
            method: method,
            headers: {
                'Authorization': 'Bearer ' + global.token,
                'Content-Type': 'application/json'
            },
            body: data
        }).then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson)
                callback(responseJson);
            }).done();
    };


    static callForm = (apiURL, method, data, callback) => {
        const baseUrl = 'http://192.168.1.150:6223/api/' + apiURL;

        let formBody = [];
        for (let property in details) {
            let encodedKey = encodeURIComponent(property);
            let encodedValue = encodeURIComponent(details[property]);
            formBody.push(encodedKey + "=" + encodedValue);
        }
        formBody = formBody.join("&");
        fetch(baseUrl, {
            method: method,
            headers: {
                'Authorization': 'Bearer ' + global.token,
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: formBody
        }).then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson)
                callback(responseJson);
            }).done();
    }
};