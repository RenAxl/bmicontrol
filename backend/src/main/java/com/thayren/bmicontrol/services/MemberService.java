package com.thayren.bmicontrol.services;

import java.util.Optional;

import javax.persistence.EntityNotFoundException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.thayren.bmicontrol.dto.MemberDTO;
import com.thayren.bmicontrol.entities.Member;
import com.thayren.bmicontrol.repositories.MemberRepository;
import com.thayren.bmicontrol.services.exceptions.ResourceNotFoundException;

@Service
public class MemberService {

	@Autowired
	private MemberRepository repository;

	@Transactional(readOnly = true)
	public Page<MemberDTO> findAllPaged(String name, PageRequest pageRequest) {
		Page<Member> list = repository.find(name, pageRequest);
		Page<MemberDTO> listDto = list.map(member -> new MemberDTO(member));

		return listDto;
	}

	@Transactional(readOnly = true)
	public MemberDTO findById(Long id) {
		Optional<Member> obj = repository.findById(id);
		Member entity = obj.orElseThrow(() -> new ResourceNotFoundException("Entity not found"));

		return new MemberDTO(entity);
	}

	@Transactional
	public MemberDTO insert(MemberDTO memberDto) {
		Member entity = new Member();
		copyDtoToEntity(memberDto, entity);
		entity.calculateBMI(entity.getHeight(), entity.getWeight());
		entity.calculateRank(entity.getBmi());
		entity = repository.save(entity);

		return new MemberDTO(entity);
	}

	@Transactional
	public MemberDTO update(Long id, MemberDTO memberDto) {
		try {
			Member entity = repository.getOne(id);
			copyDtoToEntity(memberDto, entity);
			entity.calculateBMI(entity.getHeight(), entity.getWeight());
			entity.calculateRank(entity.getBmi());
			entity = repository.save(entity);

			return new MemberDTO(entity);

		} catch (EntityNotFoundException e) {
			throw new ResourceNotFoundException("Id not found " + id);
		}
	}

	public void delete(Long id) {
		try {
			repository.deleteById(id);
		} catch (EmptyResultDataAccessException e) {
			throw new ResourceNotFoundException("Id not found " + id);
		}
	}

	private void copyDtoToEntity(MemberDTO memberDto, Member entity) {
		entity.setName(memberDto.getName());
		entity.setAge(memberDto.getAge());
		entity.setTrainer(memberDto.getTrainer());
		entity.setHeight(memberDto.getHeight());
		entity.setWeight(memberDto.getWeight());
	}

}
