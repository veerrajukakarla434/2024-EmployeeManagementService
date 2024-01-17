package com.vkakarla.ems.mapper;

import java.util.ArrayList;
import java.util.List;

import com.vkakarla.ems.Dto.EmployeeDto;
import com.vkakarla.ems.entities.EmployeeEntity;

public class EmployeeMapper {
	
	
	public static EmployeeEntity maptoEntity(EmployeeDto Dto) {
		
		EmployeeEntity entity  = new EmployeeEntity();
		entity.setId(Dto.getId());
		entity.setFirstName(Dto.getFirstName());
		entity.setLastName(Dto.getLastName());
		entity.setEmail(Dto.getEmail());
		entity.setEmail(Dto.getEmail());
		entity.setSkills(Dto.getSkills());
		
		return entity;
	}
	
	
   public static EmployeeDto maptoEmployeeDto(EmployeeEntity employee) {
		
	   EmployeeDto Dto  = new EmployeeDto();
	   Dto.setId(employee.getId());
	   Dto.setFirstName(employee.getFirstName());
	   Dto.setLastName(employee.getLastName());
	   Dto.setEmail(employee.getEmail());
	   Dto.setEmail(employee.getEmail());
	   Dto.setSkills(employee.getSkills());
		
		return Dto;
	}
   
   
	public static List<EmployeeDto> maptoEmployeeDtoList(List<EmployeeEntity> employeeList) {

		List<EmployeeDto> DtoList = new ArrayList<>();

		for (EmployeeEntity entity : employeeList) {
			EmployeeDto dto = maptoEmployeeDto(entity);
			DtoList.add(dto);
		}

		return DtoList;
	}

}
