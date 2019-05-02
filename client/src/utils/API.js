import axios from "axios";

export default {
    createUser: function (userData) {
        return axios.post("/api", userData)
    },
    loginUser: function (userData) {
        return axios.post("/api/login", userData)
    }
}