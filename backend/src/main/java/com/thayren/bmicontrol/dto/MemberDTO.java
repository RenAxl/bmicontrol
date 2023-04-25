package com.thayren.bmicontrol.dto;

import java.io.Serializable;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Positive;
import javax.validation.constraints.Size;

import com.sun.istack.NotNull;
import com.thayren.bmicontrol.entities.Member;
import com.thayren.bmicontrol.entities.Trainer;

public class MemberDTO implements Serializable {
	private static final long serialVersionUID = 1L;

	private Long id;

	@Size(min = 5, max = 60, message = "O nome deve ter entre 5 a 60 caracteres")
	@NotBlank(message = "Campo requerido")
	private String name;

	@Positive(message = "A altura deve ser um valor positivo")
	@NotNull
	private Integer age;

	@Positive(message = "A altura deve ser um valor positivo")
	@NotNull
	private Double height;

	@Positive(message = "O peso deve ser um valor positivo")
	@NotNull
	private Double weight;

	private Double bmi;
	private String rank;

	private Trainer trainer; // IMPORTANTE: AQUI EU DEVERIA TER COLOCADO TrainerDTO para evitar o loop mas
								// não fiz isto nos commits.

	public MemberDTO() {
	}

	public MemberDTO(Long id, String name, Integer age, Double height, Double weight, Double bmi, String rank,
			Trainer trainer) {
		this.id = id;
		this.name = name;
		this.age = age;
		this.height = height;
		this.weight = weight;
		this.bmi = bmi;
		this.rank = rank;
		this.trainer = trainer;
	}

	public MemberDTO(Member entity) {
		this.id = entity.getId();
		this.name = entity.getName();
		this.age = entity.getAge();
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

	public Integer getAge() {
		return age;
	}

	public void setAge(Integer age) {
		this.age = age;
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
