
const api_key = 'ea87f8a4b6a5fd47634922261a66b419';
const api1_url = `http://api.openweathermap.org/data/2.5/weather?q=Mumbai&APPID=${api_key}&units=metric`;
const api2_url = `http://api.openweathermap.org/data/2.5/forecast?q=Mumbai&APPID=${api_key}&units=metric`;
const img_url = 'http://openweathermap.org/img/wn/';


const getWeather = (url) => {
    return new Promise((resolve, reject) => {
        fetch(url)
            .then(response => response.json())
            .then(result => {
                resolve({
                    main: result.main.temp,
                    min: result.main.temp_min,
                    max: result.main.temp_max,
                    place: result.name,
                    weather_status: result.weather[0].main,
                    icon: `${img_url}${result.weather[0].icon}@2x.png`,
                })
            }).catch(err => {
                console.log(err);
            })

    })
}

const getForecast = (url) => {
    return new Promise((resolve, reject) => {
        fetch(url)
            .then(response => response.json())
            .then(result => {
                console.log(result);
                let tempArray = [];
                result.list.map(day => {
                    tempArray.push({
                        date: day.dt_txt.slice(11,day.dt_txt.length),
                        main: day.main.temp,
                        min: day.main.temp_min,
                        max: day.main.temp_max,
                        weather_status: day.weather[0].main,
                        icon: `${img_url}${day.weather[0].icon}@2x.png`,
                    })
                })
                resolve(tempArray);
            }).catch(err => {
                console.log(err);
            })
    })
}


export default class WeatherService {
    getCurrentWeather = () => {
        return getWeather(api1_url);
    }

    getForecastWeather = () => {
        return getForecast(api2_url);
    }
}

