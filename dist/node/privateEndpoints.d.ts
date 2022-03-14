import { CookieJar } from "tough-cookie";
import { Me, MyTeam } from "../shared/types";
/**
 * Remove a player from the current users watchlist.
 * @see {@link fetchSession}
 * @param session
 * @param elementCode
 */
export declare function removeFromWatchList(session: CookieJar, elementCode: number): Promise<boolean>;
/**
 * Add a player to current users watchlist.
 * @see {@link fetchSession}
 * @param session
 * @param elementCode
 */
export declare function addToWatchList(session: CookieJar, elementCode: number): Promise<boolean>;
/**
 * Fetch the team of current user.
 * @see {@link fetchSession}
 * @param session
 * @param entryId
 */
export declare function fetchMyTeam(session: CookieJar, entryId: number): Promise<MyTeam>;
/**
 * Fetch current user.
 * @see {@link fetchSession}
 * @param session
 */
export declare function fetchCurrentUser(session: CookieJar): Promise<Me>;
