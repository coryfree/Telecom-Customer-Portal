package com.skillstorm.controllers;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
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

import com.skillstorm.models.Device;
import com.skillstorm.service.DeviceService;

@RestController
@RequestMapping("/devices")
@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
public class DeviceController {
	
	@Autowired
	private DeviceService service;
	
	@PostMapping("/device")
	public ResponseEntity<Device> save(@RequestBody @Valid Device device) {
		                                   //Body             Entity
		try {
		Integer result = service.saveDevice(device);
		if(result == 200) {
			return new ResponseEntity<>(HttpStatus.CREATED);
		}else if(result == 403){
			return new ResponseEntity<>(HttpStatus.FORBIDDEN);
		}else {
			return new ResponseEntity<>(HttpStatus.NOT_ACCEPTABLE);
		}}
		catch(Exception e){
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
		
	}
	
	@GetMapping
	public ResponseEntity<List<Device>> findAll(){
		return new ResponseEntity<>(service.getDevices(), HttpStatus.OK);
	}
	
	@PutMapping("/device")
	public ResponseEntity<Void> update(@RequestBody @Valid Device device) {
		if(service.updateDevice(device) != null) {
			return new ResponseEntity<>(HttpStatus.ACCEPTED);
		}else {
			return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
		}
	}
	
	@GetMapping("/device/{id}")
	public ResponseEntity<Device> findById(@PathVariable String id) {
		java.util.Optional<Device> optional = service.getDevice(id);
		return optional.isPresent()? ResponseEntity.ok(optional.get()) : ResponseEntity.badRequest().build();
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<List<Device>> findDevicesById(@PathVariable Integer id) {
		return new ResponseEntity<List<Device>>(service.getDevices(id), HttpStatus.ACCEPTED);
	}
	
	@DeleteMapping("/device/{id}")
	public void deleteById(@PathVariable String id) {
		service.deleteDevice(id);
	}
	
}
