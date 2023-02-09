package com.thayren.bmicontrol.tests.service;

import java.util.List;
import java.util.Optional;

import javax.persistence.EntityNotFoundException;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.ArgumentMatchers;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.test.context.junit.jupiter.SpringExtension;

import com.thayren.bmicontrol.dto.TrainerDTO;
import com.thayren.bmicontrol.entities.Trainer;
import com.thayren.bmicontrol.repositories.TrainerRepository;
import com.thayren.bmicontrol.services.TrainerService;
import com.thayren.bmicontrol.services.exceptions.DatabaseException;
import com.thayren.bmicontrol.services.exceptions.ResourceNotFoundException;
import com.thayren.bmicontrol.tests.factory.TrainerFactory;

@ExtendWith(SpringExtension.class)
public class TrainerServiceTests {

	@InjectMocks
	private TrainerService service;

	@Mock
	private TrainerRepository repository;

	private long existingId;
	private long nonExistingId;
	private Trainer trainer;
	private PageImpl<Trainer> page;
	private long dependentId;

	@BeforeEach
	void setUp() throws Exception {

		existingId = 1L;
		nonExistingId = 1000L;
		trainer = TrainerFactory.createTrainer();
		page = new PageImpl<>(List.of(trainer));
		dependentId = 2L;

		Mockito.when(repository.find(ArgumentMatchers.anyString(), ArgumentMatchers.any())).thenReturn(page);

		Mockito.when(repository.findById(existingId)).thenReturn(Optional.of(trainer));
		Mockito.when(repository.findById(nonExistingId)).thenReturn(Optional.empty());

		Mockito.when(repository.save(ArgumentMatchers.any())).thenReturn(trainer);

		Mockito.when(repository.getOne(existingId)).thenReturn(trainer);
		Mockito.doThrow(EntityNotFoundException.class).when(repository).getOne(nonExistingId);

		Mockito.doNothing().when(repository).deleteById(existingId);
		Mockito.doThrow(EmptyResultDataAccessException.class).when(repository).deleteById(nonExistingId);
		Mockito.doThrow(DataIntegrityViolationException.class).when(repository).deleteById(dependentId);

	}

	@Test
	public void findAllPagedShouldReturnPage() {
		String name = "";
		PageRequest pageRequest = PageRequest.of(0, 10);

		Page<TrainerDTO> result = service.findAllPaged(name, pageRequest);

		Assertions.assertNotNull(result);
		Assertions.assertFalse(result.isEmpty());
		Mockito.verify(repository, Mockito.times(1)).find(name, pageRequest);
	}

	@Test
	public void findByIdShouldReturnTrainerDTOWhenIdExists() {

		TrainerDTO result = service.findById(existingId);
		Assertions.assertNotNull(result);

		Mockito.verify(repository, Mockito.times(1)).findById(existingId);
	}

	@Test
	public void findByShouldThrowResourceNotFoundExceptionWhenIdDoesNotExists() {

		Assertions.assertThrows(ResourceNotFoundException.class, () -> {
			service.findById(nonExistingId);
		});

		Mockito.verify(repository, Mockito.times(1)).findById(nonExistingId);
	}

	@Test
	public void insertShouldReturnMemberDTO() {
		Trainer trainer = new Trainer();

		TrainerDTO trainerDto = TrainerFactory.createTrainerDTO();

		trainer.setName(trainerDto.getName());
		trainer.setAge(trainerDto.getAge());
		trainer.setCpf(trainerDto.getCpf());
		trainer.setCellPhone(trainer.getCellPhone());

		TrainerDTO result = service.insert(trainerDto);
		Assertions.assertNotNull(result);

		Mockito.verify(repository).save(trainer);
	}

	@Test
	public void updateShouldReturnTrainerDTOWhenIdExists() {

		TrainerDTO dto = new TrainerDTO();

		TrainerDTO result = service.update(existingId, dto);
		Assertions.assertNotNull(result);

		Mockito.verify(repository, Mockito.times(1)).getOne(existingId);
	}

	@Test
	public void updateShouldThrowResourceNotFoundExceptionWhenIdDoesNotExists() {

		TrainerDTO dto = new TrainerDTO();

		Assertions.assertThrows(ResourceNotFoundException.class, () -> {
			service.update(nonExistingId, dto);
		});

		Mockito.verify(repository, Mockito.times(1)).getOne(nonExistingId);
	}

	@Test
	public void deleteShouldDoNothingWhenIdExists() {
		Assertions.assertDoesNotThrow(() -> {
			service.delete(existingId);
		});

		Mockito.verify(repository, Mockito.times(1)).deleteById(existingId);
	}

	@Test
	public void deleteShouldThrowResourceNotFoundExceptionWhenIdDoesNotExists() {

		Assertions.assertThrows(ResourceNotFoundException.class, () -> {
			service.delete(nonExistingId);
		});

		Mockito.verify(repository, Mockito.times(1)).deleteById(nonExistingId);
	}

	@Test
	public void deleteShouldThrowDatabaseExceptionWhenDependentId() {

		Assertions.assertThrows(DatabaseException.class, () -> {
			service.delete(dependentId);
		});

		Mockito.verify(repository, Mockito.times(1)).deleteById(dependentId);
	}

}
