import { CookieJar } from "tough-cookie";
/**
 * Fetch a session to use with protected endpoints.
 * @param email
 * @param password
 */
export declare function fetchSession(email: string, password: string): Promise<CookieJar>;
