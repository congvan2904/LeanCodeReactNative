const url = 'http://api.openweathermap.org/data/2.5/weather?appid=6013e297d5c92f03218a81fcbc683032&q=';
function getTemp(cityName) {
    return fetch(url + cityName)
        .then(res => res.json())
        .then(resJson => resJson.main.temp)
}
export default getTemp;