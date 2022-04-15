import axios from "axios";
import { DOMAIN } from "./helpers/api";

axios.defaults.baseURL = DOMAIN;
axios.defaults.headers.common["Authorization"] = process.env.NEXT_PUBLIC_API_KEY;
