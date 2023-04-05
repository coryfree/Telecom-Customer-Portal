package com.skillstorm.models;

import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.validation.constraints.NotBlank;

import org.hibernate.annotations.ColumnDefault;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.sun.istack.NotNull;

@JsonIgnoreProperties({"hibernateLazyInitializer"})
@Entity
@Table(name = "data_plans")
public class Plan{
	
	@Id //primary key
	@GeneratedValue(strategy = GenerationType.IDENTITY) //value is generated by database
	@Column(name="dataPlanID")
	int dataPlanID;
	
	@Column(name="numberOfDevices")
	@NotNull
	@ColumnDefault("0")
	int numberOfDevices;
	
	@Column(name="planDescription")
	@NotBlank
	String planDescription;
	
	@Column(name="costPerDevice")
	@NotNull
	double costPerDevice;
	
	@JsonIgnore
	@OneToMany(mappedBy="plan", cascade=CascadeType.ALL)
	private Set<Device> devices;
	
	

	public Plan() {
		super();
	}

	public Plan(int dataPlanID, @NotNull int numberOfDevices, @NotBlank String planDescription,
			@NotNull double costPerDevice) {
		super();
		this.dataPlanID = dataPlanID;
		this.numberOfDevices = numberOfDevices;
		this.planDescription = planDescription;
		this.costPerDevice = costPerDevice;
	}

	public int getDataPlanID() {
		return dataPlanID;
	}

	public void setDataPlanID(int dataPlanID) {
		this.dataPlanID = dataPlanID;
	}

	public int getNumberOfDevices() {
		return numberOfDevices;
	}

	public void setNumberOfDevices(int numberOfDevices) {
		this.numberOfDevices = numberOfDevices;
	}

	public String getPlanDescription() {
		return planDescription;
	}

	public void setPlanDescription(String planDescription) {
		this.planDescription = planDescription;
	}

	public double getCostPerDevice() {
		return costPerDevice;
	}

	public void setCostPerDevice(double costPerDevice) {
		this.costPerDevice = costPerDevice;
	}

	public Set<Device> getDevices() {
		return devices;
	}

	public void setDevices(Set<Device> devices) {
		this.devices = devices;
	}

	@Override
	public String toString() {
		return "Plan [dataPlanID=" + dataPlanID + ", numberOfDevices=" + numberOfDevices + ", planDescription="
				+ planDescription + ", costPerDevice=" + costPerDevice + "]";
	}
	
	
}