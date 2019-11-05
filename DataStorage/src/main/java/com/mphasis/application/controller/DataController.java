package com.mphasis.application.controller;

import java.util.ArrayList;
import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import org.springframework.web.bind.annotation.GetMapping;

import org.springframework.web.bind.annotation.PostMapping;

import org.springframework.web.bind.annotation.RequestBody;

import org.springframework.web.bind.annotation.RestController;
import com.mphasis.application.pojo.DataPojo;
import com.mphasis.application.repository.DataRepository;


@RestController
public class DataController{
	@Autowired
	public DataRepository datarepository;
	List<DataPojo> data=new ArrayList<>();
	DataPojo datapojo =new DataPojo();
	
	
	
	@PostMapping("/saveData")
  public ResponseEntity<Object> addData(@RequestBody DataPojo datapojo){
		data.add(datapojo);
		datarepository.save(datapojo);
		ServiceResponse<DataPojo> response= new ServiceResponse<DataPojo>("success", datapojo);
		return new ResponseEntity<Object>(response ,HttpStatus.OK);
	}
	
	
	@GetMapping("/getData")
	  public ResponseEntity<Object>getFullData(){	
	        System.out.println(datapojo);
			ServiceResponse <List<DataPojo>> response= new ServiceResponse<>("success", data);
			System.out.println(data);
			return new ResponseEntity<Object>(response,HttpStatus.OK);
		
		}
	/*@DeleteMapping("/removeDataPojo/{phonenumber}")
	public String removeDataPojo(@PathVariable("phonenumber") long phonenumber) {
		datarepository.deleteById(phonenumber);
		return "Employee record deleted with  id: " + phonenumber;
	}
	@PutMapping("/updateDataPojo/{phonenumber}")
	public DataPojo updateDataPojoDetails(@RequestBody DataPojo updateDataPojoRequest, @PathVariable long id) {
		DataPojo datapojo = datarepository.findById(id).get();
		datapojo.setId(updateDataPojoRequest.getId());
		datapojo.setName(updateDataPojoRequest.getName());
		datapojo.setAddress(updateDataPojoRequest.getAddress());
		datapojo.setDate(updateDataPojoRequest.getDate());
		datapojo.setPhonenumber(updateDataPojoRequest.getPhonenumber());
		
		datarepository.saveAndFlush(datapojo);
		return datapojo;
	}*/
}



