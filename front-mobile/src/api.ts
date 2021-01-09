import axios from "axios";

const API_URL = 'https://lucas-sds2.herokuapp.com';

export const fetchOrders = () => axios(`${API_URL}/orders`);

export const confirmDelivery = (id: number) => axios.put(`${API_URL}/orders/${id}/delivered`);