import axios from "axios"

axios.defaults.baseURL = "http://142.93.246.144"

export const api = {
    fetchProducts: async () => {
        return axios.get("/products")
            .then(res => res.data);
    }
}