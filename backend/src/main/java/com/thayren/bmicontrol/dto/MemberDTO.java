package com.thayren.bmicontrol.dto;

import java.io.Serializable;

import com.thayren.bmicontrol.entities.Member;
import com.thayren.bmicontrol.entities.Trainer;

public class MemberDTO implements Serializable {
	private static final long serialVersionUID = 1L;

	private Long id;
	private String name;
	private Double height;
	private Double weight;
	private Double bmi;
	private String rank;
	private Trainer trainer;

	public MemberDTO() {
	}

	public MemberDTO(Long id, String name, Double height, Double weight, Double bmi, String rank, Trainer trainer) {
		this.id = id;
		this.name = name;
		this.height = height;
		this.weight = weight;
		this.bmi = bmi;
		this.rank = rank;
		this.trainer = trainer;
	}

	public MemberDTO(Member entity) {
		this.id = entity.getId();
		this.name = entity.getName();
		this.height = entity.getHeight();
		this.weight = entity.getWeight();
		this.bmi = entity.getBmi();
		this.rank = entity.getRank();
		this.trainer = entity.getTrainer();
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Double getHeight() {
		return height;
	}

	public void setHeight(Double height) {
		this.height = height;
	}

	public Double getWeight() {
		return weight;
	}

	public void setWeight(Double weight) {
		this.weight = weight;
	}

	public Double getBmi() {
		return bmi;
	}

	public void setBmi(Double bmi) {
		this.bmi = bmi;
	}

	public String getRank() {
		return rank;
	}

	public void setRank(String rank) {
		this.rank = rank;
	}

	public Trainer getTrainer() {
		return trainer;
	}

	public void setTrainer(Trainer trainer) {
		this.trainer = trainer;
	}

}
