package com.usermanager.service;

import java.util.Optional;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.usermanager.entity.User;
import com.usermanager.repository.UserRepository;

@Service
public class UserService {

	@Autowired
	private UserRepository userRepository;

	public Iterable<User> findAll() {
		return userRepository.findAll();
	}

	public User create(User user) {
		if(!user.getPassword().equals(user.getPasswordConfirm())) {
			throw new RuntimeException("A senha e sua confirmação devem coincidir!");
		}
		return userRepository.save(user);
	}

	public User update(User user) {
		return userRepository.save(user);
	}

	public Optional<User> findById(UUID id) {
		return userRepository.findById(id);
	}

	public void deleteById(UUID id) {
		userRepository.deleteById(id);
	}

}
