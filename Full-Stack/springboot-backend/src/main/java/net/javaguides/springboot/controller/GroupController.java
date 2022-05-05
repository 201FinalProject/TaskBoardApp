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
import net.javaguides.springboot.model.Group;
import net.javaguides.springboot.repository.GroupRepository;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class GroupController {

	@Autowired
	private GroupRepository GroupRepository;
	
	// get all Groups
	
	@GetMapping(value = {"/Groups", "/Login"})
	public List<Group> getAllGroups(){
		return GroupRepository.findAll();
	}		
	
	// create Group rest api
	@PostMapping(value = {"/Groups", "/Login"})
	public Group createGroup(@RequestBody Group Group) {
		return GroupRepository.save(Group);
	}
	
	// get Group by id rest api
	@GetMapping(value = {"/Groups/{id}", "/Login/{id}"})
	public ResponseEntity<Group> getGroupById(@PathVariable Long id) {
		Group Group = GroupRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Group doesn't exist with id :" + id));
		return ResponseEntity.ok(Group);
	}
	
	// update Group rest api
	
	@PutMapping(value = {"/Groups/{id}", "/Login/{id}"})
	public ResponseEntity<Group> updateGroup(@PathVariable Long id, @RequestBody Group GroupDetails){
		Group Group = GroupRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Group not exist with id :" + id));
		
		Group.setUserID(GroupDetails.getUserID());
		Group.setGroupCode(GroupDetails.getGroupCode());
		
		Group updatedGroup = GroupRepository.save(Group);
		return ResponseEntity.ok(updatedGroup);
	}
	
	// delete Group rest api
	@DeleteMapping(value = {"/Groups/{id}", "/Login/{id}"})
	public ResponseEntity<Map<String, Boolean>> deleteGroup(@PathVariable Long id){
		Group Group = GroupRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Group not exist with id :" + id));
		
		GroupRepository.delete(Group);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}
	
	
}
