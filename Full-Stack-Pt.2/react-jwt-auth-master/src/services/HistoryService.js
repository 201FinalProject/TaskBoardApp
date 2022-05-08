import axios from 'axios';

const API_URL = "http://localhost:8080/api/auth/history";

class HistoryService{

    getCompletedTasks(){
        return axios.get(API_URL);
    }
}

export default new HistoryService()