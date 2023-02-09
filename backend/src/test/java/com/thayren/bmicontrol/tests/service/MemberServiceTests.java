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
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.test.context.junit.jupiter.SpringExtension;

import com.thayren.bmicontrol.dto.MemberDTO;
import com.thayren.bmicontrol.entities.Member;
import com.thayren.bmicontrol.repositories.MemberRepository;
import com.thayren.bmicontrol.services.MemberService;
import com.thayren.bmicontrol.services.exceptions.ResourceNotFoundException;
import com.thayren.bmicontrol.tests.factory.MemberFactory;

@ExtendWith(SpringExtension.class)
public class MemberServiceTests {

	@InjectMocks
	private MemberService service;

	@Mock
	private MemberRepository repository;

	private Member member;
	private MemberDTO memberDto;
	private PageImpl<Member> page;
	private long existingId;
	private long nonExistingId;
	

	@BeforeEach
	void setUp() throws Exception {

		member = MemberFactory.createMember();
		memberDto = MemberFactory.createMemberDTO();
		page = new PageImpl<>(List.of(member));
		existingId = 1L;
		nonExistingId = 1000L;

		Mockito.when(repository.find(ArgumentMatchers.anyString(), ArgumentMatchers.any())).thenReturn(page);
		
		Mockito.when(repository.findById(existingId)).thenReturn(Optional.of(member));
		Mockito.when(repository.findById(nonExistingId)).thenReturn(Optional.empty());

		Mockito.when(repository.save(ArgumentMatchers.any())).thenReturn(member);
		
		Mockito.when(repository.getOne(existingId)).thenReturn(member);
		Mockito.doThrow(EntityNotFoundException.class).when(repository).getOne(nonExistingId);
		
		Mockito.doNothing().when(repository).deleteById(existingId);
		Mockito.doThrow(EmptyResultDataAccessException.class).when(repository).deleteById(nonExistingId);

	}

	@Test
	public void findAllPagedShouldReturnPage() {
		String name = "";
		PageRequest pageRequest = PageRequest.of(0, 10);

		Page<MemberDTO> result = service.findAllPaged(name, pageRequest);

		Assertions.assertNotNull(result);
		Assertions.assertFalse(result.isEmpty());
		Mockito.verify(repository, Mockito.times(1)).find(name, pageRequest);
	}
	
	@Test
	public void findByIdShouldReturnMemberDTOWhenIdExists() {

		MemberDTO result = service.findById(existingId);
		Assertions.assertNotNull(result);

		Mockito.verify(repository, Mockito.times(1)).findById(existingId);
	}
	
	@Test
	public void findByIdShouldThrowResourceNotFoundExceptionWhenIdDoesNotExists() {

		Assertions.assertThrows(ResourceNotFoundException.class, () -> {
			service.findById(nonExistingId);
		});

		Mockito.verify(repository, Mockito.times(1)).findById(nonExistingId);
	}

	@Test
	public void insertShouldReturnMemberDTO() {
		Member member = new Member();

		member.setName(memberDto.getName());
		member.setHeight(memberDto.getHeight());
		member.setWeight(memberDto.getWeight());
		member.setTrainer(memberDto.getTrainer());
		member.calculateBMI(member.getHeight(), member.getWeight());
		member.calculateRank(member.getBmi());

		MemberDTO result = service.insert(memberDto);
		Assertions.assertNotNull(result);

		Mockito.verify(repository).save(member);
	}
	
	@Test
	public void updateShouldReturnMemberDTOWhenIdExists() {
			
		MemberDTO result = service.update(existingId, memberDto);
		Assertions.assertNotNull(result);
		
	    Mockito.verify(repository, Mockito.times(1)).getOne(existingId);
	}
	
	@Test
	public void updateShouldThrowResourceNotFoundExceptionWhenIdDoesNotExists() {
				
		Assertions.assertThrows(ResourceNotFoundException.class, () -> {
			service.update(nonExistingId, memberDto);
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

}
