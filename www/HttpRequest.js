cordova.define("com.orange.labs.plugins.httprequest.HttpRequest", function(require, exports, module) {var cinedayAndroid = {
    makeRequest: function(json,successCallback, errorCallback) {
 			cordova.exec(
            // success callback function
             function(resp) {
            	successCallback(resp);
       		 },
       		 function(resp){
       		 	errorCallback(resp);
       		 }, // error callback function
            'HttpRequest', // mapped to our native Java class called "HttpRequest"
            'makeRequest', // with this action name
            [json]           // and this array of custom arguments to create our entry
            );    
    }
}
module.exports = cinedayAndroid;});
