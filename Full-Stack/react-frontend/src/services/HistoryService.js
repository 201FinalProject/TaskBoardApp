import axios from 'axios';

const HISTORY_API_BASE_URL = "http://localhost:8080/api/v1/History";

class HistoryService {

    getTasks(){
        return axios.get(HISTORY_API_BASE_URL);
    }

    createTask(task){
        return axios.post(HISTORY_API_BASE_URL, task);
    }

    getTaskById(taskId){
        return axios.get(HISTORY_API_BASE_URL + '/' + taskId);
    }

    updateTask(task, taskId){
        return axios.put(HISTORY_API_BASE_URL + '/' + taskId, task);
    }

    deleteTask(taskId){
        return axios.delete(HISTORY_API_BASE_URL + '/' + taskId);
    }
}

export default new HistoryService()