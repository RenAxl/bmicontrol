package com.thayren.bmicontrol.resources;

import java.net.URI;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort.Direction;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.thayren.bmicontrol.dto.TrainerDTO;
import com.thayren.bmicontrol.services.TrainerService;

@RestController
@RequestMapping(value = "/trainers")
public class TrainerResource {

	@Autowired
	private TrainerService service;

	@GetMapping
	public ResponseEntity<Page<TrainerDTO>> findAllPaged(
			@RequestParam(value = "name", defaultValue = "") String name,
			@RequestParam(value = "page", defaultValue = "0") Integer page,
			@RequestParam(value = "linesPerPage", defaultValue = "3") Integer linesPerPage,
			@RequestParam(value = "direction", defaultValue = "ASC") String direction,
			@RequestParam(value = "orderBy", defaultValue = "name") String orderBy) {

		PageRequest pageRequest = PageRequest.of(page, linesPerPage, Direction.valueOf(direction), orderBy);

		Page<TrainerDTO> list = service.findAllPaged(name.trim(), pageRequest);

		return ResponseEntity.ok().body(list);
	}
	
	@GetMapping(value = "/{id}")
	public ResponseEntity<TrainerDTO> findById(@PathVariable Long id){
		TrainerDTO equipmentDto = service.findById(id);
		
		return ResponseEntity.ok().body(equipmentDto);
	}
	
	@PostMapping
	public ResponseEntity<TrainerDTO> insert(@Valid @RequestBody TrainerDTO trainerDto){
		trainerDto = service.insert(trainerDto);
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}")
				.buildAndExpand(trainerDto.getId()).toUri();
		return ResponseEntity.created(uri).body(trainerDto);
	}
	
	@PutMapping(value = "/{id}")
	public ResponseEntity<TrainerDTO> update(@PathVariable Long id, @Valid @RequestBody TrainerDTO trainerDto){
		trainerDto = service.update(id, trainerDto);
		return ResponseEntity.ok().body(trainerDto);
	}
	
	@DeleteMapping(value = "/{id}")
	public ResponseEntity<TrainerDTO> delete(@PathVariable Long id){
		service.delete(id);
		return ResponseEntity.noContent().build();
	}

}
