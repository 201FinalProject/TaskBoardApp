import axios from 'axios';

const GROUP_API_BASE_URL = "http://localhost:8080/api/v1/Groups";

class GroupService {

    getGroups(){
        return axios.get(GROUP_API_BASE_URL);
    }

    createGroup(group){
        return axios.post(GROUP_API_BASE_URL, group);
    }

    getGroupById(groupId){
        return axios.get(GROUP_API_BASE_URL + '/' + groupId);
    }

    updateGroup(group, groupId){
        return axios.put(GROUP_API_BASE_URL + '/' + groupId, group);
    }

    deleteGroup(groupId){
        return axios.delete(GROUP_API_BASE_URL + '/' + groupId);
    }
}

export default new GroupService()