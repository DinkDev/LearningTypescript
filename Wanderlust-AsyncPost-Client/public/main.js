//import * as $ from 'jquery';
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
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
define(["require", "exports", "./helpers"], function (require, exports, helpers_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    // Foursquare API Info
    var clientId = 'IGW2XAUOGLIHPKW0B3TXANZQR01QPR3NFIUBJZKLOJLGJMBA';
    var clientSecret = 'H1S4E5BRBVGXTOS3P1SWPA0SGAVGWNFLGTFWR1XB3YC3G3UF';
    var url = 'https://api.foursquare.com/v2/venues/explore?near=';
    // APIXU Info
    var apiKey = '02024ecebeff4f3b8a7132832181611';
    var forecastUrl = 'https://api.apixu.com/v1/forecast.json?key=';
    // Page Elements
    var $input = $('#city');
    var $submit = $('#button');
    var $destination = $('#destination');
    var $container = $('.container');
    var $venueDivs = [$("#venue1"), $("#venue2"), $("#venue3"), $("#venue4")];
    var $weatherDivs = [$("#weather1"), $("#weather2"), $("#weather3"), $("#weather4")];
    var weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    // Add AJAX functions here:
    function getVenues() {
        return __awaiter(this, void 0, void 0, function () {
            var city, urlToFetch, response, jsonResponse, venues, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        city = $input.val();
                        urlToFetch = "" + url + city + "&limit=10&client_id=" + clientId + "&client_secret=" + clientSecret + "&v=20181116";
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 5, , 6]);
                        return [4 /*yield*/, fetch(urlToFetch)];
                    case 2:
                        response = _a.sent();
                        if (!response.ok) return [3 /*break*/, 4];
                        return [4 /*yield*/, response.json()];
                    case 3:
                        jsonResponse = _a.sent();
                        venues = jsonResponse.response.groups[0].items.map(function (location) { return location.venue; });
                        console.log(venues);
                        return [2 /*return*/, venues];
                    case 4: return [3 /*break*/, 6];
                    case 5:
                        error_1 = _a.sent();
                        console.log(error_1);
                        return [3 /*break*/, 6];
                    case 6: return [2 /*return*/];
                }
            });
        });
    }
    function getForecast() {
        return __awaiter(this, void 0, void 0, function () {
            var urlToFetch, response, jsonResponse, days, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        urlToFetch = "" + forecastUrl + apiKey + "&q=" + $input.val() + "&days=4&hour=11";
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 5, , 6]);
                        return [4 /*yield*/, fetch(urlToFetch)];
                    case 2:
                        response = _a.sent();
                        if (!response.ok) return [3 /*break*/, 4];
                        return [4 /*yield*/, response.json()];
                    case 3:
                        jsonResponse = _a.sent();
                        console.log(jsonResponse);
                        days = jsonResponse.forecast.forecastday;
                        return [2 /*return*/, days];
                    case 4: return [3 /*break*/, 6];
                    case 5:
                        error_2 = _a.sent();
                        console.log(error_2);
                        return [3 /*break*/, 6];
                    case 6: return [2 /*return*/];
                }
            });
        });
    }
    // Render functions
    var renderVenues = function (venues) {
        $venueDivs.forEach(function ($venue, index) {
            // Add your code here:
            var venue = venues[index];
            var venueIcon = venue.categories[0].icon;
            var venueImgSrc = venueIcon.prefix + "bg_64" + venueIcon.suffix;
            var venueContent = helpers_1.createVenueHTML(venue.name, venue.location, venueImgSrc);
            $venue.append(venueContent);
        });
        $destination.append("<h2>" + venues[0].location.city + "</h2>");
    };
    var renderForecast = function (days) {
        $weatherDivs.forEach(function ($day, index) {
            // Add your code here:
            var currentDay = days[index];
            var weatherContent = helpers_1.createWeatherHTML(currentDay, weekDays);
            $day.append(weatherContent);
        });
    };
    var executeSearch = function () {
        $venueDivs.forEach(function (venue) { return venue.empty(); });
        $weatherDivs.forEach(function (day) { return day.empty(); });
        $destination.empty();
        $container.css("visibility", "visible");
        getVenues().then(function (venues) { return renderVenues(venues); });
        getForecast().then(function (days) { return renderForecast(days); });
        return false;
    };
    $submit.click(executeSearch);
});
//# sourceMappingURL=main.js.map