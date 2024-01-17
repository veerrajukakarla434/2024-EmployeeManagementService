package com.vkakarla.ems.service;

import java.util.List;

import com.vkakarla.ems.Dto.EmployeeDto;

public interface EmployeeService {
	
	
	  public void createEmployee(EmployeeDto dto);
	  
	  public EmployeeDto getEmployeeById(long employeeId);
	  
	  public void updateEmployee(long employeeId, EmployeeDto dto);
	  
	  public List<EmployeeDto> getAllEmployees();
	  
	  public void deleteEmployeeById(long employeeId);
	  
	  
}
