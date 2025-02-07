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
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
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
exports.makeTeamLineup = exports.makeTeamTransfer = exports.fetchCurrentUser = exports.fetchCurrentTransfers = exports.fetchMyTeam = exports.addToWatchList = exports.removeFromWatchList = void 0;
var fetchPrivateEndpoint_1 = require("./fetchPrivateEndpoint");
/**
 * Remove a player from the current users watchlist.
 * @see {@link fetchSession}
 * @param session
 * @param elementCode
 */
function removeFromWatchList(session, elementCode) {
    return __awaiter(this, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, fetchPrivateEndpoint_1.fetchPrivateEndpoint)(session, "https://fantasy.premierleague.com/api/watchlist/".concat(elementCode, "/"), {
                        method: "DELETE"
                    })];
                case 1:
                    response = _a.sent();
                    return [2 /*return*/, response.status === 204];
            }
        });
    });
}
exports.removeFromWatchList = removeFromWatchList;
/**
 * Add a player to current users watchlist.
 * @see {@link fetchSession}
 * @param session
 * @param elementCode
 */
function addToWatchList(session, elementCode) {
    return __awaiter(this, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, fetchPrivateEndpoint_1.fetchPrivateEndpoint)(session, "https://fantasy.premierleague.com/api/watchlist/".concat(elementCode, "/"), {
                        method: "POST"
                    })];
                case 1:
                    response = _a.sent();
                    return [2 /*return*/, response.status === 201];
            }
        });
    });
}
exports.addToWatchList = addToWatchList;
/**
 * Fetch the team of current user.
 * @see {@link fetchSession}
 * @param session
 * @param entryId
 */
function fetchMyTeam(session, entryId) {
    return __awaiter(this, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, fetchPrivateEndpoint_1.fetchPrivateEndpoint)(session, "https://fantasy.premierleague.com/api/my-team/".concat(entryId, "/"))];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
exports.fetchMyTeam = fetchMyTeam;
/**
 * Fetch the gameweek transfers of current user.
 * @see {@link fetchSession}
 * @param session
 * @param entryId
 */
function fetchCurrentTransfers(session, entryId) {
    return __awaiter(this, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, fetchPrivateEndpoint_1.fetchPrivateEndpoint)(session, "https://fantasy.premierleague.com/api/entry/".concat(entryId, "/transfers-latest/"))];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
exports.fetchCurrentTransfers = fetchCurrentTransfers;
/**
 * Fetch current user.
 * @see {@link fetchSession}
 * @param session
 */
function fetchCurrentUser(session) {
    return __awaiter(this, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, fetchPrivateEndpoint_1.fetchPrivateEndpoint)(session, "https://fantasy.premierleague.com/api/me/")];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
exports.fetchCurrentUser = fetchCurrentUser;
/**
 * Make transfers for the current user.
 * @see {@link fetchSession}
 * @param session
 * @param transfers
 */
function makeTeamTransfer(session, transfers) {
    return __awaiter(this, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, fetchPrivateEndpoint_1.fetchPrivateEndpoint)(session, "https://fantasy.premierleague.com/api/transfers/", {
                        method: "POST",
                        body: JSON.stringify(transfers),
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    })];
                case 1:
                    response = _a.sent();
                    return [2 /*return*/, response.status === 200];
            }
        });
    });
}
exports.makeTeamTransfer = makeTeamTransfer;
/**
 * Set the gameweek lineup of current user.
 * @see {@link fetchSession}
 * @param session
 * @param transfers
 */
function makeTeamLineup(session, entryId, lineup) {
    return __awaiter(this, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, fetchPrivateEndpoint_1.fetchPrivateEndpoint)(session, "https://fantasy.premierleague.com/api/my-team/".concat(entryId, "/"), {
                        method: "POST",
                        body: JSON.stringify(lineup),
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    })];
                case 1:
                    response = _a.sent();
                    return [2 /*return*/, response.status === 200];
            }
        });
    });
}
exports.makeTeamLineup = makeTeamLineup;
//# sourceMappingURL=privateEndpoints.js.map