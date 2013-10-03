var cinedayAndroid = {
    createEvent: function(json,successCallback, errorCallback) {
 			cordova.exec(
            successCallback, // success callback function
            errorCallback, // error callback function
            'HttpRequest', // mapped to our native Java class called "HttpRequest"
            'makeRequest', // with this action name
            [json]           // and this array of custom arguments to create our entry
                
    }
}
module.exports = cinedayAndroid;