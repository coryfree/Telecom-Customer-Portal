package com.skillstorm.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skillstorm.data.DeviceRepository;
import com.skillstorm.models.Device;

@Service
public class DeviceService {

	@Autowired
	DeviceRepository repository;
	
	public Integer saveDevice(Device device) {
		if(!repository.findById(device.getPhoneNumber()).isPresent()) {
			switch(device.getPlan().getDataPlanID()) {
			case 1:{
				if(repository.countDevices(device.getUser().getUserID(), device.getPlan().getDataPlanID()) < device.getPlan().getNumberOfDevices()) {
					repository.save(device);
					return 200;
				}else
					return 403;
			}
			case 2:{
				if(repository.countDevices(device.getUser().getUserID(), device.getPlan().getDataPlanID()) < device.getPlan().getNumberOfDevices()) {
					repository.save(device);
					return 200;
				}else
					return 403;
			}
			case 3:{
				if(repository.countDevices(device.getUser().getUserID(), device.getPlan().getDataPlanID()) < device.getPlan().getNumberOfDevices()) {
					repository.save(device);
					return 200;
				}else
					return 403;
			}
			default:{
				return 400;
			}
			
			}
			
			
			
			
		}
		return null;
	}
	public Device updateDevice(Device device) {
		if(repository.findById(device.getPhoneNumber()).isPresent()) {
			switch(device.getPlan().getDataPlanID()) {
			case 1:{
				if(repository.countDevices(device.getUser().getUserID(), device.getPlan().getDataPlanID()) < device.getPlan().getNumberOfDevices() + 1) {
					return repository.save(device);
				}else
					return null;
			}
			case 2:{
				if(repository.countDevices(device.getUser().getUserID(), device.getPlan().getDataPlanID()) < device.getPlan().getNumberOfDevices() + 1) {
					return repository.save(device);
				}else
					return null;
			}
			case 3:{
				if(repository.countDevices(device.getUser().getUserID(), device.getPlan().getDataPlanID()) < device.getPlan().getNumberOfDevices() + 1) {
					return repository.save(device);
				}else
					return null;
			}
			default:{
				return null;
			}
			
			}
		}
		return null;
	}
	
	public void deleteDevice(String id) {
		repository.deleteById(id);
	}
	
	public Optional<Device> getDevice(String id) {
		return repository.findById(id);
	}
	
	public List<Device> getDevices(Integer id){
		return repository.getDevices(id);
	}
	
	public List<Device> getDevices(){
		return repository.findAll();
		
	}
	
}
