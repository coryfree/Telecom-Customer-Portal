package com.skillstorm;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.skillstorm.data.DeviceRepository;

@SpringBootTest
class TelecomCustomerPortalApplicationTests {

	@Autowired
	DeviceRepository repository;

	@Test
	void contextLoads() {
	}
	
	@Test
	void getBill() {
		System.out.println(repository.countDevices(1, 1));
		System.out.println(repository.countDevices(1, 2));

	}

}
