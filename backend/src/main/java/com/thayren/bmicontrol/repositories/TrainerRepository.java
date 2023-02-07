package com.thayren.bmicontrol.repositories;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.thayren.bmicontrol.entities.Trainer;

@Repository
public interface TrainerRepository extends JpaRepository<Trainer, Long> {
	
	@Query("select tra from Trainer tra where tra.name like %?1%")
	Page<Trainer> find(String name, Pageable pageable);

}
