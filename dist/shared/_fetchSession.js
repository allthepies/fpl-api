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
exports._fetchSession = void 0;
var cross_fetch_1 = require("cross-fetch");
var tough_cookie_1 = require("tough-cookie");
/**
 * Fetch a session to use with protected endpoints.
 * @param email
 * @param password
 */
function _fetchSession(FormData, fetchCookie, email, password) {
    return __awaiter(this, void 0, void 0, function () {
        var cookieJar, c1, c2, fetchWithCookies, formData, response, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 4, , 5]);
                    cookieJar = new tough_cookie_1.CookieJar();
                    c1 = tough_cookie_1.Cookie.parse("datadome=; Domain=.premierleague.com; Path=/");
                    return [4 /*yield*/, cookieJar.setCookie(c1 || '', "https://fantasy.premierleague.com/a/login")];
                case 1:
                    _a.sent();
                    c2 = tough_cookie_1.Cookie.parse("pl_profile=; Domain=premierleague.com; Path=/; HttpOnly");
                    return [4 /*yield*/, cookieJar.setCookie(c2 || '', "https://fantasy.premierleague.com/a/login")];
                case 2:
                    _a.sent();
                    fetchWithCookies = fetchCookie(cross_fetch_1.fetch, cookieJar);
                    formData = new FormData();
                    response = void 0;
                    formData.append("login", email);
                    formData.append("password", password);
                    formData.append("app", "plfpl-web");
                    formData.append("redirect_uri", "https://fantasy.premierleague.com/a/login");
                    return [4 /*yield*/, fetchWithCookies("https://users.premierleague.com/accounts/login/", {
                            method: "POST",
                            body: formData,
                            headers: {
                                //"User-Agent": "fpl-api",
                                // Origin: "https://fantasy.premierleague.com",
                                // Referer: "https://fantasy.premierleague.com/",
                                "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36"
                            }
                        })];
                case 3:
                    response = _a.sent();
                    if (!response.ok) {
                        throw new Error(response.statusText);
                    }
                    if (!cookieJar
                        .getCookieStringSync("https://premierleague.com")
                        .includes("pl_profile")) {
                        throw new Error("Unauthorized");
                    }
                    return [2 /*return*/, cookieJar];
                case 4:
                    error_1 = _a.sent();
                    throw error_1;
                case 5: return [2 /*return*/];
            }
        });
    });
}
exports._fetchSession = _fetchSession;
//# sourceMappingURL=_fetchSession.js.map