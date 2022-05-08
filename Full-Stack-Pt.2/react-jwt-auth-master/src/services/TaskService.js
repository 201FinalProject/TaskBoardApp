import axios from 'axios';

const TASK_API_BASE_URL = "http://localhost:8080/api/auth/Tasks";

class TaskService {

    getTasks(){
        return axios.get(TASK_API_BASE_URL);
    }

    createTask(task){
        return axios.post(TASK_API_BASE_URL, task);
    }

    getTaskById(taskId){
        return axios.get(TASK_API_BASE_URL + '/' + taskId);
    }

    updateTask(task, taskId){
        return axios.put(TASK_API_BASE_URL + '/' + taskId, task);
    }

    deleteTask(taskId){
        return axios.delete(TASK_API_BASE_URL + '/' + taskId);
    }

    changeTaskCompletion(task, taskId){
        return axios.put("http://localhost:8080/api/auth/history/" + taskId, task);
    }
}

export default new TaskService()