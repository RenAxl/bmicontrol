package com.thayren.bmicontrol.entities;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "tb_member")
public class Member implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private String name;

	private Integer height;
	private Integer weight;
	private Integer bmi;
	private String rank;

	@ManyToOne
	@JoinColumn(name = "trainer_id")
	private Trainer trainer;

	public Member() {
	}

	public Member(Long id, String name, Integer height, Integer weight, Trainer trainer) {
		this.id = id;
		this.name = name;
		this.height = height;
		this.weight = weight;
		this.trainer = trainer;
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

	public Integer getHeight() {
		return height;
	}

	public void setHeight(Integer height) {
		this.height = height;
	}

	public Integer getWeight() {
		return weight;
	}

	public void setWeight(Integer weight) {
		this.weight = weight;
	}

	public Trainer getTrainer() {
		return trainer;
	}

	public void setTrainer(Trainer trainer) {
		this.trainer = trainer;
	}

	public Integer calculateBMI(Integer height, Integer weight) {
		this.bmi = weight / (height * height);
		return this.bmi;
	}

	public String calculateRank(Integer bmi) {
		if (bmi < 18.5)
			this.rank = "MAGREZA";
		if (bmi >= 18.5 || bmi <= 24.9)
			this.rank = "NORMAL";
		if (bmi >= 25.0 || bmi <= 29.9)
			this.rank = "SOBREPESO";
		if (bmi >= 30.0 || bmi <= 39.9)
			this.rank = "OBESIDADE";
		if (bmi > 40.0)
			this.rank = "OBESIDADE GRAVE";
		return this.rank;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((id == null) ? 0 : id.hashCode());
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Member other = (Member) obj;
		if (id == null) {
			if (other.id != null)
				return false;
		} else if (!id.equals(other.id))
			return false;
		return true;
	}
}
