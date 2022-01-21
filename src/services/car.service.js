import axios from "axios";
import authHeader from "./auth-header";
const API_URL = "http://127.0.0.1:8000/api/car/";
class CarService {
  getHeader() {
    return authHeader();
  }

  getAll(params) {
    let config = {
      headers: this.getHeader(),
      params: params
    }

    return axios
      .get(API_URL + 'getAll', config)
      .then((response) => {
        if (response.data) {
          return response.data;
        }
        return null;
      })
      .catch((error) => {
        console.log("error get all car ", error);
      });
  }
}

export default new CarService();
