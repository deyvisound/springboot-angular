package com.usermanager.controller;

import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.usermanager.entity.User;
import com.usermanager.repository.UserRepository;

@RestController
@RequestMapping("users")
public class UserController {

	@Autowired
	private UserRepository userRepository;
	
	@GetMapping
	public Iterable<User> getUsers(){
		return userRepository.findAll();
	}
	
	@PostMapping
	public User insertUser(@RequestBody User user) {
		return userRepository.save(user);		
	}
	
	@DeleteMapping("{id}")
	public void deleteUser(@PathVariable UUID id) {
		userRepository.deleteById(id);
	}
	
}
