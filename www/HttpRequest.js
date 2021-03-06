var httprequest = {
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
module.exports = httprequest;
