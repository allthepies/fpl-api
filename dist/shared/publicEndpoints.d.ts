import { Bootstrap, ClassicLeague, ElementSummary, Entry, EntryEvent, EntryHistory, EventStatus, Fixture, H2HLeague, H2HLeagueMatches, Live, TransferEntry } from "./types";
/**
 * Fetch bootstrap data for the official web app.
 * @return Static bootstrap data.
 */
export declare function fetchBootstrap(): Promise<Bootstrap>;
/**
 * Fetch data for an element.
 * @param elementId ID of a player.
 */
export declare function fetchElementSummary(elementId: number): Promise<ElementSummary>;
/**
 * Fetch entry event data (picks, transfers, etc.).
 * @param entryId ID of an entry team.
 * @param eventId ID of a gameweek.
 */
export declare function fetchEntryEvent(entryId: number, eventId: number): Promise<EntryEvent>;
/**
 * Fetch current event status.
 */
export declare function fetchEventStatus(): Promise<EventStatus>;
/**
 * Fetch all fixtures or for a specific event.
 * @param eventId ID of a gameweek.
 */
export declare function fetchFixtures(eventId?: number): Promise<Fixture[]>;
/**
 * Fetch live data for a gameweek.
 * @param eventId ID of a gameweek.
 */
export declare function fetchLive(eventId: number): Promise<Live>;
/**
 * Fetch an entrys history.
 * @param entryId ID of an entry team.
 */
export declare function fetchEntryHistory(entryId: number): Promise<EntryHistory>;
/**
 * Fetch an entry.
 * @param entryId ID of an entry team.
 */
export declare function fetchEntry(entryId: number): Promise<Entry>;
/**
 * Fetch an entrys matches from a H2H league.
 * @param leagueId ID of the H2H league.
 * @param entryId ID of the entry whos matches should be fetched.
 * @param page Page number to fetch.
 */
export declare function fetchH2HMatches(leagueId: number, entryId: number, page?: number): Promise<H2HLeagueMatches>;
/**
 * Fetch H2H league standings page.
 * @param leagueId ID of a H2H league.
 * @param options Page options.
 * @param options.pageStandings Page number of standings.
 * @param options.pageNewEntries Page number of new entries.
 */
export declare function fetchH2HLeagueStandings(leagueId: number, { pageStandings, pageNewEntries }?: {
    pageStandings: number;
    pageNewEntries: number;
}): Promise<H2HLeague>;
/**
 * Fetch classic league standings page.
 * @param leagueId ID of a classic league.
 * @param options Page options.
 * @param options.pageStandings Page number of standings.
 * @param options.pageNewEntries Page number of new entries.
 * @param options.phase Phase ID.
 */
export declare function fetchClassicLeague(leagueId: number, { pageStandings, pageNewEntries, phase }?: {
    pageStandings: number;
    pageNewEntries: number;
    phase: number;
}): Promise<ClassicLeague>;
/**
 * Fetch all transfers for an entry.
 * @param entryId ID of an entry team.
 */
export declare function fetchEntryTransfers(entryId: number): Promise<TransferEntry[]>;
