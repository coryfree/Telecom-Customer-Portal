package com.skillstorm.controllers;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skillstorm.service.BillService;

@RestController
@RequestMapping("/bill")
@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
public class BillController {
	
	@Autowired
	BillService service;
	
	@GetMapping(value="/bills/{userID}")
	public ResponseEntity<Double> getBill( @PathVariable int userID){
		return new ResponseEntity<>(service.getBill(userID), HttpStatus.ACCEPTED);
	}
	
	@GetMapping("/{userID}/{planID}")
	public ResponseEntity<Double> getBill(@PathVariable int userID, @PathVariable int planID){
		return new ResponseEntity<>(service.getBill(userID, planID), HttpStatus.ACCEPTED);
	}
}
