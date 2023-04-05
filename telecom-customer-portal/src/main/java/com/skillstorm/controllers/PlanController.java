package com.skillstorm.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skillstorm.models.Plan;
import com.skillstorm.service.PlanService;

@RestController
@RequestMapping("/plans")
@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
public class PlanController {

	@Autowired
	private PlanService service;
	
	@GetMapping
	public ResponseEntity<List<Plan>> findAll(){
		return new ResponseEntity<>(service.getPlans(), HttpStatus.OK);
	}
	
	@GetMapping("/plan/{id}")
	public ResponseEntity<Plan> findById(@PathVariable Integer id){
		java.util.Optional<Plan> optional = service.findPlan(id);
		return optional.isPresent() ? ResponseEntity.ok(optional.get()) : ResponseEntity.badRequest().build();
 	}
	
	
	
	
	
}
