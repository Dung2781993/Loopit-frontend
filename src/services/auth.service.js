import axios from "axios";
import apiService from "./api.service";

const API_URL = apiService() + "api/auth/";

class AuthService {
  login(user) {
    return axios
      .post(API_URL + "login", {
        email: user.email,
        password: user.password,
      })
      .then((response) => {
        if (response.data) {
          localStorage.setItem("token", JSON.stringify(response.data.access_token)); 
          localStorage.setItem("user", JSON.stringify(response.data)); 
        }
        return response.data;
      })
      .catch((error) => {
        console.log('error login account ', error);
      });
  }

  logout() {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
  }

  register(user) {
    return axios
      .post(API_URL + "signup", {
        email: user.email,
        password: user.password,
      })
      .catch((error) => {
        console.log('error register account', error);
      });
  }
}

export default new AuthService();
