import axios from "axios";

const API_URL = "http://127.0.0.1:8000/api/auth";

class AuthService {
  login(user) {
    return axios
      .post(API_URL + "signin", {
        username: user.username,
        password: user.password,
      })
      .then((response) => {
        if (response.data.accessToken) {
          localStorage.setItem("token", JSON.stringify(response.data.access_token));
        }

        return response.data;
      });
  }

  logout() {
    localStorage.removeItem("token");
  }

  register(user) {
    return axios.post(API_URL + "signup", {
      email: user.email,
      password: user.password,
    });
  }
}

export default new AuthService();
