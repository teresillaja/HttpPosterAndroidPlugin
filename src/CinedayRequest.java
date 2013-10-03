import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaPlugin;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

public class CinedayRequest extends CordovaPlugin {
	public static final String ACTION_MAKE_REQUEST_ENTRY = "makeRequest";
	CallbackContext generalCallback;

	@Override
	public boolean execute(String action, JSONArray args,
			CallbackContext callbackContext) throws JSONException {
		try {
			if (ACTION_MAKE_REQUEST_ENTRY.equals(action)) {
				//log.d("---ANDROID PLUG IN", args.toString());
				JSONObject arg_object = args.getJSONObject(0);
				generalCallback = callbackContext;
			
				
				callbackContext.success("I AM COMING HERE");
				return true;
			}
			callbackContext.error("Invalid action");
			return false;
		} catch (Exception e) {
			System.err.println("Exception: " + e.getMessage());
			callbackContext.error(e.getMessage());
			return false;
		}

	}
}
