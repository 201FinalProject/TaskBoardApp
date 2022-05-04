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
import net.javaguides.springboot.model.User;
import net.javaguides.springboot.repository.UserRepository;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class UserController {

	@Autowired
	private UserRepository UserRepository;
	
	// get all Users
	@GetMapping(value = { "/Users", "/Register" })
	public List<User> getAllUsers(){
		return UserRepository.findAll();
	}	
	
	// create User rest api
	@PostMapping(value = { "/Users", "/Register" })
	public User createUser(@RequestBody User User) {
		return UserRepository.save(User);
	}
	
	// get User by id rest api
	@GetMapping(value = { "/Users/{id}", "/Register/{id}" })
	public ResponseEntity<User> getUserById(@PathVariable Long id) {
		User User = UserRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("User doesn't exist with id :" + id));
		return ResponseEntity.ok(User);
	}
	
	// update User rest api
	
	@PutMapping(value = { "/Users/{id}", "/Register/{id}" })
	public ResponseEntity<User> updateUser(@PathVariable Long id, @RequestBody User UserDetails){
		User User = UserRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("User not exist with id :" + id));
		
		User.setUserName(UserDetails.getUserName());
		User.setPass(UserDetails.getPass());
		User.setEmail(UserDetails.getEmail());
		
		User updatedUser = UserRepository.save(User);
		return ResponseEntity.ok(updatedUser);
	}
	
	// delete User rest api
	@DeleteMapping(value = { "/Users/{id}", "/Register/{id}" })
	public ResponseEntity<Map<String, Boolean>> deleteUser(@PathVariable Long id){
		User User = UserRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("User not exist with id :" + id));
		
		UserRepository.delete(User);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}
	
	
}
