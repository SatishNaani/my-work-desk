import axios, { AxiosRequestConfig } from 'axios';
import { trackPromise } from 'react-promise-tracker';

/**
 * @function createClient
 * Axios api to make api calls
 */
const processRequest = () => {
    // const env = process.env;
    const client = axios.create({
        baseURL: 'http://localhost:5000/',
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        }
    });

    client.interceptors.response.use(
        function (response) {
            if (response?.data?.message?.code === -1) {
                return Promise.reject({
                    message: response.data.message.text
                });
            } else {
                return response?.data ?? response;
            }
        },
        async function (error) {
            try {
                return Promise.reject({
                    message: error.data.message.text
                });
            } catch (e) {}
            return Promise.reject(error);
        }
    );

    return client;
};

const axiosInstance = processRequest();
export default axiosInstance;

export async function get(url, loading = true) {
    return loading
        ? trackPromise(axiosInstance.get(url))
        : axiosInstance.get(url);
}

export async function post(url, model, loading = true) {
    return loading
        ? trackPromise(axiosInstance.post(url, model))
        : axiosInstance.post(url, model);
}

export async function put(url, model, loading = true) {
    return loading
        ? trackPromise(axiosInstance.put(url, model))
        : axiosInstance.put(url, model);
}

export async function remove(url, loading = true) {
    return loading
        ? trackPromise(axiosInstance.delete(url))
        : axiosInstance.delete(url);
}
