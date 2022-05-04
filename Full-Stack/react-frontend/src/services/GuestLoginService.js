import axios from 'axios';

const GUEST_LOGIN_API_BASE_URL = "http://localhost:8080/api/v1/Login";

class GuestLoginService {

    getGroups(){
        return axios.get(GUEST_LOGIN_API_BASE_URL);
    }

    createGroup(group){
        return axios.post(GUEST_LOGIN_API_BASE_URL, group);
    }

    getGroupById(groupId){
        return axios.get(GUEST_LOGIN_API_BASE_URL + '/' + groupId);
    }

    updateGroup(group, groupId){
        return axios.put(GUEST_LOGIN_API_BASE_URL + '/' + groupId, group);
    }

    deleteGroup(groupId){
        return axios.delete(GUEST_LOGIN_API_BASE_URL + '/' + groupId);
    }
}

export default new GuestLoginService()