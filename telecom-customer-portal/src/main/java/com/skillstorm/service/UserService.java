package com.skillstorm.service;

import java.util.List;


import javax.validation.ValidationException;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Service;


import com.skillstorm.data.UserRepository;
import com.skillstorm.models.User;

//contains the logic
@Service
public class UserService {

	@Autowired
	private UserRepository repository;
	
	public User save(User user) {
		return repository.save(user);
	}
	
	public List<User> findAll(){
		return repository.findAll();
	}
	
	public void update(User user,  Integer id) {
		if(user.getUserID() == id && repository.findById(user.getUserID()).isPresent()) {
			repository.save(user);
		} else {
			throw new ValidationException();
		}
	}
	
	public User findById(Integer id) {
		java.util.Optional<User> optional = repository.findById(id);
		return optional.isPresent()? optional.get() : null;
	}
	
	public void deleteById(Integer id) {
		repository.deleteById(id);
	}
	
}
