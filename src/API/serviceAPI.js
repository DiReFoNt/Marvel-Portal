import axios from "axios";
import { publicKey } from "./keyAPI";

export default class ServiceAPI {
    static async getAll(limit) {
        try {
            const response = await axios.get(
                `https://gateway.marvel.com:443/v1/public/characters?limit=${limit}&offset=150&apikey=` +
                    publicKey
            );

            return response.data.data;
        } catch (e) {
            console.log(e);
        }
    }
}
