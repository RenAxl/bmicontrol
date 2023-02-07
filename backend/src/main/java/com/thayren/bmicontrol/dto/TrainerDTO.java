package com.thayren.bmicontrol.dto;

import java.io.Serializable;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Positive;
import javax.validation.constraints.Size;

import com.sun.istack.NotNull;
import com.thayren.bmicontrol.entities.Trainer;

public class TrainerDTO implements Serializable {
	private static final long serialVersionUID = 1L;

	private Long id;
	
	@Size(min = 5, max = 60, message ="O nome deve ter entre 5 a 60 caracteres")
	@NotBlank(message = "Campo requerido")
	private String name;
	
	@Positive(message = "A idade deve ser um valor positivo")
	@NotNull
	private Integer age;
	
	@Size(min = 11, max = 15, message ="O CPF deve ter entre 13 a 15 caracteres")
	@NotBlank(message = "Campo requerido")
	private String cpf;
	
	@Size(min = 8, max = 15, message ="O numero do celular deve ter entre 8 a 15 caracteres")
	@NotBlank(message = "Campo requerido")
	private String cellPhone;

	public TrainerDTO() {
	}

	public TrainerDTO(Long id, String name, Integer age, String cpf, String cellPhone) {
		this.id = id;
		this.name = name;
		this.age = age;
		this.cpf = cpf;
		this.cellPhone = cellPhone;
	}
	
	public TrainerDTO(Trainer entity) {
		this.id = entity.getId();
		this.name = entity.getName();
		this.age = entity.getAge();
		this.cpf = entity.getCpf();
		this.cellPhone = entity.getCellPhone();
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

	public String getCpf() {
		return cpf;
	}

	public void setCpf(String cpf) {
		this.cpf = cpf;
	}

	public String getCellPhone() {
		return cellPhone;
	}

	public void setCellPhone(String cellPhone) {
		this.cellPhone = cellPhone;
	}
}
