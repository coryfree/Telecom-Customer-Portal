package com.skillstorm.data;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.skillstorm.models.Plan;
import com.skillstorm.models.User;

@Repository
public interface PlanRepository extends JpaRepository<Plan, Integer>{

	public List<Plan> findAll();
	
	public Optional<Plan> findById(Integer id);
	
}
