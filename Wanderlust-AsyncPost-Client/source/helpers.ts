export const createVenueHTML = (name, location, iconSource) => {
  return `<h2>${name}</h2>
  <img class="venueimage" src="${iconSource}"/>
  <h3>Address:</h3>
  <p>${location.address}</p>
  <p>${location.city}</p>
  <p>${location.country}</p>`;
}
  
export const createWeatherHTML = (currentDay, weekDays) => {
  return `<h2> High: ${currentDay.day.maxtemp_f}</h2>
    <h2> Low: ${currentDay.day.mintemp_f}</h2>
    <h2> Sunrise: ${currentDay.astro.sunrise}</h2>
    <h2> Sunset: ${currentDay.astro.sunset}</h2>
    <h2> Currenty: ${currentDay.day.condition.text}</h2>
    <img src="https://${currentDay.day.condition.icon}" class="weathericon" />

    <h2>${weekDays[(new Date(currentDay.date)).getDay()]}</h2>`;
}
