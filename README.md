HttpPosterAndroidPlugin
=======================

Plug in to make http get requests, getting back the content and the cookies

Go to your cordova project home directory and add your plugin as usual:
cordova plugin add https://github.com/teresillaja/HttpPosterAndroidPlugin.git

call the plugin from your code:
create an array that contains the url, the header and the type (the type is a callback values that the native function will return)
 var json= {                 
                "url": url,
                "headers": headers,
                "type": type
            };
            //var test;
             httprequest.makeRequest(json, successCallBack, errorCallback);
