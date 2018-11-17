define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.createVenueHTML = function (name, location, iconSource) {
        return "<h2>" + name + "</h2>\n  <img class=\"venueimage\" src=\"" + iconSource + "\"/>\n  <h3>Address:</h3>\n  <p>" + location.address + "</p>\n  <p>" + location.city + "</p>\n  <p>" + location.country + "</p>";
    };
    exports.createWeatherHTML = function (currentDay, weekDays) {
        return "<h2> High: " + currentDay.day.maxtemp_f + "</h2>\n    <h2> Low: " + currentDay.day.mintemp_f + "</h2>\n    <img src=\"https://" + currentDay.day.condition.icon + "\" class=\"weathericon\" />\n    <h2>" + weekDays[(new Date(currentDay.date)).getDay()] + "</h2>";
    };
});
//# sourceMappingURL=helpers.js.map