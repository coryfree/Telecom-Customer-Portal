package com.skillstorm.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import com.skillstorm.data.PlanRepository;
import com.skillstorm.models.Plan;

@Service
public class PlanService {

	@Autowired
	PlanRepository repository;
	
	public List<Plan> getPlans(){
		return repository.findAll();
	}
	
	public java.util.Optional<Plan> findPlan(Integer id){
		java.util.Optional<Plan> optional = repository.findById(id);
		return optional;

 	}
	
	
	
}
