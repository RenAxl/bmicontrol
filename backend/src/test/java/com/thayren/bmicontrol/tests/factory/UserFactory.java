package com.thayren.bmicontrol.tests.factory;

import com.thayren.bmicontrol.dto.UserDTO;
import com.thayren.bmicontrol.entities.Role;
import com.thayren.bmicontrol.entities.User;

public class UserFactory {

	public static User createUser() {
		User user = new User(1L, "Slash", "slash@email.com",
				"$2a$10$eACCYoNOHEqXve8aIWT8Nu3PkMXWBaOxJ9aORUYzfMQCbVBIhZ8tG");
		user.getRoles().add(new Role(1L, null));
		return user;
	}

	public static UserDTO createProductDTO() {
		User user = createUser();
		return new UserDTO(user);
	}

	public static UserDTO createProductDTO(Long id) {
		UserDTO dto = createProductDTO(); 
		dto.setId(id);
		return dto;
	}
}
