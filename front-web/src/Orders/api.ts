import axios from "axios";
import { OrderPayload } from "./types";

const API_URL = process.env.REACT_APP_API_URL;

const mapboxToken = process.env.REACT_APP_ACCESS_TOKEN_MAP_BOX;

export const fetchProducts = () => axios(`${API_URL}/products`);

export const fetchLocalMapBox = (local: string) => 
axios(`https://api.mapbox.com/geocoding/v5/mapbox.places/${local}.json?access_token=${mapboxToken}`);

export const saveOrder = (payload: OrderPayload) => axios.post(`${API_URL}/orders`, payload);