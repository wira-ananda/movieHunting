const env = require("dotenv");
env.config();

import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASEURL,
});

export const apiKey = process.env.NEXT_PUBLIC_APIKEY;

export const imgUrl = process.env.NEXT_PUBLIC_IMGURL;
