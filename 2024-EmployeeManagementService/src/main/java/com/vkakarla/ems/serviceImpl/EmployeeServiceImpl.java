package com.vkakarla.ems.serviceImpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.vkakarla.ems.Dto.EmployeeDto;
import com.vkakarla.ems.entities.EmployeeEntity;
import com.vkakarla.ems.mapper.EmployeeMapper;
import com.vkakarla.ems.repo.EmployeeRepository;
import com.vkakarla.ems.service.EmployeeService;

@Service
public class EmployeeServiceImpl implements EmployeeService {
	
	
	@Autowired
	EmployeeRepository repo;

	@Override
	public void createEmployee(EmployeeDto dto) {
		
		EmployeeEntity enity = EmployeeMapper.maptoEntity(dto);
        repo.save(enity);
	}

	@Override
	public EmployeeDto getEmployeeById(long employeeId) {
		
		EmployeeEntity enity = repo.findById(employeeId).get();
		EmployeeDto dto = EmployeeMapper.maptoEmployeeDto(enity);
		return dto;
	}

	@Override
	public void updateEmployee(long employeeId, EmployeeDto dto) {

		EmployeeEntity enity = repo.findById(employeeId).get();
		enity.setFirstName(dto.getFirstName());
		enity.setLastName(dto.getLastName());
		enity.setEmail(dto.getEmail());
		enity.setSkills(dto.getSkills());
		repo.save(enity);
	}

	@Override
	public List<EmployeeDto> getAllEmployees() {
		
		List<EmployeeEntity> enityList = repo.findAll();
		List<EmployeeDto> DtoList = EmployeeMapper.maptoEmployeeDtoList(enityList);
		return DtoList;
	}

	@Override
	public void deleteEmployeeById(long employeeId) {
		repo.deleteById(employeeId);
	}

}
