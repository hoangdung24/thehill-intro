import axios from "axios";
import { DOMAIN } from "./helpers/api";

// const instance = axios.create({
// 	baseURL: DOMAIN,
// });
axios.defaults.baseURL = DOMAIN;
