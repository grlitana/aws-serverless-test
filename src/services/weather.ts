// import * as moment from 'moment';
import { HttpClient } from "./../utils";

export const getWeather = async (payload: any): Promise<any> => {
  console.log(payload)
  const postCode = payload.postCode;
  const countryCode = payload.countryCode;
  const apiKey = payload.apiKey;

  const url = 'https://api.openweathermap.org/data/2.5/weather';

  try {
    const client = new HttpClient(url) ;
    const params = {
      zip: `${postCode},${countryCode}`,
      units: 'metric',
      appid: apiKey,
    }
    const weatherData = await client.get(url, params);

    const weatherObj = {
      lon: weatherData.coord.lon,
      lat: weatherData.coord.lat,
      main: weatherData.weather[0].main,
      description: weatherData.main[0].description,
      temp: weatherData.main.temp,
      feels_like: weatherData.main.feels_like,
      temp_min: weatherData.main.temp_min,
      temp_max: weatherData.main.temp_max,
      pressure: weatherData.main.pressure,
      humidity: weatherData.main.humidity,
    }

    return weatherObj;
  }
  catch (error) {
    console.log(error);
    return {
      statusCode: 500,
      body: JSON.stringify(error)
    };
  }
};
