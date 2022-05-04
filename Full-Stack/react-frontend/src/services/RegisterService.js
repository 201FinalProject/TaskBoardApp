import axios from 'axios';

const REGISTER_API_BASE_URL = "http://localhost:8080/api/v1/Register";

class RegisterService {

    getUsers(){
        return axios.get(REGISTER_API_BASE_URL);
    }

    createUser(user){
        return axios.post(REGISTER_API_BASE_URL, user);
    }

    getUserById(userId){
        return axios.get(REGISTER_API_BASE_URL + '/' + userId);
    }

    updateUser(user, userId){
        return axios.put(REGISTER_API_BASE_URL + '/' + userId, user);
    }

    deleteUser(userId){
        return axios.delete(REGISTER_API_BASE_URL + '/' + userId);
    }
}

export default new RegisterService()