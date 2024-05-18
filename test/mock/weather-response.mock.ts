import { WeatherDatas } from "src/app/models/interfaces/i-WeatherDatas"

export const mockResponseWeatherDatas: WeatherDatas = {
    coord: {
        lon: 10,
        lat: 20,
    },

    weather: [
        {
            id: 1,
            main: 'string',
            description: 'string',
            icon: 'string',
        },
    ],

    base: 'string',
    main: {
        temp: 1,
        feels_like: 1,
        temp_min: 1,
        temp_max: 1,
        pressure: 1,
        humidity: 1,
    },
    visibility: 1,
    wind: {
        speed: 1,
        deg: 1,
    },
    clouds: {
        all: 1,
    },
    dt: 1,
    sys: {
        type: 1,
        id: 1,
        country: 'string',
        sunrise: 1,
        sunset: 1,
    },
    timezone: 1,
    id: 1,
    name: 'string',
    cod: 1,

}