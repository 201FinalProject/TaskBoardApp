package net.javaguides.springboot.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import net.javaguides.springboot.exception.ResourceNotFoundException;
import net.javaguides.springboot.model.Task;
import net.javaguides.springboot.repository.TaskRepository;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class TaskController {

	@Autowired
	private TaskRepository TaskRepository;

	// get all Tasks
	@GetMapping(value = {"/Tasks", "/History"})
	public List<Task> getAllTasks(){
		return TaskRepository.findAll();
	}		
	
	// create Task rest api
	@PostMapping(value = {"/Tasks", "/History"})
	public Task createTask(@RequestBody Task Task) {
		return TaskRepository.save(Task);
	}
	
	// get Task by id rest api
	@GetMapping(value = {"/Tasks/{id}", "/History/{id}"})
	public ResponseEntity<Task> getTaskById(@PathVariable Long id) {
		Task Task = TaskRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Task doesn't exist with id :" + id));
		return ResponseEntity.ok(Task);
	}
	
	// update Task rest api
	
	@PutMapping(value = {"/Tasks/{id}", "/History/{id}"})
	public ResponseEntity<Task> updateTask(@PathVariable Long id, @RequestBody Task TaskDetails){
		Task Task = TaskRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Task not exist with id :" + id));
		
		Task.setTaskName(TaskDetails.getTaskName());
		Task.setCompletedBy(TaskDetails.getCompletedBy());
		Task.setDescription(TaskDetails.getDescription());
		System.out.println(TaskDetails.getDescription());
		System.out.println("TaskDetails()");

		Task.setDifficulty(TaskDetails.getDifficulty());
        Task.setCompletionDate(TaskDetails.getCompletionDate());
        Task.setGroupCode(TaskDetails.getGroupCode());
		
		Task updatedTask = TaskRepository.save(Task);
		return ResponseEntity.ok(updatedTask);
	}
	
	// delete Task rest api
	@DeleteMapping(value = {"/Tasks/{id}", "/History/{id}"})
	public ResponseEntity<Map<String, Boolean>> deleteTask(@PathVariable Long id){
		Task Task = TaskRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Task not exist with id :" + id));
		
		TaskRepository.delete(Task);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}
	
	
}
