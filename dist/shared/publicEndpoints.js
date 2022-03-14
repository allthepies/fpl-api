"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.fetchEntryTransfers = exports.fetchClassicLeague = exports.fetchH2HLeagueStandings = exports.fetchH2HMatches = exports.fetchEntry = exports.fetchEntryHistory = exports.fetchLive = exports.fetchFixtures = exports.fetchEventStatus = exports.fetchEntryEvent = exports.fetchElementSummary = exports.fetchBootstrap = void 0;
var fetchPublicEndpoint_1 = require("./fetchPublicEndpoint");
/**
 * Fetch bootstrap data for the official web app.
 * @return Static bootstrap data.
 */
function fetchBootstrap() {
    return __awaiter(this, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, fetchPublicEndpoint_1.fetchPublicEndpoint)("https://fantasy.premierleague.com/api/bootstrap-static/")];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
exports.fetchBootstrap = fetchBootstrap;
/**
 * Fetch data for an element.
 * @param elementId ID of a player.
 */
function fetchElementSummary(elementId) {
    return __awaiter(this, void 0, void 0, function () {
        var response, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, fetchPublicEndpoint_1.fetchPublicEndpoint)("https://fantasy.premierleague.com/api/element-summary/" + elementId + "/")];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    data.id = elementId;
                    return [2 /*return*/, data];
            }
        });
    });
}
exports.fetchElementSummary = fetchElementSummary;
/**
 * Fetch entry event data (picks, transfers, etc.).
 * @param entryId ID of an entry team.
 * @param eventId ID of a gameweek.
 */
function fetchEntryEvent(entryId, eventId) {
    return __awaiter(this, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, fetchPublicEndpoint_1.fetchPublicEndpoint)("https://fantasy.premierleague.com/api/entry/" + entryId + "/event/" + eventId + "/picks/")];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
exports.fetchEntryEvent = fetchEntryEvent;
/**
 * Fetch current event status.
 */
function fetchEventStatus() {
    return __awaiter(this, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, fetchPublicEndpoint_1.fetchPublicEndpoint)("https://fantasy.premierleague.com/api/event-status")];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
exports.fetchEventStatus = fetchEventStatus;
/**
 * Fetch all fixtures or for a specific event.
 * @param eventId ID of a gameweek.
 */
function fetchFixtures(eventId) {
    return __awaiter(this, void 0, void 0, function () {
        var query, response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    query = eventId !== undefined ? "?event=" + eventId : "";
                    return [4 /*yield*/, (0, fetchPublicEndpoint_1.fetchPublicEndpoint)("https://fantasy.premierleague.com/api/fixtures" + query)];
                case 1:
                    response = _a.sent();
                    return [2 /*return*/, response.json()];
            }
        });
    });
}
exports.fetchFixtures = fetchFixtures;
/**
 * Fetch live data for a gameweek.
 * @param eventId ID of a gameweek.
 */
function fetchLive(eventId) {
    return __awaiter(this, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, fetchPublicEndpoint_1.fetchPublicEndpoint)("https://fantasy.premierleague.com/api/event/" + eventId + "/live/")];
                case 1:
                    response = _a.sent();
                    return [2 /*return*/, response.json()];
            }
        });
    });
}
exports.fetchLive = fetchLive;
/**
 * Fetch an entrys history.
 * @param entryId ID of an entry team.
 */
function fetchEntryHistory(entryId) {
    return __awaiter(this, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, fetchPublicEndpoint_1.fetchPublicEndpoint)("https://fantasy.premierleague.com/api/entry/" + entryId + "/history/")];
                case 1:
                    response = _a.sent();
                    return [2 /*return*/, response.json()];
            }
        });
    });
}
exports.fetchEntryHistory = fetchEntryHistory;
/**
 * Fetch an entry.
 * @param entryId ID of an entry team.
 */
function fetchEntry(entryId) {
    return __awaiter(this, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, fetchPublicEndpoint_1.fetchPublicEndpoint)("https://fantasy.premierleague.com/api/entry/" + entryId + "/")];
                case 1:
                    response = _a.sent();
                    return [2 /*return*/, response.json()];
            }
        });
    });
}
exports.fetchEntry = fetchEntry;
/**
 * Fetch an entrys matches from a H2H league.
 * @param leagueId ID of the H2H league.
 * @param entryId ID of the entry whos matches should be fetched.
 * @param page Page number to fetch.
 */
function fetchH2HMatches(leagueId, entryId, page) {
    if (page === void 0) { page = 1; }
    return __awaiter(this, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, fetchPublicEndpoint_1.fetchPublicEndpoint)(
                    // tslint:disable-next-line
                    "https://fantasy.premierleague.com/api/leagues-h2h-matches/league/" + leagueId + "/?page=" + page + "&entry=" + entryId)];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
exports.fetchH2HMatches = fetchH2HMatches;
/**
 * Fetch H2H league standings page.
 * @param leagueId ID of a H2H league.
 * @param options Page options.
 * @param options.pageStandings Page number of standings.
 * @param options.pageNewEntries Page number of new entries.
 */
function fetchH2HLeagueStandings(leagueId, _a) {
    var _b = _a === void 0 ? {
        pageStandings: 1,
        pageNewEntries: 1
    } : _a, pageStandings = _b.pageStandings, pageNewEntries = _b.pageNewEntries;
    return __awaiter(this, void 0, void 0, function () {
        var response;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0: return [4 /*yield*/, (0, fetchPublicEndpoint_1.fetchPublicEndpoint)(
                    // tslint:disable-next-line
                    "https://fantasy.premierleague.com/api/leagues-h2h/" + leagueId + "/standings/?page_new_entries=" + pageNewEntries + "&page_standings=" + pageStandings)];
                case 1:
                    response = _c.sent();
                    return [4 /*yield*/, response.json()];
                case 2: return [2 /*return*/, _c.sent()];
            }
        });
    });
}
exports.fetchH2HLeagueStandings = fetchH2HLeagueStandings;
/**
 * Fetch classic league standings page.
 * @param leagueId ID of a classic league.
 * @param options Page options.
 * @param options.pageStandings Page number of standings.
 * @param options.pageNewEntries Page number of new entries.
 * @param options.phase Phase ID.
 */
function fetchClassicLeague(leagueId, _a) {
    var _b = _a === void 0 ? {
        pageStandings: 1,
        pageNewEntries: 1,
        phase: 1
    } : _a, pageStandings = _b.pageStandings, pageNewEntries = _b.pageNewEntries, phase = _b.phase;
    return __awaiter(this, void 0, void 0, function () {
        var response;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0: return [4 /*yield*/, (0, fetchPublicEndpoint_1.fetchPublicEndpoint)(
                    // tslint:disable-next-line
                    "https://fantasy.premierleague.com/api/leagues-classic/" + leagueId + "/standings/?page_new_entries=" + pageNewEntries + "&page_standings=" + pageStandings + "&phase=" + phase)];
                case 1:
                    response = _c.sent();
                    return [4 /*yield*/, response.json()];
                case 2: return [2 /*return*/, _c.sent()];
            }
        });
    });
}
exports.fetchClassicLeague = fetchClassicLeague;
/**
 * Fetch all transfers for an entry.
 * @param entryId ID of an entry team.
 */
function fetchEntryTransfers(entryId) {
    return __awaiter(this, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, fetchPublicEndpoint_1.fetchPublicEndpoint)("https://fantasy.premierleague.com/api/entry/" + entryId + "/transfers")];
                case 1:
                    response = _a.sent();
                    return [2 /*return*/, response.json()];
            }
        });
    });
}
exports.fetchEntryTransfers = fetchEntryTransfers;
//# sourceMappingURL=publicEndpoints.js.map