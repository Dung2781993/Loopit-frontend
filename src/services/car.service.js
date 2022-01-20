import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://127.0.0.1:8000/api/car/";

class CarService {
  getAll(params) {
    console.log('Hellomama Car service');
    let header = authHeader();
    return axios
      .get(API_URL + 'getAll',  { params:  params }, { headers: header})
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log("error get all car ", error);
      });
  }
}

export default new CarService();
