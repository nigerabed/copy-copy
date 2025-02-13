
import { NextResponse } from "next/server"

export async function serverFetch(url) {
	try {
		const response = await fetch(url)
		console.log("response", response.status);
		
		return await response.json()
	} catch (error) {
		throw new Error(error)
	}
}

// serverFetchWithAuth this function fetch data with api and token ( jeg har brught den function i tilmeld activityDetails fordi skal jeg brug user api med token)
export async function serverFetchWithAuth(url, token) {

	try {
		const response = await fetch(url,{
			"headers": {
              "Authorization":  "Bearer " + token,
              "content-type": "application/json"
            }
		})
		//if token expiries server response status code 500.
		if (response.status === 500) {
			// Redirect to login page
			return NextResponse.redirect(new URL("/login", request.url))
			 
		  }
		return await response.json()
	} catch (error) {
 		throw new Error(error)
	}
}