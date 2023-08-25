import { fetch } from "cross-fetch";

import { CookieJar } from "tough-cookie";


const getRandomElement = (arr: any[]) =>
  arr.length ? arr[Math.floor(Math.random() * arr.length)] : undefined


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

    const userAgents = [
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36",
      "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36",
      "Mozilla/5.0 (Windows NT 10.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36",
      "Mozilla/5.0 (Macintosh; Intel Mac OS X 13_5_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36",
      "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36",
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2311.135 Safari/537.36 Edge/12.246",
      "Mozilla/5.0 (X11; CrOS x86_64 8172.45.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.64 Safari/537.36",
      "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_2) AppleWebKit/601.3.9 (KHTML, like Gecko) Version/9.0.2 Safari/601.3.9"
    ];

    const userAgent = getRandomElement(userAgents);

    response = await fetchWithCookies(
      "https://users.premierleague.com/accounts/login/",
      {
        method: "POST",
        body: formData,
        headers: {
          //"User-Agent": "fpl-api",
          "Accept-Language": "en",
          Origin: "https://fantasy.premierleague.com",
          Referer: "https://fantasy.premierleague.com/",
          "User-Agent": userAgent
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
