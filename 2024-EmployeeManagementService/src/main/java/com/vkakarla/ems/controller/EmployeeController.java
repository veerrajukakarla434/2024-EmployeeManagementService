package com.vkakarla.ems.controller;

import java.util.List;

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

import com.vkakarla.ems.Dto.EmployeeDto;
import com.vkakarla.ems.service.EmployeeService;

import io.swagger.v3.oas.annotations.Operation;

@CrossOrigin("*")
@RequestMapping("/api/employees")
@RestController
public class EmployeeController {
	
	@Autowired   //IOC
	EmployeeService employeeService;
	
	@Operation(summary = "Save Employee", description = "This API Will Save Employee Details to the Database" )
    @PostMapping(value = "/")
	public ResponseEntity<Object> createEmployee(@RequestBody EmployeeDto Dto) {
    	
    	employeeService.createEmployee(Dto);
		return new ResponseEntity<Object>("Successfully Created Employee", HttpStatus.CREATED);
	}
    
	@Operation(summary = "Get Employee", description = "This API Will Get Employee Details from the Database" )
    @GetMapping(value = "/{id}")
	public ResponseEntity<Object> getEmployee(@PathVariable long id) {
    	
    	EmployeeDto responseDto = employeeService.getEmployeeById(id);
		return new ResponseEntity<Object>(responseDto, HttpStatus.OK);
	}
	
	@Operation(summary = "Get All Employees", description = "This API Will Get All Employees Details from the Database" )
    @GetMapping(value = "/")
	public ResponseEntity<Object> getAllEmployees() {
    	
    	List<EmployeeDto> responseDto = employeeService.getAllEmployees();
		return new ResponseEntity<Object>(responseDto, HttpStatus.OK);
	}
	
	
	@Operation(summary = "Update Employee", description = "This API Will update Employee Details in the Database" )
    @PutMapping(value = "/{id}")
	public ResponseEntity<Object> updateEmployee(@PathVariable long id, @RequestBody EmployeeDto Dto) {
    	
    	employeeService.updateEmployee(id, Dto);
		return new ResponseEntity<Object>("Successfuly Updated Employee details", HttpStatus.OK);
	}
	
	@Operation(summary = "Delete Employee", description = "This API Will Delete the Employee in Database based on the given input as employeeid" )
    @DeleteMapping(value = "/{id}")
	public ResponseEntity<Object> deleteEmployee(@PathVariable long id) {
    	
    	employeeService.deleteEmployeeById(id);
		return new ResponseEntity<Object>("Successfully Deleted Employee for the given input", HttpStatus.OK);
	}
}
