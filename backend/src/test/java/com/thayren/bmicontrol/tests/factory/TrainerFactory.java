package com.thayren.bmicontrol.tests.factory;

import com.thayren.bmicontrol.dto.TrainerDTO;
import com.thayren.bmicontrol.entities.Trainer;

public class TrainerFactory {
	
	public static Trainer createTrainer() {
		Trainer trainer = new Trainer(1L, "Rafael Miranda Souza", 37, "999.999.999-99", "31 9 9999-9999");
		
		return trainer;
	}
	
	public static TrainerDTO createTrainerDTO() {
		Trainer trainer = createTrainer();
		
		return new TrainerDTO(trainer);
	}
	
	public static TrainerDTO createTrainerDTO(Long id) {
		TrainerDTO dto = createTrainerDTO();
		dto.setId(id);
		return dto;
	}

}
