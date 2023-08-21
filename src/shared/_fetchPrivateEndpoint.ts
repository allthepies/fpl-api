import fetch from "cross-fetch";

import { CookieJar } from "tough-cookie";

/**
 * Fetch a private endpoint.
 * @param fetchCookie Instance of fetch-cookie to use.
 * @param session CookieJar with authorized pl_profile cookie.
 * @param endpoint The endpoint to fetch.
 * @param init Fetch options.
 * @see fetchSession
 * @private
 */
export async function _fetchPrivateEndpoint(
  fetchCookie: <T extends Function>(fetch: T, jar?: CookieJar) => T,
  session: CookieJar,
  endpoint: string,
  init?: RequestInit
): Promise<Response> {
  const fetchWithCookies = fetchCookie(fetch, session);
  console.log ( "options: %j", init)
  const response = await fetchWithCookies(
    endpoint,
    Object.assign(
      {
        //"User-Agentz": "fpl-api",
      },
      init
    )
  );

  console.log ( "response status", response.status);
  console.log ( "response status text", response.statusText);
  console.log ( "response body", response.body);
  
  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return response;
}
