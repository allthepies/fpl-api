import { CookieJar } from "tough-cookie";
import { Me, MyTeam, CurrentTeamTransfers, TeamTransfers, TeamLineup } from "../shared/types";
import { fetchPrivateEndpoint } from "./fetchPrivateEndpoint";

/**
 * Remove a player from the current users watchlist.
 * @see {@link fetchSession}
 * @param session
 * @param elementCode
 */
export async function removeFromWatchList(
  session: CookieJar,
  elementCode: number
): Promise<boolean> {
  const response = await fetchPrivateEndpoint(
    session,
    `https://fantasy.premierleague.com/api/watchlist/${elementCode}/`,
    {
      method: "DELETE",
    }
  );

  return response.status === 204;
}

/**
 * Add a player to current users watchlist.
 * @see {@link fetchSession}
 * @param session
 * @param elementCode
 */
export async function addToWatchList(
  session: CookieJar,
  elementCode: number
): Promise<boolean> {
  const response = await fetchPrivateEndpoint(
    session,
    `https://fantasy.premierleague.com/api/watchlist/${elementCode}/`,
    {
      method: "POST",
    }
  );

  return response.status === 201;
}

/**
 * Fetch the team of current user.
 * @see {@link fetchSession}
 * @param session
 * @param entryId
 */
export async function fetchMyTeam(
  session: CookieJar,
  entryId: number
): Promise<MyTeam> {
  const response = await fetchPrivateEndpoint(
    session,
    `https://fantasy.premierleague.com/api/my-team/${entryId}/`
  );

  return await response.json();
}

/**
 * Fetch the gameweek transfers of current user.
 * @see {@link fetchSession}
 * @param session
 * @param entryId
 */
export async function fetchCurrentTransfers(
  session: CookieJar,
  entryId: number
): Promise<CurrentTeamTransfers> {
  const response = await fetchPrivateEndpoint(
    session,
    `https://fantasy.premierleague.com/api/entry/${entryId}/transfers-latest/`
  );

  return await response.json();
}

/**
 * Fetch current user.
 * @see {@link fetchSession}
 * @param session
 */
export async function fetchCurrentUser(session: CookieJar): Promise<Me> {
  const response = await fetchPrivateEndpoint(
    session,
    "https://fantasy.premierleague.com/api/me/"
  );

  return await response.json();
}

/**
 * Make transfers for the current user.
 * @see {@link fetchSession}
 * @param session
 * @param transfers
 */
export async function makeTeamTransfer(
  session: CookieJar,
  transfers: TeamTransfers
): Promise<Boolean> {

  const response = await fetchPrivateEndpoint(
    session,
    `https://fantasy.premierleague.com/api/transfers/`,
    {
      method: "POST",
      body: JSON.stringify(transfers),
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );

  return response.status === 200;

}


/**
 * Set the gameweek lineup of current user.
 * @see {@link fetchSession}
 * @param session
 * @param transfers
 */
export async function makeTeamLineup(
  session: CookieJar,
  entryId: number,
  lineup: TeamLineup
): Promise<Boolean> {

  const response = await fetchPrivateEndpoint(
    session,
    `https://fantasy.premierleague.com/api/my-team/${entryId}/`,
    {
      method: "POST",
      body: JSON.stringify(lineup),
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );

  return response.status === 200;
}
