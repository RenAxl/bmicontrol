package com.thayren.bmicontrol.services;

import java.util.Optional;

import javax.persistence.EntityNotFoundException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.thayren.bmicontrol.dto.TrainerDTO;
import com.thayren.bmicontrol.entities.Trainer;
import com.thayren.bmicontrol.repositories.TrainerRepository;
import com.thayren.bmicontrol.services.exceptions.DatabaseException;
import com.thayren.bmicontrol.services.exceptions.ResourceNotFoundException;

@Service
public class TrainerService {

	@Autowired
	private TrainerRepository repository;

	@Transactional(readOnly = true)
	public Page<TrainerDTO> findAllPaged(String name, PageRequest pageRequest) {
		Page<Trainer> list = repository.find(name, pageRequest);
		Page<TrainerDTO> listDto = list.map(trainer -> new TrainerDTO(trainer));

		return listDto;
	}

	@Transactional(readOnly = true)
	public TrainerDTO findById(Long id) {
		Optional<Trainer> obj = repository.findById(id);
		Trainer entity = obj.orElseThrow(() -> new ResourceNotFoundException("Entity not found"));

		return new TrainerDTO(entity);
	}

	@Transactional
	public TrainerDTO insert(TrainerDTO trainerDto) {
		Trainer entity = new Trainer();
		copyDtoToEntity(trainerDto, entity);
		entity = repository.save(entity);

		return new TrainerDTO(entity);
	}

	@Transactional
	public TrainerDTO update(Long id, TrainerDTO trainerDto) {
		try {
			Trainer entity = repository.getOne(id);
			copyDtoToEntity(trainerDto, entity);
			entity = repository.save(entity);

			return new TrainerDTO(entity);
		} catch (EntityNotFoundException e) {
			throw new ResourceNotFoundException("Id not found " + id);
		}
	}
	
	public void delete(Long id) {
		try {
			repository.deleteById(id);
		} catch (EmptyResultDataAccessException e) {
			throw new ResourceNotFoundException("Id not found " + id);
		} catch (DataIntegrityViolationException e) {
			throw new DatabaseException("Integrity violation");
		}
	}


	private void copyDtoToEntity(TrainerDTO trainerDto, Trainer entity) {
		entity.setName(trainerDto.getName());
		entity.setAge(trainerDto.getAge());
		entity.setCpf(trainerDto.getCpf());
		entity.setCellPhone(trainerDto.getCellPhone());
	}

	

}
