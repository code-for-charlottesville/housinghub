
/**
 * makes POST request to /auth/login with username and password
 **/
export function postAuthLogin({username, password}) {
	// TODO make post request
	if ((Math.random() * 2) > 1) {
		return Promise.resolve({
  			"jwt": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1ODU0Mjk3NjUsInVpZCI6ImI0OTM1OGZjLTcxMzctMTFlYS1iZDRmLWU0NzBiOGI2MTY4MyIsIm5hbWUiOiJkYXZpZCBnb2xkc3RlaW4ifQ.q6p91KS8iOme-K5baVlVSFBPW8K0kjdSJZ-IWSOF-cw"
		})
	} else {
		return Promise.resolve({
			"code": 500,
			"error": "Internal server error"
		})
	}
}