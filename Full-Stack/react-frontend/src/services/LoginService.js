import axios from 'axios';

const LOGIN_API_BASE_URL = "http://localhost:8080/api/v1/Login";

class LoginService {

    getUsers(){
        return axios.get(LOGIN_API_BASE_URL);
    }

    createUser(user){
        return axios.post(LOGIN_API_BASE_URL, user);
    }

    getUserById(userId){
        return axios.get(LOGIN_API_BASE_URL + '/' + userId);
    }

    updateUser(user, userId){
        return axios.put(LOGIN_API_BASE_URL + '/' + userId, user);
    }

    deleteUser(userId){
        return axios.delete(LOGIN_API_BASE_URL + '/' + userId);
    }
}

export default new LoginService()