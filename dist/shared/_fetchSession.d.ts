import { CookieJar } from "tough-cookie";
/**
 * Fetch a session to use with protected endpoints.
 * @param email
 * @param password
 */
export declare function _fetchSession(FormData: new () => any, fetchCookie: <T extends Function>(fetch: T, jar?: CookieJar) => T, email: string, password: string): Promise<CookieJar>;
