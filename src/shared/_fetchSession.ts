import { fetch } from "cross-fetch";

import { CookieJar } from "tough-cookie";

/**
 * Fetch a session to use with protected endpoints.
 * @param email
 * @param password
 */
export async function _fetchSession(
  FormData: new () => any,
  fetchCookie: <T extends Function>(fetch: T, jar?: CookieJar) => T,
  email: string,
  password: string
): Promise<CookieJar> {
  try {
    const cookieJar = new CookieJar();
    const fetchWithCookies = fetchCookie(fetch, cookieJar);
    const formData = new FormData();
    let response;

    formData.append("login", email);
    formData.append("password", password);
    formData.append("app", "plfpl-web");
    formData.append(
      "redirect_uri",
      "https://fantasy.premierleague.com/"
    );

    response = await fetchWithCookies(
      "https://users.premierleague.com/accounts/login/",
      {
        method: "POST",
        body: formData,
        headers: {
          //"User-Agent": "fpl-api",
          Origin: "https://fantasy.premierleague.com",
          Referer: "https://fantasy.premierleague.com/",
          "User-Agent" : "Dalvik/2.1.0 (Linux; U; Android 5.1; PRO 5 Build/LMY47D)"
        },
      }
    );

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    if (
      !cookieJar
        .getCookieStringSync("https://premierleague.com")
        .includes("pl_profile")
    ) {
      throw new Error("Unauthorized");
    }

    return cookieJar;
  } catch (error) {
    throw error;
  }
}
