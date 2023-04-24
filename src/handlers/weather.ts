import { returnResponse } from "./return";
import { getWeather } from "./../services";

export const myhandler = async (event) => {
  const payload = event;
  const response = getWeather(payload);
  return returnResponse(response);
}

export const handler = myhandler;
